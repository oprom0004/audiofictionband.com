/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

export interface SEOPageMetadata {
  title: string;
  description: string;
}

export const META_DATA_REGISTRY: Record<string, SEOPageMetadata> = {
  home: {
    title: "800V DC Power Supply Range | AFB Variable Power Solutions",
    description: "Explore the AFB Power series of high-performance 800V DC power supplies. Engineered for high-voltage laboratories, EV testbeds, solar MPPT validation, and automated testing."
  },
  current_series: {
    title: "1A to 6A 800V DC Power Supply Specs | AFB Power Lineup",
    description: "Compare technical parameters of the AFB Power 800V DC variable power supplies, spanning from 1A bench models up to 6A industrial rack systems."
  },
  application: {
    title: "800V DC Power Supply Applications | AFB Power Industrial Cases",
    description: "Discover how programmable 800V DC power systems are used in electric vehicle drivetrain testing, solar inverter sweeps, and capacitor aging trials."
  },
  lab: {
    title: "800V DC Power Supply for Labs | Ultra-Low Ripple & Safety",
    description: "Learn about laboratory-grade 800V DC power solutions. Features ultra-low noise ripple, precise mV resolution, and high-voltage safety interlocks."
  },
  price: {
    title: "800V DC Power Supply Price Matrix | Direct Procurement Cost",
    description: "Browse cost considerations, model prices, and options for programmable 800V DC power supplies. Get direct factory-level pricing guides."
  },
  intro_800v: {
    title: "800V DC Power Technology Introduction | Engineering Principles",
    description: "Explore the engineering rationale behind the shift to 800V DC power architecture. Learn how it cuts line losses, reduces cable weight, and boosts thermal efficiency."
  },
  best: {
    title: "Best 800V DC Power Supply Comparison | Lab Performance Benchmark",
    description: "Compare the best 800V DC power supplies. Learn which key specs like transient response and galvanic isolation define premium test instruments."
  },
  buy_online: {
    title: "Buy 800V DC Power Supplies Online | Official Stock Portal",
    description: "Search current worldwide stock and dispatch channels for AFB Power 800V DC programmable power units. Quick secure checkout."
  },
  about_faq: {
    title: "AFB Power FAQ & About eTommens ETM 800V Series",
    description: "Find answers regarding shipping weights, warranty coverage, SCPI control protocols, and support for the ETM 800V variable DC supply series."
  },
  how_to_use: {
    title: "How to Use 805V/800V DC Power Supplies | Physical Installation",
    description: "Comprehensive step-by-step installation and safety manual for 800V variable DC systems. Covers remote sense wiring, LOTO rules, and grid hookups."
  },
  programmable: {
    title: "Programmable 800V DC Power Supply | SCPI Commands & Python Scripts",
    description: "Master remote programming of variable 800V DC systems. Copy Python automation scripts and test commands on our interactive SCPI simulator."
  },
  where_to_buy: {
    title: "Where to Buy 800V DC Power Supplies | Logistics Channels",
    description: "Official authorized buying guide for 800V variable DC power supplies. Learn about shipping, customized packaging, and direct support."
  }
};

export const COMMON_COPYWRITE = {
  brandName: "AFB Power",
  brandSub: "audiofictionband.com",
  brandLogo: "AFB",
  officialStoreUrl: "https://variabledcpowersupply.com/800v-dc-power-supplies",
  storeBtnText: "Check Inventory & Rates ↗",
  buyBtnText: "⚡ Order Online (Factory Direct) ↗"
};

