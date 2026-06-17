# audiofictionband.com 开发及技术要点说明书 (Development & Technical Guide)

本指南详细记录了 `audiofictionband.com` 网站中 `/variable-dc-power-supply` 内容中心（Content Hub）的设计架构、自动化发布系统、API 机制以及邮件通知系统的核心技术要点，以便后续维护与开发。

---

## 1. 整体架构与发布策略

内容中心采用了**双轨制（Dual-Track）**的内容发布与时间轴管理，既保证了有规律的基线内容更新，又引入了高权重的行业动态新闻：

| 轨道类型 | 更新频率 | 发布日期 | 内容来源 | 状态控制机制 |
| :--- | :--- | :--- | :--- | :--- |
| **基线文章轨道 (Baseline)** | 每周 1 篇 | **每周日** | 预先生成的 52 篇长尾关键词文章 | 静态编译过滤未来的发布日期 |
| **行业改写轨道 (Rewriter)** | 每周 1 篇 | **每周三** | 实时抓取 Google News/EEVblog 等 RSS 动态并通过 Gemini 改写 | GitHub Actions 自动生成并提交到仓库 |

---

## 2. 核心技术组件及文件结构

```text
audiofictionband.com/
├── .github/workflows/
│   └── auto-blog.yml              # 每周三自动改写与部署工作流（集成邮件通知）
├── content/variable-dc-power-supply/
│   ├── history.json               # 记录已生成文章的历史库（防重复生成）
│   └── [slug].md                  # 所有的文章 Markdown 源文件（预生成+后续自动改写）
├── scripts/
│   ├── auto-blog.js               # 每周三定时改写核心脚本（RSS抓取、API调用、外链注入、Google索引检查）
│   ├── pre-generate.js            # [一次性使用] 预生成52篇基准文章的本地脚本（含多模型轮换防超限）
│   └── shift-dates.js             # [一次性使用] 批量修改本地文章发布日期的辅助脚本
└── src/
    ├── app/
    │   ├── variable-dc-power-supply/
    │   │   ├── page.tsx           # 内容中心首页列表（实现已发布文章的时间过滤）
    │   │   └── [slug]/
    │   │       └── page.tsx       # 文章详情页（自定义 Markdown 渲染器、外链跳转与404控制）
    │   └── sitemap.ts             # 网站站点地图生成器（动态过滤未发布的文章）
    └── components/
        └── Breadcrumbs.tsx        # 动态面包屑导航组件（支持专有名词大写自动解析）
```

---

## 3. 技术要点详解

### 3.1 定时发布机制 (Scheduled Release Filter)
在 Next.js 的静态导出 (`next export`) 架构下，所有 Markdown 均会被预编译为 HTML。我们通过以下方式实现“未来文章的定时隐藏”：
* **首页与列表过滤**：
  在 `src/app/variable-dc-power-supply/page.tsx` 中，通过 `new Date(post.date) <= new Date()` 过滤仅展示发布日期小于或等于当前编译日期的文章。
* **详情页 404 保护**：
  在 `src/app/variable-dc-power-supply/[slug]/page.tsx` 中，`generateStaticParams()` 只为当前已发布的文章预生成路由。若用户通过 URL 直接访问未来日期文章，程序会自动返回 `notFound()`（404）。
* **Sitemap 过滤**：
  `src/app/sitemap.ts` 只向搜索引擎提交当前可见文章，避免未来文章被提前抓取。

### 3.2 行业动态改写引擎 (`auto-blog.js`)
* **多 RSS 源轮询机制**：
  轮询抓取包含 Google News（可变电源/EV测试等关键字）、EEVblog、Electronics-Lab、Power Electronics News 等多个权威 RSS 源，自动跳过 `history.json` 中已重写的文章。
* **健壮的兜底逻辑 (Fallback)**：
  如果 RSS 请求由于网络或墙的干扰失败，或者当天没有新动态，脚本会**自动切换**为利用预设的 52 个长尾关键词话题生成文章，确保流程永不断流。
* **外链与高权重引用注入 (Link Strategy)**：
  * **主站外链注入**：定时检查历史上已发布文章的 Google 索引状态（通过 Google Cache 探测与时间差双轨确认）。一旦确认文章已被 Google 收录，新生成文章才会以预定概率（锚文本、裸链接等混合形态）合理注入指向主站 `variabledcpowersupply.com` 的外部链接。
  * **权威标准引用**：无论是否注入主站链接，文章都会随机注入 IEEE Std 488.2、IEC 61010 实验室安全标准、NIST 测量指南等行业权威标准规范，以提升文章在 Google SEO 上的 E-E-A-T 权重。

### 3.3 Gemini API 调用与稳定性配置
* **模型版本升级**：
  将老版已废弃接口升级为 **`gemini-2.5-flash`** 的 `v1beta` 端点，以保证 API 的持久有效和低廉成本（免费层）。
* **防止 Markdown 代码块包裹**：
  脚本通过 `cleanMarkdown` 正则处理，剥离大语言模型偶发的 ```markdown ... ``` 外壳，确保输出纯净的 `.md` 文本。

### 3.4 邮件通知与监控系统 (`auto-blog.yml`)
在 GitHub Actions 层面集成了自动化的通知策略：
* **权限申明**：
  显式指定了 `permissions: contents: write, issues: write` 以确保 GitHub 默认的 Action Token 具有提交代码以及操作 Issue 讨论区的完整读写权。
* **成功时发送邮件**：
  运行成功时，Action 通过 `Parse Generated Article Info` 步骤，利用 Shell 的 Heredoc 技术安全地提取出新文章的 `title`、`slug`、`date` 和 `summary` 并保存至 Output。然后通过 `actions/github-script` 在名为 `自动文章生成监控` 的 Issue（包含唯一锚点标记 `<!-- auto-blog-generation-monitor -->`）下追加一条包含文章元信息的评论并 `@oprom0004`。
* **失败时报警邮件**：
  由于任何 API 错误、网络中断或配置失误导致运行失败时，触发 `Notify on Failure` 步骤，在 Issue 下方发送带有红叉标志的错误警告并 `@oprom0004`，同时提供**一键直达运行日志**的排错链接。

---

## 4. 日常维护常用命令

* **启动本地开发服务器**：
  ```bash
  npm run dev
  ```
* **进行生产环境静态打包（验证生成 HTML 页数）**：
  ```bash
  npm run build
  ```
* **在本地模拟执行一次 Wednesday 自动生成**：
  ```bash
  # 需要在本地环境变量中配置 GEMINI_API_KEY
  $env:GEMINI_API_KEY="您的Key"   # PowerShell
  node scripts/auto-blog.js
  ```
