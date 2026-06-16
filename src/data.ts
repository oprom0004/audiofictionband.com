/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PowerModel } from "./types";

export const POWER_MODELS: PowerModel[] = [
  // 1A Models
  {
    id: "eTM-8001",
    name: "eTommens eTM-8001",
    voltage: 800,
    current: 1,
    power: 800,
    rackSize: "2U Bench & Rackmount",
    ripple: "≤ 50mVrms / ≤ 120mVp-p",
    transient: "≤ 1.0 ms (50% to 100% Load Change)",
    basePrice: 699,
    description: "Classic 4-Knob high-precision 800V programmable DC power supply optimized for electrical workbenches, academic laboratory testing, and low-current high-voltage hardware validation.",
    features: [
      "Classic 4-Knob configuration (Voltage Coarse/Fine, Current Coarse/Fine) for direct hardware control",
      "Ultra-low noise ripple suitable for precision measurements and sensitive electrical circuits",
      "Standard USB & RS232 interfaces, with optional Ethernet/SCPI programming support"
    ],
    buyUrl: "https://variabledcpowersupply.com/etm-8001-4-kob-0-800v-0-1a-high-power-bench-dc-power-supply-variable-with-4-digits-led-display-encoder-coarse-fine-adjustments-knob-short-circuit-protection/"
  },
  {
    id: "eTM-8001C",
    name: "eTommens eTM-8001C",
    voltage: 800,
    current: 1,
    power: 800,
    rackSize: "2U Bench & Rackmount",
    ripple: "≤ 50mVrms / ≤ 120mVp-p",
    transient: "≤ 1.0 ms (50% to 100% Load Change)",
    basePrice: 749,
    description: "Upgraded 2-Knob model with front-panel output switch control. Excellent for high-voltage runs requiring safe load gating and multiple hardware protections.",
    features: [
      "Upgraded 2-Knob design (Encoder Coarse & Fine Adjustments) for accurate digital parameter tuning",
      "Dedicated output switch control button for safe and immediate load gating",
      "5 layers of hardware protection: Over-Voltage, Over-Current, Over-Power, Over-Temperature, and Short-Circuit protection",
      "Quiet-running smart cooling fan system to maintain a quiet research lab environment"
    ],
    buyUrl: "https://variabledcpowersupply.com/etm-8001c-2-kob-high-power-dc-bench-power-supply-adjustable-800v-1a-with-5-powerful-protections-output-switch-control-low-noise/"
  },
  // 2A Models
  {
    id: "eTM-8002",
    name: "eTommens eTM-8002",
    voltage: 800,
    current: 2,
    power: 1600,
    rackSize: "2U Standard Rackmount",
    ripple: "≤ 60mVrms / ≤ 150mVp-p",
    transient: "≤ 1.2 ms (50% to 100% Load Change)",
    basePrice: 799,
    description: "Classic 4-Knob automated test equipment (ATE) configuration. Well-suited for manufacturer burn-in chambers, battery cell emulator clusters, and capacitor performance validation.",
    features: [
      "Classic 4-Knob manual controls for fast adjustments of voltage and current thresholds",
      "Built-in list mode programming allows automated test cycles without host controller lag",
      "Dual active cooling fans with automatic speed adjustment based on internal temperature"
    ],
    buyUrl: "https://variabledcpowersupply.com/etm-8002-4-kob-0-800v-0-2a-high-power-bench-dc-power-supply-variable-with-4-digits-led-display-encoder-coarse-fine-adjustments-knob-short-circuit-protection/"
  },
  {
    id: "eTM-8002C",
    name: "eTommens eTM-8002C",
    voltage: 800,
    current: 2,
    power: 1600,
    rackSize: "2U Standard Rackmount",
    ripple: "≤ 60mVrms / ≤ 150mVp-p",
    transient: "≤ 1.2 ms (50% to 100% Load Change)",
    basePrice: 848,
    description: "Upgraded 2-Knob 2A supply featuring independent output control buttons, 5 levels of hardware protection, and specialized low-noise architecture.",
    features: [
      "Upgraded 2-Knob design (Coarse/Fine Encoder adjustments) with precise digital resolution",
      "Front-panel Output Switch Control to engage or bypass output terminal relays instantly",
      "5-fold safety protections: OVP, OCP, OPP, OTP, and Short Circuit protection",
      "Low-noise active cooling and advanced filtering for clean laboratory operation"
    ],
    buyUrl: "https://variabledcpowersupply.com/etm-8002c-2-kob-high-power-dc-bench-power-supply-adjustable-800v-2a-with-5-powerful-protections-output-switch-control-low-noise/"
  },
  // 3A Models
  {
    id: "eTM-8003",
    name: "eTommens eTM-8003",
    voltage: 800,
    current: 3,
    power: 2400,
    rackSize: "3U Rugged Rackmount",
    ripple: "≤ 70mVrms / ≤ 180mVp-p",
    transient: "≤ 1.2 ms (50% to 100% Load Change)",
    basePrice: 1198,
    description: "Classic 4-Knob 3A continuous duty system built for harsh factory environments. High galvanic isolation margins permit safe operation next to high-speed electrical machinery.",
    features: [
      "Classic 4-Knob manual control for quick configuration changes on the factory floor",
      "Advanced Power Factor Correction (PFC > 0.98) for high energy efficiency at full load",
      "Vibration-isolated structure optimized for continuous duty inside 19-inch equipment racks"
    ],
    buyUrl: "https://variabledcpowersupply.com/etm-8003-4-kob-0-800v-0-3a-high-power-bench-dc-power-supply-variable-with-4-digits-led-display-encoder-coarse-fine-adjustments-knob-short-circuit-protection/"
  },
  {
    id: "eTM-8003C",
    name: "eTommens eTM-8003C",
    voltage: 800,
    current: 3,
    power: 2400,
    rackSize: "3U Rugged Rackmount",
    ripple: "≤ 70mVrms / ≤ 180mVp-p",
    transient: "≤ 1.2 ms (50% to 100% Load Change)",
    basePrice: 1199,
    description: "Upgraded 2-Knob 3A system with front output switches and 5 layers of safety protection. Engineered for high-voltage ATE rack deployments.",
    features: [
      "Upgraded 2-Knob digital control setup with fine encoder resolution",
      "Front Output Switch Control to quickly connect or disconnect the load safely",
      "5 powerful hardware protections: OVP, OCP, OPP, OTP, and Short Circuit protection",
      "Specialized quiet-running active cooling with smart variable speed fans"
    ],
    buyUrl: "https://variabledcpowersupply.com/etm-8003c-2-kob-high-power-dc-bench-power-supply-adjustable-800v-3a-with-5-powerful-protections-output-switch-control-low-noise/"
  },
  // 5A Models
  {
    id: "eTM-8005",
    name: "eTommens eTM-8005",
    voltage: 800,
    current: 5,
    power: 4000,
    rackSize: "3U Rugged Rackmount",
    ripple: "≤ 85mVrms / ≤ 200mVp-p",
    transient: "≤ 1.5 ms (50% to 100% Load Change)",
    basePrice: 1399,
    description: "Classic 4-Knob high-power density 4.0 kW platform designed for EV battery pack charging profiles, onboard charger validations, and solar PV inverter MPPT curve simulations.",
    features: [
      "Classic 4-Knob controls paired with a high-visibility 4-digit LED display",
      "Integrated solar array simulation mode for MPPT tracking testing",
      "High capacity current control with rapid discharge circuit for safe shutdown"
    ],
    buyUrl: "https://variabledcpowersupply.com/etm-8005-4-kob-0-800v-0-5a-high-power-bench-dc-power-supply-variable-with-4-digits-led-display-encoder-coarse-fine-adjustments-knob-short-circuit-protection/"
  },
  {
    id: "eTM-8005C",
    name: "eTommens eTM-8005C",
    voltage: 800,
    current: 5,
    power: 4000,
    rackSize: "3U Rugged Rackmount",
    ripple: "≤ 85mVrms / ≤ 200mVp-p",
    transient: "≤ 1.5 ms (50% to 100% Load Change)",
    basePrice: 1599,
    description: "Upgraded 2-Knob 5A high-power configuration. Features front-panel relay control, 5 safety protections, and low-noise operational circuitry.",
    features: [
      "Upgraded 2-Knob design (Encoder Coarse & Fine Adjustments) for precise current and voltage programming",
      "Front-panel Output Switch Control to engage/bypass the 4.0 kW power terminals safely",
      "5 powerful hardware protections: OVP, OCP, OPP, OTP, and Short Circuit protection",
      "Advanced low-noise electrical design and dynamic temperature-controlled fan cooling"
    ],
    buyUrl: "https://variabledcpowersupply.com/etm-8005c-2-kob-high-power-dc-bench-power-supply-adjustable-800v-5a-with-5-powerful-protections-output-switch-control-low-noise/"
  },
  // 6A Models
  {
    id: "eTM-8006",
    name: "eTommens eTM-8006",
    voltage: 800,
    current: 6,
    power: 4800,
    rackSize: "3U Heavy Industrial Rack",
    ripple: "≤ 95mVrms / ≤ 220mVp-p",
    transient: "≤ 1.5 ms (50% to 100% Load Change)",
    basePrice: 1799,
    description: "Classic 4-Knob heavy-duty 4.8 kW flagship power supply. Tailored for testing high-power electric drivetrains, industrial motor stress tests, and high-voltage simulation.",
    features: [
      "Classic 4-Knob manual controls for heavy-duty industrial electric component stress testing",
      "Robust continuous 100% duty cycle rating at up to 50°C ambient temperatures",
      "Includes remote monitoring and parameter configuration software license"
    ],
    buyUrl: "https://variabledcpowersupply.com/etm-8006-4-kob-0-800v-0-6a-high-power-bench-dc-power-supply-variable-with-4-digits-led-display-encoder-coarse-fine-adjustments-knob-short-circuit-protection/"
  },
  {
    id: "eTM-8006C",
    name: "eTommens eTM-8006C",
    voltage: 800,
    current: 6,
    power: 4800,
    rackSize: "3U Heavy Industrial Rack",
    ripple: "≤ 95mVrms / ≤ 220mVp-p",
    transient: "≤ 1.5 ms (50% to 100% Load Change)",
    basePrice: 1899,
    description: "Upgraded 2-Knob flagship heavy-duty 4.8 kW system featuring independent output gating, 5-fold hardware protections, and advanced low-noise active cooling.",
    features: [
      "Upgraded 2-Knob design (Encoder Coarse & Fine Adjustments) for high-accuracy digital programming",
      "Front-panel Output Switch Control to safely isolate high-power output terminals",
      "5 powerful hardware protections: OVP, OCP, OPP, OTP, and Short Circuit protection",
      "Advanced low-noise electrical design with silent smart cooling fans module"
    ],
    buyUrl: "https://variabledcpowersupply.com/etm-8006c-2-kob-high-power-dc-bench-power-supply-adjustable-800v-6a-with-5-powerful-protections-output-switch-control-low-noise/"
  }
];