export const HOME_COPYWRITE = {
  hero: {
    badge: "Industrial 800V DC Flagship Series",
    title: "Premium 800V DC ",
    titleHighlight: "Power Supply",
    titleEnd: " Range",
    description: "High-precision, robust <a href=\"https://variabledcpowersupply.com/800v-dc-power-supplies\" target=\"_blank\" rel=\"noopener\" class=\"text-cyan-400 hover:text-cyan-300 underline font-semibold transition-colors\">800V DC power supply</a> systems custom-designed for modern high-voltage testing laboratories, EV battery testbeds, aerospace automation, and rackmount systems. Engineered for continuous peak performance and extreme reliability.",
    badge1Title: "GRID COMPLIANCE",
    badge1Value: "PF Corrected Input",
    badge2Title: "DRIFT PERFORMANCE",
    badge2Value: "≤ 0.01% stability",
    badge3Title: "FORM FACTOR",
    badge3Value: "19\" Rack 2U / 3U"
  },
  applicationsTeaser: [
    { title: "Standard Cabinet Frame", desc: "Designed for standard 19-inch server rack integrations with rear slide-rail support." },
    { title: "Research Laboratories", desc: "Features ultra-low noise ripple, remote sense compensation, and safety interlocks." },
    { title: "Heavy Automation", desc: "Delivers continuous 24/7 power stability under harsh industrial grid environments." },
    { title: "Advanced EV Testbeds", desc: "Simulates high-voltage EV battery cells and charging packs up to 6A continuous current." }
  ],
  configurator: {
    title: "800V DC Interactive Spec Configurator",
    subtitle: "Adjust output parameters to find the appropriate 800V DC model. This utility calculates real-time auxiliary requirements for industrial system integrations.",
    peakCurrentLabel: "Target Peak Current Output:",
    opEnvLabel: "Operation Environment:",
    environments: [
      { id: "lab", label: "Research & Development" },
      { id: "shop", label: "Industrial Floor" },
      { id: "integrator", label: "OEM Rackmount Integration" }
    ],
    remoteSenseTitle: "Enable Remote Sensing Compensation",
    remoteSenseDesc: "Compensates for up to 3.0V line voltage drops in external load cables.",
    outputHeading: "Calculated Engineering Profile",
    skuLabel: "RECOMMENDED SKU:",
    powerLabel: "CALCULATED POWER:",
    heightLabel: "UNIT HEIGHT:",
    awgLabel: "RECOMMENDED AWG:",
    pfcLabel: "Power Factor Correction (PFC):",
    fuseLabel: "Suggested AC Supply Fuse:",
    awgValueLow: "AWG 16 (Shielded)",
    awgValueHigh: "AWG 14 (High Voltage Rated)",
    fuseValueLow: "20A Single-Phase",
    fuseValueHigh: "15A Three-Phase"
  },
  matrix: {
    title: "AFB Power ETM 800V DC Series Parameter Matrix (1A - 6A)",
    thSku: "Model SKU",
    thOutput: "Rated Output",
    thPower: "Peak Power",
    thFrame: "Height Frame",
    thRipple: "Voltage Ripple",
    thPrice: "Unit List Price",
    thAction: "Action",
    detailsBtn: "More details about {id} ↗",
    moreSpecsLink: "Review Expanded Specifications"
  },
  portal: {
    title: "Technical Information Portal",
    cards: [
      { tag: "MANUAL", title: "How to Use 800V Power Supply", route: "how-to-use", desc: "Step-by-step hardware connection diagrams, remote sensing loop wiring, and strict LOTO safety steps." },
      { tag: "LOGISTICS", title: "Where to Buy 800V DC Power Supplies", route: "where-to-buy", desc: "Direct manufacturing sales channels, international logistics, customs clearances, and delivery terms." },
      { tag: "VALUATION", title: "800V DC Series Price List", route: "price", desc: "Detailed pricing structures, bulk discounts, custom interface card costs, and ordering terms." },
      { tag: "STORE", title: "Online Stock & Pricing Portal", route: "buy-online", desc: "Search regional warehouse availability, real-time lead times, and access instant e-commerce purchasing." },
      { tag: "RELIABILITY", title: "Best 800V System Comparison", route: "best", desc: "Detailed performance contrast showing how premium ETM models compare to cheap alternatives on noise indices." },
      { tag: "AUTOMATION", title: "Programmable Commands SCPI", route: "programmable", desc: "Copy Python scripting blocks and test commands in real time using our interactive SCPI console." },
      { tag: "SAFETY", title: "800V Power Supplies for Lab", route: "lab", desc: "Safety loop design, shielding guidelines to minimize noise, and low-drift calibration standards." },
      { tag: "USE CASES", title: "High-Voltage Tech Applications", route: "application", desc: "In-depth case reviews covering solar MPPT algorithm checks, electric motor stress runs, and EV battery simulation." },
      { tag: "TECHNOLOGY", title: "800V DC Technology Intro", route: "intro-800v", desc: "Understand why 800V represents the standard blueprint for high-efficiency electric vehicle drivetrains." },
      { tag: "FAQ", title: "About ETM Series FAQs", route: "about-faq", desc: "Find company calibration benchmarks, package weights, international shipping rates, and warranty FAQs." }
    ]
  },
  cta: {
    badge: "Authorized Procurement Hub",
    title: "Factory-Direct Ordering Gateway",
    description: "Secure your high-voltage equipment dispatch directly from our regional warehouses. Supports trade payments and standard credit gateways.",
    footer: "All transactions are secured via TLS 1.3 encrypted billing protocols."
  }
};

