---
title: "Mastering DC Power Supply Series Connection for Elevated Voltage Output"
date: "2026-05-20"
author: "AFB Power Editor"
keywords: ["variable dc power supply", "DC power supply series connection", "high voltage DC power supply", "programmable power supply configuration"]
summary: "This article provides an in-depth technical guide for electrical test engineers on safely and effectively connecting DC power supplies in series to achieve higher voltage outputs, focusing on AFB Power's ETM series and critical engineering considerations."
---

# Mastering DC Power Supply Series Connection for Elevated Voltage Output

## Introduction: The Imperative for Higher DC Voltage

In modern electrical engineering, the demand for higher DC voltages is continuously expanding across diverse applications, from advanced material science research and high-power laser systems to electric vehicle (EV) component testing and sophisticated semiconductor manufacturing. While individual DC power supplies offer a range of voltage outputs, many scenarios necessitate voltages that exceed the capacity of a single unit. In such cases, connecting multiple DC power supplies in series becomes a crucial and cost-effective strategy.

AFB Power, a premium manufacturer of programmable and variable DC power supplies, understands this critical need. Our ETM series, including models like the ETM-8001 (1A), ETM-8002 (2A), ETM-8003 (3A), ETM-8005 (5A), and ETM-8006 (6A), are engineered to deliver robust performance, each supporting up to 800V DC output. These units are designed with the flexibility and isolation required for safe and effective series connection, enabling engineers to achieve significantly higher voltage potentials for their most demanding projects. This article provides an authoritative guide for electrical test engineers, project managers, and lab technicians on the principles, best practices, and critical considerations for implementing DC power supply series connections for elevated voltage outputs.

## Fundamental Principles of Series Connection

The core principle behind connecting DC power supplies in series is straightforward: the output voltages of the individual units add up, while the maximum available current for the combined system is limited by the lowest current rating of any single supply in the series. For example, connecting two 100V, 5A power supplies in series results in a 200V output with a maximum current of 5A.

### Ground Isolation and Floating Outputs

A paramount consideration for safe and functional series connection is the ground isolation of each power supply's output. Most high-quality programmable DC power supplies, including AFB Power's ETM series, feature isolated outputs. This means the output terminals are electrically isolated from the chassis ground and the AC input ground. This "floating" output capability is indispensable because it allows the negative terminal of one supply to be connected to the positive terminal of another without creating a short circuit or ground loop. Without proper isolation, attempting a series connection would likely result in damage to the power supplies or the test setup. AFB Power's ETM series units are meticulously designed to ensure high output isolation, providing the necessary safety margin for multi-unit configurations.

## Engineering Best Practices for Series Configuration with AFB Power ETM Series

Implementing a series connection requires careful planning and adherence to best practices to ensure system stability, accuracy, and safety.

### Connecting Multiple Units

1.  **Power Off All Units:** Before making any connections, ensure all AFB Power ETM series units are powered off and disconnected from the load.
2.  **Sequential Connection:** Connect the positive (+) output terminal of the first power supply to the negative (-) output terminal of the second power supply. If connecting more units, continue this pattern: positive of the second to negative of the third, and so on.
3.  **Load Connection:** The final negative terminal (from the first supply in the chain) and the final positive terminal (from the last supply in the chain) will form the combined higher voltage output, which is then connected to your load.
4.  **Grounding:** While the outputs are floating, it is often good practice to ground one point of the series chain (e.g., the negative terminal of the first supply) to establish a clear voltage reference for the entire system, provided it does not interfere with the application's requirements.

### Output Stability and Performance Considerations

When multiple units are connected in series, their individual characteristics contribute to the overall system performance.

*   **Ripple and Noise:** While AFB Power ETM series units boast exceptionally low ripple and noise specifications, combining units in series can, in some cases, lead to a slight aggregation of these characteristics. However, proper grounding and high-quality cabling minimize this effect, maintaining the integrity of the power delivery.
*   **Remote Sense:** For precise voltage regulation at the load, especially at higher currents or with longer connection cables, remote sense is crucial. Each AFB Power ETM series unit incorporates remote sense capabilities. When units are in series, the remote sense connections should typically be made from the **final output terminals** of the entire series chain directly to the load. This ensures that the combined voltage at the load is accurately measured and regulated, compensating for any voltage drops across the series connection cables.
*   **CC/CV Crossover:** All AFB Power ETM series supplies operate in constant current (CC) or constant voltage (CV) mode, automatically transitioning between them based on the load. In a series configuration, the overall system will behave similarly. The total combined voltage will be regulated in CV mode until the current drawn by the load exceeds the set current limit of the lowest-rated supply, at which point the system will transition to CC mode.
*   **Response Time:** The transient response time of the series-connected system will generally be dictated by the slowest unit or the cumulative effect of the individual units' response times. AFB Power's ETM series supplies are designed for fast response, ensuring dynamic loads are handled efficiently even in series configurations.

### Safety and Protection

Safety is paramount when working with high voltages. Each AFB Power ETM series unit includes robust protection features such as Overvoltage Protection (OVP), Overcurrent Protection (OCP), and Overtemperature Protection (OTP). These individual protections remain active in a series configuration, safeguarding each unit. Users must also be aware of the total system voltage, which can reach several kilovolts when multiple 800V ETM series units are connected. Always observe high-voltage safety protocols, including insulated tools, proper enclosure, and clear warning signs.

## Applications and Industry Relevance

The ability to achieve higher DC voltages through series connection unlocks a vast array of possibilities across various industries.

*   **Electric Vehicle (EV) Development:** Testing high-voltage battery packs, charging systems, inverters, and DC-DC converters often requires voltages far exceeding what a single power supply can deliver. The ETM series, with its 800V capability, can be combined to simulate the high-voltage bus of advanced EVs.
*   **Capacitor Charging:** High-energy capacitor banks used in pulse power applications, lasers, and particle accelerators demand precise, high-voltage charging capabilities.
*   **Semiconductor Manufacturing:** Advanced fabrication processes require highly stable and precise DC power. AFB Power's ETM series meets stringent standards like SEMI F47 for voltage sag immunity, ensuring uninterrupted operation during critical fabrication steps, even when configured for higher voltages.
*   **Research & Development:** Various experimental setups in physics, chemistry, and material science often require bespoke high-voltage sources for plasma generation, dielectric testing, or specialized sensor powering.
*   **High-Power DC Motor Testing:** Larger