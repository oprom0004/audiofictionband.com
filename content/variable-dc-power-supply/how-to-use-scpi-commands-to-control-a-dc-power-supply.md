---
title: "How to Use SCPI Commands to Control a DC Power Supply: A Technical Guide"
date: "2027-01-24"
author: "AFB Power Editor"
keywords: ["variable dc power supply", "how to use SCPI commands", "programmable power supply automation", "test bench instrumentation"]
summary: "An engineering-focused guide on implementing SCPI protocols for automated control of AFB Power ETM series DC power supplies to optimize test bench efficiency."
---

## Understanding SCPI in Automated Test Environments

In modern electrical engineering, the transition from manual bench testing to automated test equipment (ATE) is driven by the need for repeatability, data logging, and high-speed characterization. Standard Commands for Programmable Instruments (SCPI) serve as the industry-standard ASCII-based language used to control programmable DC power supplies. By utilizing SCPI, test engineers can integrate high-voltage instruments, such as the AFB Power ETM series, directly into automated test sequences written in Python, LabVIEW, or MATLAB.

Whether you are configuring the ETM-8001 (1A) for low-power component characterization or utilizing the high-output ETM-8006 (6A) for stress testing power electronics, mastering SCPI allows for precise, programmatic control over voltage, current, and protection limits.

## The Architecture of SCPI Communication

SCPI commands are hierarchical, structured as a tree-like command set that mirrors the physical architecture of the power supply. For an AFB Power unit, communication is typically handled over USB, RS-232, or Ethernet/LXI interfaces.

### Command Syntax and Structure
SCPI commands are classified into two categories: Common commands (defined by IEEE 488.2) and Subsystem commands. 
- **Common Commands:** These begin with an asterisk (*), such as `*IDN?` (identify instrument) or `*RST` (reset).
- **Subsystem Commands:** These use colons to denote the hierarchy, such as `SOURce:VOLTage:LEVel 100`.

When programming an AFB Power ETM series unit, the communication flow generally follows an Initialization -> Configuration -> Execution -> Query sequence. For instance, to set the voltage on an ETM-8005 (5A) to 400V, the command string `VOLT 400` is sent, followed by `OUTP ON` to close the output relay.

## Practical Implementation for ETM Series Power Supplies

When integrating AFB Power supplies into a test bench, engineers must account for the specific electrical parameters of the device. The ETM series, supporting up to 800V DC, requires strict adherence to safety and precision protocols.

### Configuring CV/CC Modes and Protection
SCPI allows for the dynamic configuration of Constant Voltage (CV) and Constant Current (CC) crossover points. 
- `SOURce:CURRent:LIMit <value>`: Sets the CC threshold.
- `SOURce:VOLTage:LIMit <value>`: Sets the CV threshold.

For engineers working on high-voltage battery charging profiles—such as those conforming to [Wikipedia — Electric vehicle battery](https://en.wikipedia.org/wiki/Electric_vehicle_battery) standards—the ability to programmatically adjust these limits is essential. To ensure device safety, utilize the SCPI command `PROTection:STATe ON` to engage over-voltage (OVP) and over-current (OCP) protection mechanisms.

### Leveraging Remote Sense and Signal Integrity
The ETM series features remote sensing capabilities to compensate for voltage drops across leads, critical when testing high-current loads at 800V. SCPI commands such as `SYSTem:REMote:STATe?` allow the controller to verify that the remote sense lines are active, ensuring the voltage at the load matches the programmed setpoint within the specified ripple noise tolerances.

## Optimizing for Complex Test Requirements

Advanced test applications require more than simple setpoint adjustment. Achieving high-performance results requires an understanding of how SCPI interacts with the internal hardware capabilities of the AFB Power ETM lineup.

### Response Time and Transient Immunity
When testing devices for voltage sag immunity, such as those meeting SEMI F47 standards, the power supply's response time is paramount. SCPI commands can be used to set the slew rate for voltage transitions (`VOLTage:SLEW <value>`). By controlling the rise and fall times, engineers can simulate real-world power grid fluctuations or sudden load disconnects.

### Data Acquisition and Querying
Effective automation relies on the ability to read back instrument states. Using `MEASure:VOLTage?` and `MEASure:CURRent?`, the controller retrieves real-time telemetry from the power supply. Because the ETM series (from the ETM-8001 to the ETM-8006) provides high-resolution feedback, these queries can be looped at high frequency to generate detailed I-V curves.

### Summary of Best Practices
1. **Always Verify Connection:** Use `*IDN?` at the start of every script to ensure the correct instrument is addressed.
2. **Handle Errors:** Implement a routine to query the error queue using `SYSTem:ERRor?` if a command fails to execute.
3. **Safety First:** Ensure that the output state is checked via `OUTP:STAT?` before initiating any high-voltage test sequences to prevent accidental energization of the test fixture.

By utilizing the SCPI command set effectively, AFB Power ETM series users can transform their power supplies from static bench instruments into highly responsive, programmable components of a sophisticated automated testing ecosystem.