export const PROGRAMMABLE_COPYWRITE = {
  badge: "Automated Testing Sequences",
  title: "Programmable 800V DC Power Supply Control & Scripting",
  description: "Specially designed for automated testing environments and diagnostic systems, the AFB Power ETM 800V series provides full digital remote control. When integrating a <a href=\"https://variabledcpowersupply.com/800v-dc-power-supplies\" target=\"_blank\" rel=\"noopener\" class=\"text-cyan-400 hover:text-cyan-300 underline font-semibold transition-colors\">programmable 800V DC power supply</a> into an automated test system, engineers can script complex voltage profiles, perform dynamic battery simulation runs, and conduct automated burn-in checks using stable RS232, RS485, USB COM, or Ethernet interfaces via industry-standard SCPI syntax.",
  checkoutHeading: "Procure Programmable 800V Power Supplies",
  checkoutSub: "Select digital-controlled models for immediate dispatch or custom enterprise integrations.",
  checkStockLink: "Check Global Warehouse Stock",
  secLabTitle: "Laboratory & Scientific Research Scenarios",
  secLabSub: "Explore how automated voltage sweeps and remote SCPI control ensure precision and safety across scientific test beds.",
  scenarios: [
    {
      badge: "EV Powertrain HIL",
      title: "1. EV BMS & Battery Charging Simulation",
      desc: "Modern EV components (On-Board Chargers, high-voltage battery management chips, and motor controllers) operate between 400V and 800V DC. Using SCPI commands, engineers script battery state-of-charge profiles to verify that safety relays, thermal management systems, and fuses trigger exactly within parameters."
    },
    {
      badge: "Photovoltaic MPPT",
      title: "2. Solar PV Inverter Sweep & MPPT Calibration",
      desc: "String inverters operating near peak 800V ranges need continuous variable voltage sweeps to calibrate Maximum Power Point Tracking (MPPT) algorithms. The ETM power supply acts as a Solar Array Simulator. By programming a curve array, engineers simulate solar sweeps, dynamic cloud cover, and sunrise ramps."
    },
    {
      badge: "Dynamic Aging",
      title: "3. High-Voltage Capacitor Burn-in Tests",
      desc: "Capacitor production facilities and quality control desks stress-test film capacitors at elevated voltages. ETM systems can run consecutive, automated charge-discharge cycles. The 16-bit programming resolution ramps up voltage safely, monitors active leakage current, and discharges the device when completed."
    },
    {
      badge: "Physics Research",
      title: "4. Material Dielectric Breakdown & Physics Labs",
      desc: "Academic labs testing plasma containment, high-voltage insulation materials, and electrostatic arrays rely on absolute resolution step controls. The ETM series features low ripple (≤ 50mVrms) and micro-fine programming increments. In the event of a dielectric breakdown, hardware protections shut down output instantly."
    }
  ],
  terminal: {
    title: "Interactive SCPI Terminal Simulator",
    subtitle: "Test commands in our interactive simulator. Click any command on the right panel, or type commands manually into the prompt line to inspect the power supply's simulated responses.",
    consoleLabel: "SCPI INTERACTIVE CONSOLE",
    placeholder: "Type SCPI query (e.g. VOLT 500) and press Enter...",
    runBtn: "RUN",
    cheatSheetTitle: "SCPI Core Commands",
    cheatSheetSub: "Click any command to load and execute it in the simulator panel:"
  },
  exportCode: {
    title: "Automated Python Script Template",
    copyBtn: "Copy to Clipboard",
    copiedBtn: "Script Copied",
    code: `import serial
import time

# Establish connection to AFB Power 800V DC PSU
ser = serial.Serial(port='COM3', baudrate=9600, timeout=1)

# Initialize and query device identification
ser.write(b'*IDN?\\n')
print("Device IDN:", ser.readline().decode().strip())

# Configure safe test parameters (800V / 5A)
ser.write(b'VOLT 800.0\\n')
ser.write(b'CURR 5.0\\n')

# Turn on high-voltage output terminals
ser.write(b'OUTP ON\\n')
time.sleep(1) # Allow relay stabilization

# Measure output voltage
ser.write(b'MEAS:VOLT?\\n')
print("Measured Volts:", ser.readline().decode().strip())

# Safe shutdown procedure
ser.write(b'OUTP OFF\\n')
ser.close()`
  },
  citations: {
    title: "Technical Standards & Regulatory Citations",
    col1: "Automated high-voltage test setups rely on standardized command structures. The IEEE 488.2 standard defines the communication protocol layers, which are further structured by the Standard Commands for Programmable Instruments (SCPI) Consortium to guarantee syntax uniformity across laboratory hardware.",
    col2: "For system integration and cabinet electrical safety layouts, refer to the official <a href=\"https://variabledcpowersupply.com/etm-8006-4-kob-0-800v-0-6a-high-power-bench-dc-power-supply-variable-with-4-digits-led-display-encoder-coarse-fine-adjustments-knob-short-circuit-protection/\" target=\"_blank\" rel=\"noopener\" class=\"text-cyan-400 hover:text-cyan-300 underline font-semibold transition-colors\">eTM-8006 High-Power ATE Model Specification</a>. This flagship 4.8 kW 800V DC supply supports full remote SCPI scripting over USB, RS232, RS485, and Ethernet."
  }
};

