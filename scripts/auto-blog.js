/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Auto Content Generator — /variable-dc-power-supply
 *
 * Each weekly run:
 *   1. Rotates through multiple RSS sources, picks a fresh headline to rewrite
 *      (falls back to keyword generation if all RSS items are already used)
 *   2. Generates 1 article per run
 *   3. Checks Google indexing of previously published articles (A + D):
 *        A → Google Cache probe
 *        D → publish date > 21 days fallback
 *   4. If any article is confirmed indexed → new article gets a main-site external link
 *      (random mix: anchor text / bare URL / both + authority citation)
 *   5. Every article includes an authority citation regardless of link strategy
 */

const fs = require("fs");
const path = require("path");

// ─── Configuration ────────────────────────────────────────────────────────────

const SITE_BASE = "https://audiofictionband.com";
const CONTENT_SLUG_BASE = "variable-dc-power-supply";
const MAIN_SITE_HOME = "https://variabledcpowersupply.com/";
const MAIN_SITE_800V  = "https://variabledcpowersupply.com/800v-dc-power-supplies";

const CONTENT_DIR  = path.join(__dirname, `../content/${CONTENT_SLUG_BASE}`);
const HISTORY_FILE = path.join(CONTENT_DIR, "history.json");

const INDEX_CONFIRM_DAYS = 21; // days before D-fallback confirms indexing

// ─── RSS Sources (rotated round-robin) ────────────────────────────────────────

const RSS_SOURCES = [
  {
    name: "Google News — DC Power Supply",
    url: "https://news.google.com/rss/search?q=variable+DC+power+supply+OR+programmable+DC+power+supply+OR+800V+power+supply&hl=en-US&gl=US&ceid=US:en",
  },
  {
    name: "Google News — EV Battery Testing",
    url: "https://news.google.com/rss/search?q=EV+battery+testing+power+supply+OR+800V+electric+vehicle+charging&hl=en-US&gl=US&ceid=US:en",
  },
  {
    name: "EEVblog",
    url: "https://www.eevblog.com/feed/",
  },
  {
    name: "Electronics-Lab",
    url: "https://www.electronics-lab.com/feed/",
  },
  {
    name: "Power Electronics News",
    url: "https://www.powerelectronicsnews.com/feed/",
  },
  {
    name: "Google News — Solar Inverter & MPPT",
    url: "https://news.google.com/rss/search?q=solar+inverter+MPPT+testing+OR+photovoltaic+power+supply+lab&hl=en-US&gl=US&ceid=US:en",
  },
];

// ─── Authority Citation Pool ──────────────────────────────────────────────────

const AUTHORITY_CITATIONS = [
  { name: "IEEE Std 488.2 (SCPI)", url: "https://standards.ieee.org/ieee/488.2/718/" },
  { name: "IEC 61010 Lab Safety Standard", url: "https://www.iec.ch/safety" },
  { name: "NIST Electrical Measurement Guidelines", url: "https://www.nist.gov/pml/div683/about/calibration" },
  { name: "U.S. DOE EV Charging Infrastructure Report", url: "https://www.energy.gov/eere/vehicles/electric-vehicle-charging" },
  { name: "Wikipedia — Switched-mode power supply", url: "https://en.wikipedia.org/wiki/Switched-mode_power_supply" },
  { name: "Wikipedia — SCPI", url: "https://en.wikipedia.org/wiki/Standard_Commands_for_Programmable_Instruments" },
  { name: "Wikipedia — Electric vehicle battery", url: "https://en.wikipedia.org/wiki/Electric_vehicle_battery" },
  { name: "IEC 62133 Battery Safety Standard", url: "https://www.iec.ch/iec62133" },
  { name: "SEMI F47 Voltage Sag Immunity Standard", url: "https://www.semi.org/en/standards" },
];

// ─── Long-tail Keyword Topics (52 — covers ~1 year of weekly generation) ──────

