/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Auto Content Generator for /variable-dc-power-supply
 *
 * Modes:
 *   1. RSS_REWRITE  — Fetch Google News RSS, pick a fresh headline, rewrite as article
 *   2. KEYWORD_GEN  — Pick from a keyword list and generate an original article
 *
 * Each run generates up to TARGET_ARTICLES_PER_RUN articles (default: 2),
 * alternating between modes to keep content varied.
 */

const fs = require("fs");
const path = require("path");

// ─── Configuration ───────────────────────────────────────────────────────────

const TARGET_ARTICLES_PER_RUN = 2;

const RSS_FEED_URL =
  "https://news.google.com/rss/search?q=variable+DC+power+supply+OR+800V+power+supply+OR+programmable+DC+power+supply+OR+EV+battery+testing&hl=en-US&gl=US&ceid=US:en";

const CONTENT_DIR = path.join(__dirname, "../content/variable-dc-power-supply");
const HISTORY_FILE = path.join(CONTENT_DIR, "history.json");

// Long-tail keyword list for original article generation
const KEYWORD_TOPICS = [
  "how to choose a variable DC power supply for laboratory use",
  "programmable DC power supply vs bench power supply differences",
  "800V DC power supply for EV battery testing explained",
  "how to use SCPI commands to control a DC power supply",
  "variable DC power supply ripple noise measurement guide",
  "remote sensing compensation in high-voltage DC power supplies",
  "DC power supply for solar MPPT inverter testing",
  "how to wire a 800V DC power supply safely",
  "variable DC power supply current limiting explained",
  "best DC power supply for capacitor burn-in testing",
  "DC power supply rack integration for industrial ATE systems",
  "high-voltage DC power supply safety interlocks and LOTO",
  "variable DC power supply for dielectric breakdown testing",
  "how EV drivetrain testing uses programmable DC sources",
  "DC power supply Python automation with PySerial tutorial",
  "understanding power factor correction in DC power supplies",
  "variable DC power supply for motor drive servo testing",
  "difference between regulated and programmable DC power supplies",
  "how to set overvoltage protection on a lab power supply",
  "variable DC power supply for photovoltaic research labs",
];

// ─── Utilities ───────────────────────────────────────────────────────────────

if (!fs.existsSync(CONTENT_DIR)) {
  fs.mkdirSync(CONTENT_DIR, { recursive: true });
}

let history = { rssTitles: [], usedKeywords: [] };
if (fs.existsSync(HISTORY_FILE)) {
  try {
    const raw = JSON.parse(fs.readFileSync(HISTORY_FILE, "utf-8"));
    // Support old format (plain array) and new format (object)
    if (Array.isArray(raw)) {
      history.rssTitles = raw;
    } else {
      history = { rssTitles: raw.rssTitles || [], usedKeywords: raw.usedKeywords || [] };
    }
  } catch {
    console.error("Failed to parse history.json, resetting.");
  }
}

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

function stripHtml(text) {
  return text.replace(/<[^>]*>?/gm, "").trim();
}

function saveHistory() {
  fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2), "utf-8");
}

// ─── Gemini API ──────────────────────────────────────────────────────────────

async function callGemini(apiKey, prompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.72, maxOutputTokens: 2800 },
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Gemini API error ${res.status}: ${err}`);
  }
  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("Empty Gemini response");
  return text;
}

function cleanMarkdown(raw) {
  let md = raw.trim();
  if (md.startsWith("```markdown")) md = md.slice(11);
  else if (md.startsWith("```")) md = md.slice(3);
  if (md.endsWith("```")) md = md.slice(0, -3);
  return md.trim();
}

function writeArticle(slug, markdown) {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  fs.writeFileSync(filePath, markdown, "utf-8");
  console.log(`  ✓ Saved: ${filePath}`);
}

// ─── Mode 1: RSS Rewrite ─────────────────────────────────────────────────────