export const LAB_USE_COPYWRITE = {
  badge: "Laboratory Standards",
  title: "800V DC Power Supply Systems for Precision Labs",
  intro: "Within high-voltage scientific labs, research facilities, and university engineering departments, choosing a high-precision <a href=\"https://variabledcpowersupply.com/800v-dc-power-supplies\" target=\"_blank\" rel=\"noopener\" class=\"text-cyan-400 hover:text-cyan-300 underline font-semibold transition-colors\">laboratory 800V DC power supply</a> is vital. High-voltage testing demands not just brute power, but absolute voltage stability, low electrical noise, and fast-acting hardware protections to safeguard sensitive test components and operators.",
  cards: [
    { title: "Ultra-Low Noise Ripple", desc: "Excessive electrical noise can distort semiconductor measurements and trigger false failures. AFB Power laboratory models keep ripple under ≤50mVrms / ≤120mVp-p, ensuring clean DC power for sensitive electronic circuits." },
    { title: "Galvanic Control Isolation", desc: "Standard USB, RS232, and LAN interface ports are fully isolated. This protects host PCs from high-voltage feedback spikes if a device under test fails or breaks down." },
    { title: "Dynamic Safety Interlocks", desc: "Includes external interlock loops (LOTO ready), automated discharge circuits that drain output terminals to safe levels (<42V) in under 2 seconds, and OVP/OCP safety thresholds." }
  ],
  engineeringSpecsTitle: "Engineering Specifications & Laboratory Standards",
  engineeringSpecsCol1: "Precision laboratory research requires stable output calibration. ETM laboratory power supplies leverage high-resolution 16-bit D/A and A/D converters. This enables a programming resolution of up to 12mV for voltage and 0.1mA for current limits, allowing researchers to sweep voltages with high repeatability.",
  engineeringSpecsCol2: "For academic research cells and semiconductor testing requiring low ripple limits, refer to the official <a href=\"https://variabledcpowersupply.com/etm-8001-4-kob-0-800v-0-1a-high-power-bench-dc-power-supply-variable-with-4-digits-led-display-encoder-coarse-fine-adjustments-knob-short-circuit-protection/\" target=\"_blank\" rel=\"noopener\" class=\"text-cyan-400 hover:text-cyan-300 underline font-semibold transition-colors\">eTM-8001 Low-Noise Precision Model Specs</a>. It delivers a 1A rated output with low drift deviations and a precise 12mV tuning resolution."
};