const KEYWORD_TOPICS = [
  // — Lab & Selection —
  "how to choose a variable DC power supply for laboratory use",
  "programmable DC power supply vs bench power supply differences",
  "how to read DC power supply specifications datasheet",
  "difference between regulated and programmable DC power supplies",
  "what is a programmable DC power supply used for",
  "variable DC power supply noise specifications explained",
  "DC power supply CC CV mode difference explained",
  "how to calibrate a DC power supply output voltage",
  "how to test DC power supply output regulation accuracy",
  "variable DC power supply output impedance measurement",

  // — 800V & High Voltage —
  "800V DC power supply for EV battery testing explained",
  "how to wire a 800V DC power supply safely",
  "high-voltage DC power supply safety interlocks and LOTO",
  "variable DC power supply for dielectric breakdown testing",
  "DC power supply thermal management and cooling design",
  "how to select DC power supply fuse and circuit breaker ratings",
  "variable DC power supply grounding and shielding best practices",
  "DC power supply transient response testing methods",
  "DC power supply parallel operation for higher current output",
  "DC power supply series connection for higher voltage output",

  // — EV & Energy —
  "how EV drivetrain testing uses programmable DC sources",
  "DC power supply for EV charging station hardware testing",
  "variable DC power supply for hydrogen fuel cell testing",
  "DC power supply for railway traction system simulation",
  "programmable DC power supply for satellite power bus testing",
  "variable DC power supply for aerospace testing applications",
  "variable DC power supply for military avionics test benches",

  // — Solar & Renewable —
  "DC power supply for solar MPPT inverter testing",
  "variable DC power supply for photovoltaic research labs",

  // — Industrial & Automation —
  "DC power supply rack integration for industrial ATE systems",
  "variable DC power supply for motor drive servo testing",
  "DC power supply for semiconductor component burn-in testing",
  "best DC power supply for capacitor burn-in testing",
  "variable DC power supply for supercapacitor charge cycling tests",
  "DC power supply for electrostatic coating industrial applications",
  "programmable DC power supply for battery formation cycling",
  "variable DC power supply for plasma generation systems",

  // — Remote Control & Automation —
  "how to use SCPI commands to control a DC power supply",
  "DC power supply Python automation with PySerial tutorial",
  "how to use LabVIEW to control a programmable DC power supply",
  "programmable DC power supply Ethernet LAN control setup",
  "programmable DC power supply RS485 Modbus RTU configuration",
  "how to set up remote sense wiring on a DC power supply",

  // — Technical Specs & Safety —
  "variable DC power supply ripple noise measurement guide",
  "remote sensing compensation in high-voltage DC power supplies",
  "variable DC power supply current limiting explained",
  "understanding power factor correction in DC power supplies",
  "how to set overvoltage protection on a lab power supply",

  // — Specialist / Research —
  "variable DC power supply for electrochemical research",
  "DC power supply for LED driver testing and validation",
  "programmable DC power supply for telecom equipment testing",
  "variable DC power supply for medical device testing ISO 60601",
];

// ─── Utilities ────────────────────────────────────────────────────────────────

if (!fs.existsSync(CONTENT_DIR)) fs.mkdirSync(CONTENT_DIR, { recursive: true });

let history = { rssTitles: [], usedKeywords: [], publishedArticles: [], rssSourceIndex: 0 };
if (fs.existsSync(HISTORY_FILE)) {
  try {
    const raw = JSON.parse(fs.readFileSync(HISTORY_FILE, "utf-8"));
    if (Array.isArray(raw)) {
      history.rssTitles = raw; // legacy format
    } else {
      history = {
        rssTitles:        raw.rssTitles        || [],
        usedKeywords:     raw.usedKeywords     || [],
        publishedArticles: raw.publishedArticles || [],
        rssSourceIndex:   raw.rssSourceIndex   || 0,
      };
    }
  } catch { console.error("history.json parse error — resetting."); }
}

function slugify(text) {
  return text.toString().toLowerCase().trim()
    .replace(/\s+/g, "-").replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
}
function stripHtml(text) { return text.replace(/<[^>]*>?/gm, "").trim(); }
function saveHistory() {
  fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2), "utf-8");
}
function randomPick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function daysSince(dateStr) {
  return (Date.now() - new Date(dateStr).getTime()) / 86400000;
}

// ─── Google Index Check: A (Cache probe) + D (21-day fallback) ────────────────