async function generateFromRss(apiKey) {
  console.log("\n[Mode 1] Fetching Google News RSS...");
  let xmlText;
  try {
    const res = await fetch(RSS_FEED_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    xmlText = await res.text();
  } catch (err) {
    console.warn("  RSS fetch failed:", err.message);
    return null;
  }

  const itemMatches = xmlText.match(/<item>([\s\S]*?)<\/item>/g) || [];
  console.log(`  Found ${itemMatches.length} RSS items.`);

  let target = null;
  for (const itemXml of itemMatches) {
    const title = stripHtml((itemXml.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || "");
    const link = stripHtml((itemXml.match(/<link>([\s\S]*?)<\/link>/) || [])[1] || "");
    const description = stripHtml((itemXml.match(/<description>([\s\S]*?)<\/description>/) || [])[1] || "");
    if (!title || history.rssTitles.includes(title)) continue;
    target = { title, link, description };
    break;
  }

  if (!target) {
    console.log("  No new RSS articles found.");
    return null;
  }

  console.log(`  Rewriting: "${target.title}"`);

  const today = new Date().toISOString().split("T")[0];
  const prompt = `You are a professional B2B electrical engineering content writer and SEO expert for "AFB Power", a brand of variable and 800V programmable DC power supplies.

Rewrite the following industry news headline into a high-quality, original technical article (approx 700-900 words) for engineers and purchasing managers.

News Title: "${target.title}"
News Context: "${target.description}"

Writing instructions:
1. Use a professional, authoritative B2B engineering tone.
2. Structure with clear H2 headings: introduce the topic, explain technical challenges, discuss the role of variable/programmable DC power supplies, future outlook.
3. Naturally mention high-voltage testing, programmable DC power supplies, and related specs where relevant — do NOT force-insert brand names.
4. Do NOT add any outgoing hyperlinks.
5. Output standard Markdown only.
6. Begin with a YAML frontmatter block with exactly these keys:
---
title: "[SEO-optimised H1 title for the article]"
date: "${today}"
author: "AFB Power Editor"
keywords: ["variable dc power supply", "[2-3 other relevant keywords]"]
summary: "[1-2 sentence overview]"
---

Output ONLY the raw Markdown including the YAML header. Do NOT wrap in a \`\`\`markdown block.`;

  const raw = await callGemini(apiKey, prompt);
  const markdown = cleanMarkdown(raw);
  const slug = slugify(target.title);

  writeArticle(slug, markdown);
  history.rssTitles.push(target.title);
  return slug;
}

// ─── Mode 2: Keyword Generation ──────────────────────────────────────────────

async function generateFromKeyword(apiKey) {
  const unused = KEYWORD_TOPICS.filter((k) => !history.usedKeywords.includes(k));
  if (unused.length === 0) {
    console.log("\n[Mode 2] All keywords used. Resetting keyword history.");
    history.usedKeywords = [];
    unused.push(...KEYWORD_TOPICS);
  }

  // Pick a random unused keyword
  const keyword = unused[Math.floor(Math.random() * unused.length)];
  console.log(`\n[Mode 2] Generating original article for keyword: "${keyword}"`);

  const today = new Date().toISOString().split("T")[0];
  const prompt = `You are a professional B2B electrical engineering content writer and SEO expert for "AFB Power", a brand of variable and 800V programmable DC power supplies.

Write a high-quality, original technical article (approx 700-900 words) targeting the following keyword topic for engineers and purchasing managers.

Target Keyword Topic: "${keyword}"

Writing instructions:
1. Use a professional, authoritative B2B engineering tone.
2. Structure with a clear introduction, 3-4 H2 sections covering technical detail, practical guidance, and use cases.
3. Include specific technical details: specs, wiring notes, safety considerations, or programming tips where applicable.
4. Do NOT add any outgoing hyperlinks.
5. Output standard Markdown only.
6. Begin with a YAML frontmatter block with exactly these keys:
---
title: "[SEO-optimised H1 title directly targeting the keyword]"
date: "${today}"
author: "AFB Power Editor"
keywords: ["variable dc power supply", "${keyword.split(" ").slice(0, 4).join(" ")}", "[1-2 more related keywords]"]
summary: "[1-2 sentence overview of the article]"
---

Output ONLY the raw Markdown including the YAML header. Do NOT wrap in a \`\`\`markdown block.`;

  const raw = await callGemini(apiKey, prompt);
  const markdown = cleanMarkdown(raw);
  const slug = slugify(keyword);

  writeArticle(slug, markdown);
  history.usedKeywords.push(keyword);
  return slug;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function run() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("Error: GEMINI_API_KEY environment variable is not set.");
    process.exit(1);
  }

  console.log(`Auto Content Generator — target: ${TARGET_ARTICLES_PER_RUN} article(s) per run`);

  let generated = 0;

  // Article 1: RSS rewrite (if available), else keyword
  if (generated < TARGET_ARTICLES_PER_RUN) {
    const slug = await generateFromRss(apiKey);
    if (slug) generated++;
  }

  // Article 2: Always keyword-based
  if (generated < TARGET_ARTICLES_PER_RUN) {
    const slug = await generateFromKeyword(apiKey);
    if (slug) generated++;
  }

  // If RSS failed and we still need more, try another keyword
  if (generated < TARGET_ARTICLES_PER_RUN) {
    const slug = await generateFromKeyword(apiKey);
    if (slug) generated++;
  }

  saveHistory();
  console.log(`\nDone. ${generated} article(s) generated this run.`);
}

run().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