export const HOW_TO_USE_COPYWRITE = {
  badge: "Installation & Hookup Manual",
  title: "How to Install & Operate 800V DC Power Supplies Safely",
  intro: "Deploying an <a href=\"https://variabledcpowersupply.com/800v-dc-power-supplies\" target=\"_blank\" rel=\"noopener\" class=\"text-cyan-400 hover:text-cyan-300 underline font-semibold transition-colors\">800V variable DC power supply</a> requires extreme caution and meticulous safety procedures. Due to the hazards associated with high-voltage setups, operation is fundamentally different from low-voltage systems.",
  steps: [
    {
      num: "01",
      title: "Input Grid Hookup & Thermal Ventilation",
      desc: "Models up to 1.6 kW (1A/2A) operate on standard 220V single-phase grids. Larger models (3A/5A/6A) require 380V/480V three-phase industrial mains. Mount the unit in a standard 19-inch cabinet, ensuring a minimum of 10cm clearance at the front and rear for active ventilation flow."
    },
    {
      num: "02",
      title: "Remote Voltage Sensing Configuration",
      desc: "To compensate for voltage drops across long output cables, connect the positive and negative remote sense terminals directly to the load terminals using shielded twisted-pair wire. Enable remote sensing to ensure the power supply dynamically adjusts its output to compensate for line resistance."
    },
    {
      num: "03",
      title: "Applying SCPI Remote Commands",
      desc: "Connect the host controller via RS232, USB, or Ethernet. Use SCPI syntax to configure voltage and current limits. Ramping rates should be programmed to prevent inrush currents, particularly when testing capacitive loads."
    },
    {
      num: "04",
      title: "Strict Safety & LOTO Procedures",
      desc: "Always implement a physical Lockout/Tagout (LOTO) safety loop using the rear interlock terminals. Verify the unit's automatic discharge bleeders have drained the output potential to safe levels (<42V) before handling output cables."
    }
  ],
  tipsTitle: "Safety Operations & Shielding Recommendations",
  tipsCol1: "High-voltage DC lines are prone to electromagnetic interference. Always use shielded output cables rated for at least 1000V. Ground the shield at a single point to prevent ground loop currents from injecting noise into measurement instrumentation.",
  tipsCol2: "For complete wiring configurations and terminal characteristics, refer directly to the official <a href=\"https://variabledcpowersupply.com/etm-8003c-2-kob-high-power-dc-bench-power-supply-adjustable-800v-3a-with-5-powerful-protections-output-switch-control-low-noise/\" target=\"_blank\" rel=\"noopener\" class=\"text-cyan-400 hover:text-cyan-300 underline font-semibold transition-colors\">eTM-8003C 3A Industrial Model Specification</a>. Always verify safety grounds are securely connected."
};

export const PRICE_COPYWRITE = {
  badge: "Procurement Pricing Guide",
  title: "800V DC Power Supply Pricing Matrices & Options",
  intro: "When researching the cost of an 800V DC power supply, multiple factors influence the price: rated output power, programming interfaces, safety interlocks, and volume terms. Below is a comprehensive breakdown of procurement options and cost drivers.",
  matrixHeading: "Price Guideline & SKU Reference Matrix",
  matrixSub: "Estimated factory-direct pricing for standard programmable configurations. Custom specs can be engineered upon request.",
  detailsCol1: "The major cost driver for variable high-voltage DC power supplies is total output wattage. Benchmark 800W models are optimized for light benchtop laboratory research, while high-capacity 4.8 kW systems utilize advanced PFC circuitry and three-phase input stages, reflecting their heavy-duty industrial application.",
  detailsCol2: "Standard models include USB and RS232 programming ports. Optional interfaces, such as isolated RS485 Modbus, Ethernet LAN, or custom GPIB cards, can be fitted at the factory. Contact AFB Power support for volume procurement quotes or customized integration terms."
};

