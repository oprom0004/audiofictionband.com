/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Pre-generate 52 Keyword Articles for /variable-dc-power-supply
 */

const fs = require("fs");
const path = require("path");

const CONTENT_DIR = path.join(__dirname, "../content/variable-dc-power-supply");
const HISTORY_FILE = path.join(CONTENT_DIR, "history.json");

// ─── Manual Env Loader ────────────────────────────────────────────────────────
function loadEnv() {
  const envFiles = [
    path.join(__dirname, "../.env"),
    path.join(__dirname, "../.env.local"),
    path.join(__dirname, "../.env.production")
  ];
  for (const envFile of envFiles) {
    if (fs.existsSync(envFile)) {
      console.log(`Loading env from ${envFile}...`);
      const content = fs.readFileSync(envFile, "utf-8");
      content.split(/\r?\n/).forEach((line) => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) return;
        const match = trimmed.match(/^([^=]+)=(.*)$/);
        if (match) {
          const key = match[1].trim();
          const val = match[2].trim().replace(/^['"]|['"]$/g, "");
          if (!process.env[key]) {
            process.env[key] = val;
          }
        }
      });
    }
  }
}

loadEnv();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// ─── 52 Keyword Topics ────────────────────────────────────────────────────────
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

function slugify(text) {
  return text.toString().toLowerCase().trim()
    .replace(/\s+/g, "-").replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
}

function randomPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function cleanMarkdown(raw) {
  let md = raw.trim();
  if (md.startsWith("```markdown")) md = md.slice(11);
  else if (md.startsWith("```")) md = md.slice(3);
  if (md.endsWith("```")) md = md.slice(0, -3);
  return md.trim();
}

const FALLBACK_MODELS = [
  "gemini-2.5-flash",
  "gemini-3.5-flash",
  "gemini-2.0-flash",
  "gemini-3.1-flash-lite",
  "gemini-2.5-flash-lite"
];
let currentModelIndex = 0;

async function callGemini(apiKey, prompt) {
  let attempts = 0;
  while (attempts < FALLBACK_MODELS.length) {
    const model = FALLBACK_MODELS[currentModelIndex];
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.72, maxOutputTokens: 3000 },
        }),
      });
      
      const resText = await res.text();
      if (!res.ok) {
        if (res.status === 429 || resText.includes("RESOURCE_EXHAUSTED") || res.status === 400 || resText.includes("Quota exceeded")) {
          console.warn(`      ⚠️ Model ${model} rate-limited or exhausted. Rotating to next model...`);
          currentModelIndex = (currentModelIndex + 1) % FALLBACK_MODELS.length;
          attempts++;
          continue;
        }
        throw new Error(`Gemini API ${res.status}: ${resText}`);
      }
      
      const data = JSON.parse(resText);
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!text) throw new Error("Empty Gemini response");
      return text;
    } catch (e) {
      if (attempts >= FALLBACK_MODELS.length - 1) {
        throw e;
      }
      console.warn(`      ⚠️ Error with ${model}: ${e.message}. Trying next model...`);
      currentModelIndex = (currentModelIndex + 1) % FALLBACK_MODELS.length;
      attempts++;
      await new Promise(r => setTimeout(r, 1000));
    }
  }
  throw new Error("All fallback models exhausted!");
}

// Stagger start: 2026-01-07 (first Wednesday of 2026)
function getStaggeredDate(index) {
  const startDate = new Date("2026-01-07");
  startDate.setDate(startDate.getDate() + index * 7);
  return startDate.toISOString().split("T")[0];
}