async function isIndexed(slug, publishDate) {
  // Method A: Google Cache probe
  const cacheUrl = `https://webcache.googleusercontent.com/search?q=cache:${SITE_BASE}/${CONTENT_SLUG_BASE}/${slug}`;
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 7000);
    const res = await fetch(cacheUrl, {
      signal: controller.signal,
      headers: { "User-Agent": "Mozilla/5.0 (compatible; Googlebot/2.1)" },
    });
    clearTimeout(timeout);
    if (res.status === 200) {
      console.log(`  [A] Google Cache confirmed indexed: ${slug}`);
      return true;
    }
  } catch (e) {
    console.log(`  [A] Cache probe blocked/timeout for ${slug}: ${e.message}`);
  }

  // Method D: 21-day fallback
  if (publishDate && daysSince(publishDate) >= INDEX_CONFIRM_DAYS) {
    console.log(`  [D] ${slug} published ${Math.floor(daysSince(publishDate))}d ago → assumed indexed`);
    return true;
  }

  return false;
}

async function anyArticleIndexed() {
  if (!history.publishedArticles || history.publishedArticles.length === 0) return false;
  for (const article of history.publishedArticles) {
    if (await isIndexed(article.slug, article.date)) return true;
  }
  return false;
}

// ─── Link & Citation Strategy ─────────────────────────────────────────────────

function buildLinkInstructions(hasIndexedArticle) {
  const citation = randomPick(AUTHORITY_CITATIONS);
  const authorityNote = `Include a natural reference to "${citation.name}" (${citation.url}) as a credibility citation — mention it in a sentence, do not just list it as a hyperlink.`;

  if (!hasIndexedArticle) {
    // No confirmed indexed articles yet — no main-site link
    return `External link policy: Do NOT include any links to variabledcpowersupply.com in this article (the site is still building authority). ${authorityNote}`;
  }

  // Randomly select link style
  const roll = Math.random();
  if (roll < 0.35) {
    // Anchor text link
    const anchors = ["variable DC power supply", "programmable DC power supply", "800V DC power supply", "high-voltage DC power supply"];
    const anchor = randomPick(anchors);
    return `External link policy: Naturally embed ONE anchor-text link in the article body using the text "${anchor}" linking to ${MAIN_SITE_800V} — insert it where it reads naturally in context. Also: ${authorityNote}`;
  } else if (roll < 0.65) {
    // Bare URL
    const target = Math.random() < 0.5 ? MAIN_SITE_HOME : MAIN_SITE_800V;
    return `External link policy: Naturally include ONE bare URL (${target}) in the article — place it in a "Further Reading" or "Reference" note at the end of a relevant section. Also: ${authorityNote}`;
  } else if (roll < 0.85) {
    // Both anchor + authority
    return `External link policy: Include ONE anchor-text link to ${MAIN_SITE_800V} (anchor: "variable DC power supply" or similar) AND reference ${citation.name} (${citation.url}) as a standards citation. Place both naturally within the article body.`;
  } else {
    // No main-site link this article — just authority
    return `External link policy: Do NOT link to variabledcpowersupply.com in this article. Instead focus on quality content. ${authorityNote}`;
  }
}

// ─── Gemini API ───────────────────────────────────────────────────────────────

async function callGemini(apiKey, prompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.72, maxOutputTokens: 3000 },
    }),
  });
  if (!res.ok) throw new Error(`Gemini API ${res.status}: ${await res.text()}`);
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

// ─── Mode 1: RSS Rewrite ──────────────────────────────────────────────────────

async function generateFromRss(apiKey, linkInstructions) {
  // Rotate through RSS sources
  const sourceIdx = history.rssSourceIndex % RSS_SOURCES.length;
  const source = RSS_SOURCES[sourceIdx];
  history.rssSourceIndex = (sourceIdx + 1) % RSS_SOURCES.length;

  console.log(`\n[RSS] Source: ${source.name}`);

  let xmlText;
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    const res = await fetch(source.url, { signal: controller.signal });
    clearTimeout(timeout);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    xmlText = await res.text();
  } catch (err) {
    console.warn(`  RSS fetch failed: ${err.message}`);
    return null;
  }

  const items = xmlText.match(/<item>([\s\S]*?)<\/item>/g) || [];
  console.log(`  Found ${items.length} items`);

  for (const itemXml of items) {
    const title = stripHtml((itemXml.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || "");
    const description = stripHtml((itemXml.match(/<description>([\s\S]*?)<\/description>/) || [])[1] || "");
    if (!title || history.rssTitles.includes(title)) continue;

    console.log(`  Rewriting: "${title}"`);
    const today = new Date().toISOString().split("T")[0];

    const prompt = `You are a professional B2B electrical engineering content writer and SEO specialist for "AFB Power", a brand of variable and 800V programmable DC power supplies.

Rewrite the following industry headline into a high-quality original technical article (700-900 words) for engineers and procurement managers.

News Title: "${title}"
News Context: "${description}"

Writing requirements:
1. Professional, authoritative B2B engineering tone.
2. Structure: H2 for introduction, H2 for technical challenges, H2 for the role of variable/programmable DC power supplies, H2 for future outlook.
3. ${linkInstructions}
4. Output standard Markdown only.
5. Begin with a YAML frontmatter block with exactly these keys:
---
title: "[SEO-optimised H1 title]"
date: "${today}"
author: "AFB Power Editor"
keywords: ["variable dc power supply", "[2-3 other relevant keywords]"]
summary: "[1-2 sentence overview]"
---

Output ONLY the raw Markdown including the YAML header. Do NOT wrap in a \`\`\`markdown block.`;

    const raw = await callGemini(apiKey, prompt);
    const markdown = cleanMarkdown(raw);
    const slug = slugify(title).slice(0, 80);
    writeArticle(slug, markdown);

    history.rssTitles.push(title);
    history.publishedArticles.push({ slug, date: today, source: source.name });
    return slug;
  }

  console.log("  No new RSS items found in this source.");
  return null;
}