export const TECHNICAL_COMPARISONS = [
  {
    feature: "Input Voltage Range",
    afbSpec: "190–240VAC 1-Phase (1A/2A) or 340–460VAC 3-Phase 3-Wire (3A/5A/6A)",
    cheaperSpec: "Fixed 110VAC/220VAC ±10% Only",
    importance: "Protects against high-voltage harmonic distortion and handles industrial facility grid fluctuations."
  },
  {
    feature: "RMS Voltage Ripple",
    afbSpec: "≤ 50mVrms (eTM-8001) or ≤ 85mVrms (eTM-8005)",
    cheaperSpec: "≥ 300mVrms (Typically causes load noise)",
    importance: "Crucial for semiconductor development and laboratory measurements where noise distorts signals."
  },
  {
    feature: "Programming Interfaces",
    afbSpec: "RS232, RS485, USB, Ethernet LAN & SCPI Control protocols",
    cheaperSpec: "Manual Knobs Only or Non-Isolated USB Card",
    importance: "Galvanic PC isolation prevents ground-loop currents from destroying connected computers."
  },
  {
    feature: "Transient Recovery Speed",
    afbSpec: "≤ 1.0 ms to 1.5 ms to return within 1% of rated set-point",
    cheaperSpec: "≥ 12.0 ms (Prone to severe voltage dip)",
    importance: "Prevents high voltage under-shoot and over-shoot when active loads switch on/off."
  },
  {
    feature: "Safety Protections",
    afbSpec: "LOTO interlock, active low-impedance discharge circuits (<2s bleed), isolated remote sense",
    cheaperSpec: "Basic fuse only, passive bleeder resistors (takes minutes to discharge 800V)",
    importance: "Absolute safeguard against touch-hazard high-voltage retained energy."
  },
  {
    feature: "Cabinet Integration",
    afbSpec: "Standard 19-inch rack unit dimensions (Slide-rail ready, optimal spacing)",
    cheaperSpec: "Custom bulky bench shape with vertical vents",
    importance: "Allows easy cabinet installation in standard cleanroom or laboratory data racks."
  }
];
