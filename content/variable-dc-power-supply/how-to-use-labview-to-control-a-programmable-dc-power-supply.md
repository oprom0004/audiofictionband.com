---
title: "How to Use LabVIEW to Control a Programmable DC Power Supply: Engineering Best Practices"
date: "2026-10-07"
author: "AFB Power Editor"
keywords: ["variable dc power supply", "how to use LabVIEW to", "automated test equipment", "SCPI programming"]
summary: "A technical guide for integrating AFB Power ETM series units into automated test environments using LabVIEW for precise voltage and current control."
---

## Streamlining Automated Test Environments: Integrating LabVIEW with Programmable DC Sources

In modern high-voltage testing environments, the transition from manual benchtop operation to automated test equipment (ATE) is essential for ensuring repeatability, data integrity, and throughput. For electrical test engineers, integrating a programmable DC power supply into a LabVIEW ecosystem allows for sophisticated control loops, automated sweep testing, and real-time data logging. 

AFB Power’s ETM series—including the ETM-8001 (1A), ETM-8002 (2A), ETM-8003 (3A), ETM-8005 (5A), and ETM-8006 (6A)—is designed specifically for these high-precision demands. With support for outputs up to 800V DC, these units require robust communication protocols to function effectively within a National Instruments LabVIEW environment.

## Configuring the Communication Interface for ETM Series Units

Before LabVIEW can command the power supply, the physical and logical communication layers must be established. Most AFB Power ETM units support standard industrial interfaces, including RS-232, RS-485, USB, or Ethernet (LXI).

### Establishing the VISA Resource
LabVIEW utilizes the Virtual Instrument Software Architecture (VISA) to communicate with hardware. To interface with an AFB Power unit:
1. **Driver Identification:** Ensure the appropriate instrument driver (or a generic SCPI-compliant driver) is installed.
2. **Resource String:** Use the "VISA Configure Serial Port" or "VISA Open" function to target the specific COM port or IP address assigned to the ETM unit.
3. **Parameter Matching:** Verify that the baud rate, parity, and stop bits match the hardware settings of the ETM-800 series unit to prevent communication errors during command execution.

## Implementing SCPI Commands for Precise Control

The ETM series utilizes Standard Commands for Programmable Instruments (SCPI). This standardized language allows for a high degree of control over output parameters, including Constant Voltage (CV) and Constant Current (CC) modes.

### Key Control Logic
To perform a standard voltage setpoint change, your LabVIEW block diagram should utilize the `VISA Write` function to send ASCII-encoded strings. For example:
*   `VOLT 400.0` — Sets the output to 400V.
*   `CURR 2.5` — Sets the current limit to 2.5A.
*   `OUTP ON` — Enables the DC output.

When developing these routines, engineers must account for the power supply's transient response time. The ETM series is engineered for high stability; however, when automating, ensure the `VISA Read` function polls the instrument status register to confirm that the output has settled within the target tolerance before proceeding to the next test step.

## Engineering Considerations for High-Voltage Applications

Integrating high-voltage power supplies into automated test stands requires adherence to strict safety and performance standards. When testing components such as those found in [Wikipedia — Electric vehicle battery](https://en.wikipedia.org/wiki/Electric_vehicle_battery) systems, the precision of the power supply is critical.

### Managing Electrical Parameters in Software
*   **Remote Sensing:** To compensate for voltage drops across leads—especially when dealing with high-current applications like the ETM-8006—use the remote sense terminals. In LabVIEW, ensure your software logic monitors the voltage read-back value rather than the setpoint to verify the actual load voltage.
*   **Ripple and Noise:** The ETM series is optimized for low ripple noise. When automating data acquisition, ensure your sampling rate in LabVIEW does not alias with the power supply’s switching frequency.
*   **SEMI F47 Compliance:** For applications requiring voltage sag immunity, such as semiconductor manufacturing equipment testing, use LabVIEW to programmatically cycle the input voltage to the power supply while monitoring the output stability. The AFB Power ETM series’ response time allows for rapid simulation of these power quality disturbances, providing a comprehensive validation of the Device Under Test (DUT).

## Practical Debugging and Error Handling

Even with robust hardware, communication timeouts or command syntax errors can occur in an automated test setup. A professional LabVIEW implementation should always include a "VISA Error" cluster connected to a standard error handler. 

If the ETM unit fails to respond to a command, the software should trigger a "Safe State" routine—typically sending an `OUTP OFF` command and logging the status register output. By monitoring the CC/CV crossover point programmatically, engineers can detect unexpected load transitions before they compromise the integrity of the test data. Through the combination of AFB Power’s stable, high-voltage ETM hardware and the modular power of LabVIEW, test engineers can achieve unprecedented levels of automation and precision in their laboratory workflows.