async function run() {
  if (!GEMINI_API_KEY) {
    console.error("\n========================================================");
    console.error("ERROR: GEMINI_API_KEY environment variable is not set!");
    console.error("Please create a `.env` file in the project root with:");
    console.error("GEMINI_API_KEY=your_actual_api_key_here");
    console.error("========================================================\n");
    process.exit(1);
  }

  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
  }

  // Load existing history.json
  let history = { rssTitles: [], usedKeywords: [], publishedArticles: [], rssSourceIndex: 0 };
  if (fs.existsSync(HISTORY_FILE)) {
    try {
      const raw = JSON.parse(fs.readFileSync(HISTORY_FILE, "utf-8"));
      if (!Array.isArray(raw)) {
        history = {
          rssTitles: raw.rssTitles || [],
          usedKeywords: raw.usedKeywords || [],
          publishedArticles: raw.publishedArticles || [],
          rssSourceIndex: raw.rssSourceIndex || 0,
        };
      }
    } catch (e) {
      console.warn("Could not read history.json, starting fresh.");
    }
  }

  console.log(`Starting generation for ${KEYWORD_TOPICS.length} articles...`);

  for (let i = 0; i < KEYWORD_TOPICS.length; i++) {
    const keyword = KEYWORD_TOPICS[i];
    const slug = slugify(keyword).slice(0, 80);
    const date = getStaggeredDate(i);
    const filePath = path.join(CONTENT_DIR, `${slug}.md`);

    console.log(`[${i + 1}/${KEYWORD_TOPICS.length}] Keyword: "${keyword}"`);
    console.log(`      Date: ${date}`);
    console.log(`      Slug: ${slug}`);

    // If file exists, skip generation but ensure history tracking
    if (fs.existsSync(filePath)) {
      console.log(`      ✓ File already exists. Skipping API call.`);
      if (!history.usedKeywords.includes(keyword)) {
        history.usedKeywords.push(keyword);
      }
      if (!history.publishedArticles.some(a => a.slug === slug)) {
        history.publishedArticles.push({ slug, date, source: "pre-generated" });
      }
      continue;
    }

    const citation = randomPick(AUTHORITY_CITATIONS);
    const prompt = `You are a professional B2B electrical engineering content writer and SEO specialist for "AFB Power", a premium manufacturer of programmable and variable DC power supplies.
    
Write a high-quality original technical article (700-900 words) targeting the following keyword topic for electrical test engineers, project managers, and lab technicians.

Target Keyword Topic: "${keyword}"

Writing requirements:
1. Tone: Professional, highly authoritative, and engineering-focused. Avoid excessive marketing buzzwords; use clean technical language.
2. Structure: 
   - Start with a clear introduction section under an H2 heading.
   - Use 3-4 H2 sections covering technical depth, specifications, practical engineering guide, or industry use cases.
   - Use H3 subheadings where necessary to structure complex topics.
3. Specific details:
   - Reference "AFB Power" as the brand.
   - Mention product lines like the ETM series (e.g. ETM-8001 (1A), ETM-8002 (2A), ETM-8003 (3A), ETM-8005 (5A), ETM-8006 (6A)), all being programmable DC power supplies supporting up to 800V DC output.
   - Include specific electrical parameters (e.g., ripple noise, remote sense, CC/CV crossover, response time, voltage sag immunity SEMI F47) where relevant to the topic.
4. Authority Citation:
   - Include a natural reference to "${citation.name}" (${citation.url}) as a standards/credibility citation. Introduce it naturally in a sentence (e.g., "...conforming to ${citation.name}..."). Use standard markdown link syntax like [${citation.name}](${citation.url}).
5. No External Link:
   - Do NOT include any links to "variabledcpowersupply.com" in this article body.
6. Output:
   - Standard Markdown format only.
   - Begin with a YAML frontmatter block containing exactly these keys:
---
title: "[SEO-optimised H1 title directly targeting the keyword]"
date: "${date}"
author: "AFB Power Editor"
keywords: ["variable dc power supply", "${keyword.split(" ").slice(0, 5).join(" ")}", "[1-2 more related keywords]"]
summary: "[1-2 sentence technical overview of the article]"
---

Output ONLY the raw Markdown containing the YAML block. Do NOT wrap in a \`\`\`markdown block.`;

    let success = false;
    let retries = 3;
    while (!success && retries > 0) {
      try {
        const raw = await callGemini(GEMINI_API_KEY, prompt);
        const markdown = cleanMarkdown(raw);
        fs.writeFileSync(filePath, markdown, "utf-8");
        console.log(`      ✓ Article generated and saved.`);
        success = true;
      } catch (err) {
        retries--;
        console.error(`      ✗ Error generating article: ${err.message}. Retries left: ${retries}`);
        if (retries === 0) {
          console.error("Stopping script due to multiple failures.");
          process.exit(1);
        }
        await new Promise(r => setTimeout(r, 2000));
      }
    }

    if (!history.usedKeywords.includes(keyword)) {
      history.usedKeywords.push(keyword);
    }
    if (!history.publishedArticles.some(a => a.slug === slug)) {
      history.publishedArticles.push({ slug, date, source: "pre-generated" });
    }

    // Save history.json incrementally
    fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2), "utf-8");
    
    // Add small delay to avoid rate limits
    await new Promise(r => setTimeout(r, 1000));
  }

  console.log("\n========================================================");
  console.log("SUCCESS: All 52 keyword articles pre-generated successfully!");
  console.log(`History file saved at: ${HISTORY_FILE}`);
  console.log("========================================================\n");
}

run().catch((err) => {
  console.error("Fatal generator error:", err);
  process.exit(1);
});