export const APPLICATION_COPYWRITE = {
  badge: "Industrial Deployments",
  title: "800V DC Power Supply Deployments & Case Studies",
  intro: "The transformation toward clean grid-ties, photovoltaic arrays, and high-voltage 800V electric vehicle architectures requires a reliable <a href=\"https://variabledcpowersupply.com/800v-dc-power-supplies\" target=\"_blank\" rel=\"noopener\" class=\"text-cyan-400 hover:text-cyan-300 underline font-semibold transition-colors\">industrial 800V DC power supply</a> as a continuous testing source. Explore direct application analyses below.",
  demandedLabel: "Core Requirements:",
  cases: [
    {
      id: "ev-charging-battery",
      title: "EV Powertrain & High-Voltage Battery Validation",
      subtitle: "800V Battery System Emulation",
      problem: "Next-generation electric vehicles utilize 800V architecture to achieve ultra-fast charging rates. Validating motor drives, Battery Management Systems (BMS), and onboard charging converters requires a stable high-voltage source capable of emulating battery charge/discharge curves.",
      solution: "By utilizing the ETM-8005 (4kW) or ETM-8006 (4.8kW) in automated ATE test beds, engineering teams simulate real-world battery profiles, verifying component safety and efficiency under dynamic load changes.",
      specDemanded: "Fast transient response (<1.5ms), programmable voltage ramps, and standard remote sense feedback."
    },
    {
      id: "solar-photovoltaics",
      title: "Solar Photovoltaic Inverter MPPT Sweeps",
      subtitle: "Renewable Energy Grid Integration",
      problem: "Commercial solar string inverters operate at open-circuit voltages up to 1000V. Research and production test beds need to simulate dynamic solar irradiance (cloud shadows, sunrise, and sunset) to test inverter tracking efficiency.",
      solution: "ETM system control software acts as a Solar Array Simulator. By programming voltage and current coordinates, engineers sweep the inverter's MPPT input to verify maximum power extraction efficiency.",
      specDemanded: "SCPI list mode programming, high voltage stability, and high conversion efficiency (>90%)."
    },
    {
      id: "lab-materials",
      title: "Dielectric Testing & Material Breakdown",
      subtitle: "Precision Scientific Research",
      problem: "Electrostatic coating labs, material research facilities, and insulation testing stations need precise voltage control without start-up surges or voltage spikes that could pre-maturely damage samples.",
      solution: "The ETM-8001 benchtop unit provides 16-bit D/A resolution, allowing engineers to sweep voltage in millivolt steps. Safety interlocks protect operators if a breakdown occurs.",
      specDemanded: "Ultra-low ripple (≤50mVrms), isolated programming interfaces, and automatic output discharge."
    },
    {
      id: "factory-automation",
      title: "Industrial Robotic Motor & Servo Drive Testing",
      subtitle: "Continuous Duty Cycle Quality Control",
      problem: "Heavy industrial servo drives operating on high-voltage DC buses require hundreds of hours of continuous stress testing under high electromagnetic noise environments to verify long-term reliability.",
      solution: "The ETM-8003 (2.4kW) is designed for continuous 24/7 operation. Fully isolated control interfaces prevent high EMI feedback from interfering with monitoring PLCs or industrial control lines.",
      specDemanded: "Galvanic isolation up to 3000VAC, 24/7 continuous duty cycle rating, and Modbus RTU interface support."
    }
  ]
};

