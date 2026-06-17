const fs = require("fs");
const path = require("path");

const CONTENT_DIR = path.join(__dirname, "../content/variable-dc-power-supply");
const HISTORY_FILE = path.join(CONTENT_DIR, "history.json");

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

function slugify(text) {
  return text.toString().toLowerCase().trim()
    .replace(/\s+/g, "-").replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
}

// Start date: 2026-05-13 (Wednesday)
// Article 6 falls exactly on 2026-06-17 (Today)
function getNewDate(index) {
  const startDate = new Date("2026-05-13");
  startDate.setDate(startDate.getDate() + index * 7);
  return startDate.toISOString().split("T")[0];
}

function run() {
  console.log("Shifting dates for 52 articles...");
  
  let history = { rssTitles: [], usedKeywords: [], publishedArticles: [], rssSourceIndex: 0 };
  if (fs.existsSync(HISTORY_FILE)) {
    try {
      history = JSON.parse(fs.readFileSync(HISTORY_FILE, "utf-8"));
    } catch (e) {
      console.warn("Could not read history.json, resetting.");
    }
  }

  // Clear existing publishedArticles to recreate them in order
  history.publishedArticles = [];
  history.usedKeywords = [];

  for (let i = 0; i < KEYWORD_TOPICS.length; i++) {
    const keyword = KEYWORD_TOPICS[i];
    const slug = slugify(keyword).slice(0, 80);
    const newDate = getNewDate(i);
    const filePath = path.join(CONTENT_DIR, `${slug}.md`);

    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, "utf-8");
      
      // Update date: YYYY-MM-DD inside frontmatter
      const updatedContent = content.replace(/(date:\s*['"]?)\d{4}-\d{2}-\d{2}(['"]?)/, `$1${newDate}$2`);
      
      fs.writeFileSync(filePath, updatedContent, "utf-8");
      console.log(`Updated [${i + 1}/52]: ${slug} -> ${newDate}`);
      
      history.usedKeywords.push(keyword);
      history.publishedArticles.push({
        slug,
        date: newDate,
        source: "pre-generated"
      });
    } else {
      console.warn(`File not found: ${filePath}`);
    }
  }

  fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2), "utf-8");
  console.log("\n========================================================");
  console.log("SUCCESS: All dates shifted successfully! exactly 6 articles live as of today.");
  console.log(`History file updated at: ${HISTORY_FILE}`);
  console.log("========================================================\n");
}

run();
