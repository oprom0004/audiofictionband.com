---
title: "Variable DC Power Supply Ripple Noise Measurement Guide for Precision Engineering"
date: "2027-03-10"
author: "AFB Power Editor"
keywords: ["variable dc power supply", "variable DC power supply ripple", "power supply noise measurement", "DC power testing"]
summary: "A technical guide for test engineers on accurately measuring ripple and noise in programmable DC power supplies to ensure signal integrity in sensitive applications."
---

## Understanding Ripple and Noise in High-Voltage DC Power Supplies

In the context of high-precision testing, the quality of a DC power source is defined not just by its voltage stability, but by the cleanliness of its output. Ripple and noise (PARD—Periodic and Random Deviation) are residual AC components that remain on the DC output. For engineers working with high-voltage programmable power supplies, such as the AFB Power ETM series, understanding how to accurately measure these parameters is critical for maintaining signal integrity in sensitive DUTs (Devices Under Test).

Ripple is typically characterized by the switching frequency of the power supply’s internal converter, while noise consists of high-frequency spikes and electromagnetic interference. Failure to account for these components can lead to jitter in communication circuits, inaccuracies in high-resolution sensor calibration, and premature failure of sensitive semiconductor components.

## The Engineering Methodology for Ripple Measurement

Measuring ripple noise requires more than simply attaching a standard multimeter to the output terminals. Because ripple and noise are high-frequency phenomena, the measurement setup itself often introduces parasitic inductance and capacitance that can skew results.

### Essential Equipment and Setup
To characterize the ETM-8001 through ETM-8006 series, use an oscilloscope with at least 500 MHz bandwidth. A standard 10x passive probe is often insufficient due to the long ground lead, which acts as an antenna for ambient EMI. 

1. **The Short-Ground Technique:** Remove the long ground lead and the alligator clip. Use the probe’s ground spring (or a short wire loop) to connect the ground shield directly to the power supply output terminal. This minimizes the loop area and prevents the probe from picking up radiated noise.
2. **Bandwidth Limiting:** While the ETM series is designed for low-noise performance, testing should be conducted with the oscilloscope’s 20 MHz bandwidth limit enabled to filter out high-frequency transients that are often irrelevant to the power supply’s functional ripple specification.
3. **Differential Probing:** For high-voltage outputs—up to 800V DC in our ETM product line—ensure that your differential probe is rated for the maximum output voltage to prevent damage to the measurement hardware.

## Advanced Features and Control Standards

The AFB Power ETM series (ETM-8001, ETM-8002, ETM-8003, ETM-8005, ETM-8006) provides programmable control designed for automated test environments. Precision measurement is facilitated by the integration of remote sense lines, which compensate for voltage drops across load leads. By maintaining a constant potential at the load, the remote sense function ensures that the ripple measured at the DUT is a true reflection of the power supply's output, rather than an artifact of lead resistance.

To facilitate seamless integration into automated test racks, all ETM series units support remote programming, conforming to [IEEE Std 488.2 (SCPI)](https://standards.ieee.org/ieee/488.2/718/). This ensures that test engineers can program output sequences, trigger measurements, and monitor CC/CV (Constant Current/Constant Voltage) crossover points via a standardized command set, reducing the risk of human error during complex validation cycles.

## Ensuring System Reliability: Beyond Ripple

While ripple and noise are vital, they are only one part of the reliability equation. In industrial and utility applications, voltage sag immunity is equally critical. The ETM series is engineered to provide robust performance under varying line conditions, including compliance with SEMI F47 standards for voltage sag immunity.

### Key Performance Considerations
*   **Response Time:** When transitioning between different load states, the power supply must demonstrate rapid response times without excessive overshoot. The ETM series utilizes high-speed internal feedback loops to ensure that CC/CV crossover is seamless, preventing damage to sensitive loads during transient events.
*   **Measurement Consistency:** When evaluating the ETM-8001 (1A) through ETM-8006 (6A), ensure the load is connected using twisted-pair cabling to minimize inductive coupling. 
*   **Filtering:** If your application requires even lower noise floors than the native specification, consider the use of an external low-pass LC filter. However, ensure that the filter components are rated for the high-voltage output of the 800V-capable ETM modules.

By adhering to these rigorous measurement standards and utilizing the advanced diagnostic capabilities of the AFB Power ETM series, electrical test engineers can ensure their systems meet the highest levels of precision and reliability. Whether you are performing characterization on power electronics or testing sensitive high-voltage components, a structured approach to noise measurement is the hallmark of professional engineering practice.