export const ABOUT_FAQ_COPYWRITE = {
  badge: "Corporate Profile & FAQs",
  title: "About AFB Power & ETM Series Technical Support",
  intro: "AFB Power provides sales and technical consultation for advanced industrial power systems. Our flagship ETM series of variable 800V DC power supplies represents the standard for precision, safety, and reliability in laboratories worldwide.",
  aboutText: "Every ETM <a href=\"https://variabledcpowersupply.com/\" target=\"_blank\" rel=\"noopener\" class=\"text-cyan-400 hover:text-cyan-300 underline font-semibold transition-colors\">variable DC power supply</a> is manufactured to strict ISO 9001 standards, certified to CE regulations, and backed by a comprehensive 2-year warranty. Our engineering team provides custom cabinet integration layout advice, remote SCPI control setup guides, and high-voltage safety consultations.",
  faqs: [
    {
      q: "What programming languages are supported for the ETM SCPI interface?",
      a: "The ETM series supports standard IEEE-488.2 SCPI commands. We provide verified library snippets and code examples for Python (PySerial), LabVIEW, MATLAB, and C# to help integrate the unit into automated ATE test systems."
    },
    {
      q: "How does the active discharge circuit protect laboratory operators?",
      a: "At 800V, large capacitive loads store dangerous amounts of energy. The ETM series features active hardware discharge bleeders that engage automatically when the output is turned off, draining the terminal voltage to safe levels (<42V) in under 2 seconds."
    },
    {
      q: "Can ETM power supplies be connected in series or parallel?",
      a: "Yes. Up to two identical ETM units can be connected in series to double the output voltage (up to 1600V), or up to four units in parallel to scale current and total power, provided they share a unified control loop."
    },
    {
      q: "What is the typical shipping weight and lead time?",
      a: "Benchtop models (0.8kW) weigh approximately 8.5 kg, while high-power units (4.8kW) weigh 24 kg. Standard configurations are dispatched within 3-5 business days from our regional distribution hubs."
    }
  ]
};

export const INTRO_800V_COPYWRITE = {
  badge: "Technology Whitepaper",
  title: "The Shift to 800V DC Power Architectures",
  intro: "The transition from low-voltage systems to high-voltage direct current (HVDC) architectures like <a href=\"https://variabledcpowersupply.com/800v-dc-power-supplies\" target=\"_blank\" rel=\"noopener\" class=\"text-cyan-400 hover:text-cyan-300 underline font-semibold transition-colors\">800V DC power systems</a> represents a monumental shift across electric vehicles, renewable storage, and lab testing loops.",
  points: [
    { title: "Reduced Copper Cross-Sections", desc: "By doubling the system voltage from 400V to 800V, the current required to deliver the same power is halved. This allows engineers to use thinner, lighter copper cables, reducing material costs and routing weight in electric vehicle chassis and solar arrays." },
    { title: "Lower System Thermal Losses", desc: "Power loss in electrical cables is proportional to the square of the current (I²R). Halving the current reduces thermal dissipation losses by approximately 75%, greatly increasing efficiency and lowering cooling requirements." },
    { title: "Faster Charging & High Power Density", desc: "For EV applications, 800V battery architectures enable charging speeds up to 350 kW, reducing charging times to under 18 minutes while keeping heat generation manageable." }
  ],
  conclusionTitle: "System Engineering Considerations",
  conclusionCol1: "While the benefits of 800V systems are clear, they demand higher safety standards. Designing test setups operating at 800V DC requires specialized insulation, creepage distances, and safety devices.",
  conclusionCol2: "AFB Power ETM variable DC supplies provide the clean power, safety interlocks, and remote control required to validate next-generation 800V systems safely and reliably."
};

