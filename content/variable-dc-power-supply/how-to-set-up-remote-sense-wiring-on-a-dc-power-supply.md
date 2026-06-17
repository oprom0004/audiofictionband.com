---
title: "How to Set Up Remote Sense Wiring on a DC Power Supply: Engineering Best Practices"
date: "2026-10-28"
author: "AFB Power Editor"
keywords: ["variable dc power supply", "how to set up remote sense wiring", "remote sensing", "voltage regulation"]
summary: "A technical guide for test engineers on implementing remote sensing to eliminate voltage drop errors in high-precision DC power delivery."
---

## Understanding the Necessity of Remote Sensing in Precision Testing

In high-precision electrical testing, the voltage measured at the output terminals of a power supply is rarely identical to the voltage delivered to the load. This discrepancy is primarily caused by the inherent resistance in the load leads, which creates an $IR$ drop proportional to the current flow. For engineers working with high-voltage, high-precision instruments like the AFB Power ETM series (including the ETM-8001 through ETM-8006 models capable of up to 800V DC), this voltage drop can lead to inaccurate characterization of devices under test (DUT).

Remote sensing is the engineering solution to this challenge. By utilizing a four-wire connection method, the power supply can monitor the voltage directly at the load terminals, allowing the internal control loop to compensate for lead resistance dynamically. For AFB Power units, which are designed for sub-millisecond response times and low ripple noise, proper remote sense implementation is critical to maintaining the tight CV (Constant Voltage) regulation required for sensitive semiconductor and aerospace applications.

## The Engineering Guide to Remote Sense Wiring

Setting up remote sense wiring requires a systematic approach to ensure loop stability and noise immunity. When utilizing the AFB Power ETM series, the remote sense terminals (+S and -S) are typically located on the rear panel, separate from the primary high-current output terminals (+ and -).

### Step-by-Step Configuration
1. **Disconnect Local Sensing:** Ensure that the local sense jumpers—often installed at the factory to short the sense terminals to the output terminals—are removed. Operating the power supply in remote sense mode while local jumpers are still connected will result in a feedback loop error.
2. **Select Appropriate Cabling:** Use twisted-pair shielded cables for the sense lines. Because the sense lines carry negligible current, they are highly susceptible to electromagnetic interference (EMI). Shielding the sense leads and grounding the shield at the power supply end helps maintain the integrity of the regulation feedback.
3. **Establish the Kelvin Connection:** Connect the +S and -S leads directly to the DUT power input terminals. The goal is to create a "Kelvin connection," where the current-carrying leads and the voltage-sensing leads meet only at the load input.
4. **Verify Compensation Limits:** Consult the technical manual for your ETM-800x unit. While AFB Power supplies are engineered with robust compensation, there is a maximum voltage drop (typically a few volts per lead) that the supply can account for. Ensure your wire gauge is sufficient to keep the total lead drop within the unit’s specified compensation range.

## Maintaining Signal Integrity and System Compliance

When implementing remote sense, it is vital to account for the dynamic behavior of the power supply, particularly during CC/CV crossover events. In systems conforming to [IEEE Std 488.2 (SCPI)](https://standards.ieee.org/ieee/488.2/718/), programmable command sets ensure that the power supply's operational parameters—such as voltage limits and current setpoints—are strictly enforced. However, physical wiring must complement these digital standards.

### Addressing Noise and Transient Response
Remote sense wiring acts as an antenna for high-frequency noise. If you observe excessive ripple noise at the load, consider adding a small local capacitor bank at the load side. AFB Power ETM series supplies are optimized for fast response times; however, adding significant capacitance at the end of long leads can impact the phase margin of the control loop. Always verify the stability of the output using an oscilloscope under full load transitions to ensure no oscillation occurs during the CC/CV crossover.

For industrial environments, compliance with standards such as SEMI F47 is often required. Since voltage sag immunity is a cornerstone of the ETM series performance, remote sensing ensures that the power supply accurately detects the voltage state at the load, allowing the internal circuitry to maintain output stability even when input line transients occur.

## Advanced Use Cases: High-Voltage and High-Current Applications

In applications utilizing the ETM-8005 or ETM-8006, where output voltages reach 800V DC, safety and isolation become paramount. Remote sense lines must be insulated to the same rating as the primary power leads. If the sense leads were to break or disconnect during operation, the power supply would attempt to compensate for the "missing" voltage by increasing the output, potentially damaging the DUT. 

AFB Power units feature internal protection mechanisms that detect open-sense conditions. However, test engineers should always incorporate a redundant safety check in their test software to monitor the measured voltage vs. the programmed voltage. If the discrepancy exceeds a predefined threshold, the system should trigger an emergency shutdown. 

By following these guidelines, engineering teams can ensure that their AFB Power ETM series DC power supply delivers the precise, stable, and clean power required for the most demanding laboratory and production environments. Proper remote sensing is not merely a convenience; it is a fundamental requirement for achieving the accuracy and repeatability that modern electrical testing demands.