// ─── Mode 2: Keyword Generation ───────────────────────────────────────────────

async function generateFromKeyword(apiKey, linkInstructions) {
  const unused = KEYWORD_TOPICS.filter((k) => !history.usedKeywords.includes(k));
  if (unused.length === 0) {
    console.log("\n[KW] All keywords used — resetting.");
    history.usedKeywords = [];
    unused.push(...KEYWORD_TOPICS);
  }

  const keyword = randomPick(unused);
  console.log(`\n[KW] Generating: "${keyword}"`);

  const today = new Date().toISOString().split("T")[0];
  const prompt = `You are a professional B2B electrical engineering content writer and SEO specialist for "AFB Power", a brand of variable and 800V programmable DC power supplies.

Write a high-quality original technical article (700-900 words) targeting the following keyword topic for engineers and purchasing managers.

Target Keyword: "${keyword}"

Writing requirements:
1. Professional, authoritative B2B engineering tone.
2. Structure: clear introduction H2, 3-4 H2 sections covering technical depth, practical guidance, and application use cases.
3. Include specific technical details: relevant specs, wiring notes, safety considerations, or programming examples where applicable.
4. ${linkInstructions}
5. Output standard Markdown only.
6. Begin with a YAML frontmatter block with exactly these keys:
---
title: "[SEO-optimised H1 title directly targeting the keyword]"
date: "${today}"
author: "AFB Power Editor"
keywords: ["variable dc power supply", "${keyword.split(" ").slice(0, 5).join(" ")}", "[1-2 more related keywords]"]
summary: "[1-2 sentence overview]"
---

Output ONLY the raw Markdown including the YAML header. Do NOT wrap in a \`\`\`markdown block.`;

  const raw = await callGemini(apiKey, prompt);
  const markdown = cleanMarkdown(raw);
  const slug = slugify(keyword).slice(0, 80);
  writeArticle(slug, markdown);

  history.usedKeywords.push(keyword);
  history.publishedArticles.push({ slug, date: today, source: "keyword" });
  return slug;
}

// ─── Main ──────────────────────────────────────────────────────────────────────

async function run() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("Error: GEMINI_API_KEY environment variable not set.");
    process.exit(1);
  }

  console.log("=== Auto Content Generator (/variable-dc-power-supply) ===");
  console.log(`Published articles tracked: ${history.publishedArticles.length}`);

  // Step 1: Check indexing status (A + D)
  console.log("\nChecking Google index status of published articles...");
  const indexed = await anyArticleIndexed();
  console.log(`Indexing confirmed: ${indexed}`);

  // Step 2: Build link/citation instructions based on indexing
  const linkInstructions = buildLinkInstructions(indexed);
  console.log(`Link strategy: ${linkInstructions.slice(0, 80)}...`);

  // Step 3: Try RSS first, fall back to keyword
  let slug = await generateFromRss(apiKey, linkInstructions);
  if (!slug) {
    slug = await generateFromKeyword(apiKey, linkInstructions);
  }

  // Step 4: Save history
  saveHistory();
  console.log(`\n✓ Done. Article slug: ${slug}`);
}

run().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