export const BEST_SUPPLY_COPYWRITE = {
  badge: "Benchmark Comparison",
  title: "Selecting the Best 800V DC Power Supply for Your Lab",
  intro: "Choosing the <a href=\"https://variabledcpowersupply.com/800v-dc-power-supplies\" target=\"_blank\" rel=\"noopener\" class=\"text-cyan-400 hover:text-cyan-300 underline font-semibold transition-colors\">best 800V DC power supply</a> for your testing setup requires evaluating key parameters beyond simple ratings. Compare ETM models against generic components.",
  comparisons: [
    { title: "Transient Recovery Speed", desc: "When a load changes quickly, the output voltage can dip or spike. Professional ETM units recover to within 1% of the set voltage in under 1.0 to 1.5 ms. Cheap alternatives can take up to 15 ms, potentially triggering UV/OV faults in the load." },
    { title: "Output Voltage Ripple", desc: "Excessive ripple noise can corrupt delicate measurement signals. The ETM-8001 keeps ripple under ≤50mVrms, whereas budget units often exhibit ripples exceeding 300mVrms." },
    { title: "Active Safety Bleeders", desc: "For laboratory safety, test units must discharge retained voltage quickly. ETM power supplies feature active discharge circuits that drain output terminals to safe levels in under 2 seconds, compared to passive resistors that can take minutes." }
  ],
  summaryTitle: "Procurement Recommendation Summary",
  summaryCol1: "For standard laboratory use and component testing, the ETM-8001 (0.8kW) and ETM-8002 (1.6kW) offer an ideal balance of compact bench footprint and precise 16-bit programming controls.",
  summaryCol2: "For high-power ATE test setups, battery emulation, and motor drives, we recommend the 4.0 kW (ETM-8005) or 4.8 kW (ETM-8006) three-phase cabinet systems with active Power Factor Correction (PFC)."
};

export const BUY_ONLINE_COPYWRITE = {
  badge: "E-Commerce Gateway",
  title: "Order 800V DC Power Supplies Online",
  intro: "We provide access to real factory warehouse stock statuses and direct purchase channels. When you are looking to buy an <a href=\"https://variabledcpowersupply.com/800v-dc-power-supplies\" target=\"_blank\" rel=\"noopener\" class=\"text-cyan-400 hover:text-cyan-300 underline font-semibold transition-colors\">800V DC power supply online</a>, our official store supports secure checkouts.",
  stockSearchTitle: "Global Distribution Inventory Lookup",
  stockSearchSub: "Select a model to view real-time stock levels across our distribution hubs. Standard lead time is 3-5 business days.",
  procurementCol1: "AFB Power maintains inventory across regional distribution centers to ensure fast shipping. Standard orders include complete test reports, power cords, and standard programming command libraries.",
  procurementCol2: "To place bulk orders, request custom safety modifications, or establish corporate credit terms, please contact our procurement team through the official checkout channel."
};

export const WHERE_TO_BUY_COPYWRITE = {
  badge: "Sales Channels",
  title: "Authorized Procurement Channels for ETM 800V DC Supplies",
  intro: "AFB Power products are distributed globally through authorized channels to ensure prompt shipping, local calibration support, and warranty coverage.",
  logisticsTitle: "International Logistics & Delivery Terms",
  logisticsCol1: "We ship worldwide using DHL, FedEx, and air freight carriers. Heavy units (3A to 6A) are packed in heavy-duty wooden crates to prevent damage during transit. Customs declarations and export documents are handled by our logistics team.",
  logisticsCol2: "Every unit undergoes a comprehensive 48-hour burn-in and calibration test prior to shipment. Each power supply is delivered with an individual calibration test report. For inquiries regarding custom requirements, contact AFB Power support."
};

export const CURRENT_SERIES_COPYWRITE = {
  badge: "Specification Table",
  title: "AFB Power ETM 800V DC Power Supply Specification Table",
  intro: "Varying current thresholds require different gauge conductor windings, thermal management designs, and input AC grid phases. The ETM series categorizes key <a href=\"https://variabledcpowersupply.com/800v-dc-power-supplies\" target=\"_blank\" rel=\"noopener\" class=\"text-cyan-400 hover:text-cyan-300 underline font-semibold transition-colors\">800V DC power supply current ratings</a> range from 1A, 2A, 3A, 5A to 6A to fit standard 19-inch rack enclosures.",
  techNotesTitle: "Model Selection and Electrical Notes",
  techNotesCol1: "Models eTM-8001 through eTM-8002C (1A/2A) feature compact 2U chassis, suitable for standard laboratory workbenches. Higher capacity models (3A/5A/6A) utilize 3U cabinet chassis with front intake and rear exhaust cooling fans.",
  techNotesCol2: "All models feature standard USB, RS232, and RS485 communication ports. Rremote sensing terminals are included as standard to compensate for cable voltage drops, ensuring precise voltage regulation at the load."
};
