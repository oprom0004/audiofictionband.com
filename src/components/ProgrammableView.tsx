/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Terminal as TerminalIcon, 
  Cpu, 
  Play, 
  Code, 
  Copy, 
  Check, 
  ShoppingCart, 
  FlaskConical, 
  BatteryCharging, 
  Sun, 
  Activity, 
  Zap, 
  ExternalLink,
  Package
} from "lucide-react";
import { POWER_MODELS } from "../data";
import { PROGRAMMABLE_COPYWRITE, COMMON_COPYWRITE } from "../data/copywriting";

export default function ProgrammableView() {
  const [terminalInput, setTerminalInput] = useState<string>("");
  const [terminalLogs, setTerminalLogs] = useState<Array<{ type: "cmd" | "resp" | "sys"; text: string }>>([
    { type: "sys", text: "AFB Power Programmable ETM SCPI Terminal v3.14 initialized." },
    { type: "sys", text: "Ready for remote IEEE-488.2 query commands. Type or click samples below." }
  ]);

  const [simulatedVolt, setSimulatedVolt] = useState<number>(0);
  const [simulatedCurr, setSimulatedCurr] = useState<number>(0);
  const [simulatedOutput, setSimulatedOutput] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const programmablePsuOptions = POWER_MODELS;

  const commandTemplates = [
    { cmd: "*IDN?", desc: "Query machine name & SN" },
    { cmd: "VOLT 800.0", desc: "Program limit to 800V" },
    { cmd: "CURR 5.0", desc: "Program limit to 5A" },
    { cmd: "VOLT?", desc: "Read programmed voltage" },
    { cmd: "MEAS:VOLT?", desc: "Measure actual terminal Volts" },
    { cmd: "OUTP ON", desc: "Engage HV terminal relays" },
    { cmd: "OUTP OFF", desc: "Disengage output relays" }
  ];

  const handleExecute = (cmdText: string) => {
    if (!cmdText.trim()) return;
    const cleanCmd = cmdText.trim().toUpperCase();
    const newLogs = [...terminalLogs, { type: "cmd" as const, text: `AFB> ${cmdText}` }];

    let reply = "";
    if (cleanCmd === "*IDN?") {
      reply = "AFB POWER CO., ETM-8005, SN2026060411, FW V3.14";
    } else if (cleanCmd.startsWith("VOLT ")) {
      const val = parseFloat(cleanCmd.split(" ")[1]);
      if (isNaN(val) || val < 0 || val > 800) {
        reply = "ERROR -222: Parameter out of range (0.0 to 800.0V)";
      } else {
        setSimulatedVolt(val);
        reply = "OK";
      }
    } else if (cleanCmd.startsWith("CURR ")) {
      const val = parseFloat(cleanCmd.split(" ")[1]);
      if (isNaN(val) || val < 0 || val > 6) {
        reply = "ERROR -222: Parameter out of range (0.0 to 6.0A)";
      } else {
        setSimulatedCurr(val);
        reply = "OK";
      }
    } else if (cleanCmd === "VOLT?") {
      reply = `${simulatedVolt.toFixed(2)} V`;
    } else if (cleanCmd === "MEAS:VOLT?") {
      if (!simulatedOutput) reply = "0.00 V";
      else {
        const dev = (Math.random() - 0.5) * 0.06;
        reply = `${Math.max(0, parseFloat((simulatedVolt + dev).toFixed(3)))} V`;
      }
    } else if (cleanCmd === "MEAS:CURR?") {
      if (!simulatedOutput) reply = "0.000 A";
      else {
        const simulatedLoadAmps = simulatedVolt > 0 ? (simulatedVolt / 150) : 0;
        const bounded = Math.min(simulatedCurr, simulatedLoadAmps);
        const dev = (Math.random() - 0.5) * 0.01;
        reply = `${Math.max(0, parseFloat((bounded + dev).toFixed(3)))} A`;
      }
    } else if (cleanCmd === "OUTP ON") {
      setSimulatedOutput(true);
      reply = "OK (Relay engaged - LIVE HIGH VOLTAGE TERMINALS)";
    } else if (cleanCmd === "OUTP OFF") {
      setSimulatedOutput(false);
      reply = "OK (Relay bypassed)";
    } else {
      reply = "ERROR -113: Undefined SCPI header or syntax mismatch";
    }

    setTerminalLogs([...newLogs, { type: "resp" as const, text: reply }]);
    setTerminalInput("");
  };

  const handleCopyPython = () => {
    navigator.clipboard.writeText(PROGRAMMABLE_COPYWRITE.exportCode.code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div id="programmable-view" className="space-y-12">
      
      {/* Narrative Section */}
      <section id="programmable-intro" className="space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
          <TerminalIcon size={13} className="text-cyan-400" />
          <span className="text-xs font-mono font-medium text-cyan-400 uppercase tracking-wider font-semibold">
            {PROGRAMMABLE_COPYWRITE.badge}
          </span>
        </div>
        <h1 className="text-3xl font-sans font-bold text-gray-100 tracking-tight">
          {PROGRAMMABLE_COPYWRITE.title}
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed max-w-4xl" dangerouslySetInnerHTML={{ __html: PROGRAMMABLE_COPYWRITE.description }} />
      </section>

      {/* Direct E-Commerce & Quote Section */}
      <section id="programmable-checkout-portal" className="bg-[#121214] border border-gray-800 rounded-xl p-6 space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-800 pb-4">
          <div>
            <h2 className="text-lg font-sans font-bold text-gray-150 flex items-center gap-2">
              <Package size={18} className="text-cyan-400" />
              {PROGRAMMABLE_COPYWRITE.checkoutHeading}
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              {PROGRAMMABLE_COPYWRITE.checkoutSub}
            </p>
          </div>
          <Link
            href="/order-800v-dc-power-supplies"
            className="text-[11px] font-mono text-cyan-400 hover:underline flex items-center gap-1 shrink-0"
          >
            {PROGRAMMABLE_COPYWRITE.checkStockLink}
            <ExternalLink size={12} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans text-xs">
          {programmablePsuOptions.map((model) => (
            <div 
              key={model.id} 
              className="bg-[#141417] border border-gray-800 rounded-lg p-5 flex flex-col justify-between hover:border-gray-700/80 transition-all duration-200"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-200 text-sm">{model.name}</h3>
                    <span className="text-[10px] font-mono text-gray-500 block">{model.rackSize}</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/20">
                    ${model.basePrice}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 bg-black/30 p-2.5 rounded font-mono text-[10px] text-gray-400">
                  <div>
                    <span className="block text-gray-600 uppercase text-[8px] tracking-wider">Output Voltage</span>
                    <span className="font-bold text-gray-300">0 - {model.voltage}V DC</span>
                  </div>
                  <div>
                    <span className="block text-gray-600 uppercase text-[8px] tracking-wider">Current Limit</span>
                    <span className="font-bold text-gray-300">0 - {model.current}A</span>
                  </div>
                  <div>
                    <span className="block text-gray-600 uppercase text-[8px] tracking-wider">Max Power</span>
                    <span className="font-bold text-gray-300">{(model.power / 1000).toFixed(1)} kW</span>
                  </div>
                  <div>
                    <span className="block text-gray-600 uppercase text-[8px] tracking-wider">Ripple</span>
                    <span className="font-bold text-cyan-405 text-[9px] truncate">{model.ripple.split("/")[0]}</span>
                  </div>
                </div>

                <p className="text-gray-400 text-[11px] leading-relaxed">
                  {model.description}{" "}
                  {model.buyUrl && (
                    <a
                      href={model.buyUrl}
                      target="_blank"
                      rel="noopener"
                      className="text-cyan-400 hover:text-cyan-300 underline font-semibold transition-colors whitespace-nowrap"
                    >
                      View 800V {model.current}A spec ↗
                    </a>
                  )}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-800/60">
                {model.buyUrl ? (
                  <button
                    type="button"
                    onClick={() => { window.location.href = model.buyUrl!; }}
                    className="flex items-center justify-center gap-1.5 py-2 bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold uppercase text-[11px] rounded transition cursor-pointer w-full text-center"
                  >
                    <ShoppingCart size={12} />
                    Direct Buy Online ↗
                  </button>
                ) : (
                  <Link
                    href="/order-800v-dc-power-supplies"
                    className="flex items-center justify-center gap-1.5 py-2 bg-cyan-500/85 hover:bg-cyan-500 text-gray-950 font-bold uppercase text-[11px] rounded w-full cursor-pointer"
                  >
                    Check Hub Stock
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Practical Laboratory Scenarios */}
      <section id="programmable-application-scenes" className="space-y-6">
        <div>
          <h2 className="text-xl font-sans font-bold text-gray-100 flex items-center gap-2">
            <FlaskConical size={18} className="text-cyan-400" />
            {PROGRAMMABLE_COPYWRITE.secLabTitle}
          </h2>
          <p className="text-xs text-gray-400 mt-1 max-w-3xl">
            {PROGRAMMABLE_COPYWRITE.secLabSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-xs">
          {PROGRAMMABLE_COPYWRITE.scenarios.map((item, idx) => {
            const icons = [BatteryCharging, Sun, Activity, Zap];
            const colors = ["text-emerald-400 bg-emerald-500/10", "text-cyan-400 bg-cyan-500/10", "text-cyan-400 bg-cyan-500/10", "text-purple-400 bg-purple-500/10"];
            const SCPI_FLOWS = [
              [
                "VOLT 800.0 // Set peak protection limit to 800V",
                "CURR 6.0   // Program current cap to 6A",
                "OUTP ON    // Safely engage high-voltage relays"
              ],
              [
                "VOLT:RUMP 20.0 // Config solar ramping rate",
                "CURR 3.5      // Limit string simulate currents",
                "MEAS:POW?     // Polling active solar feedback"
              ],
              [
                "VOLT 780.0 // Test threshold target",
                "MEAS:CURR? // Check leakage current (target < 5mA)",
                "OUTP OFF   // Power down and engage active bleeders"
              ],
              [
                "VOLT 12.50     // Fine-step starting excitation",
                "TRIP:STAT?     // Watch for short-circuit safety status",
                "VOLT:STEP 1.0  // Configure resolution increment per loop"
              ]
            ];
            
            const Icon = icons[idx] || Zap;
            const colorClass = colors[idx] || "text-cyan-400 bg-cyan-500/10";
            const currentFlow = SCPI_FLOWS[idx] || [];

            return (
              <div key={idx} className="bg-[#121214] border border-gray-800 rounded-xl p-6 space-y-3">
                <div className="flex items-center gap-2 border-b border-gray-800 pb-2">
                  <div className={`p-1.5 rounded-lg ${colorClass}`}>
                    <Icon size={16} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-200">{item.title}</h3>
                    <span className="text-[10px] text-gray-500 block font-mono">{item.badge}</span>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed text-[11px]">
                  {item.desc}
                </p>
                <div className="bg-black/30 p-2.5 rounded font-mono text-[9px] text-[#85858c] space-y-1">
                  <div><strong className="text-cyan-400">SAMPLE SCPI FLOW:</strong></div>
                  {currentFlow.map((line, lIdx) => (
                    <div key={lIdx}>&gt; {line.split("//")[0]}<span className="text-[#555]">// {line.split("//")[1]}</span></div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Terminal and command list simulation */}
      <section id="terminal-simulation" className="space-y-4">
        <div>
          <h2 className="text-lg font-sans font-bold text-gray-150 flex items-center gap-2">
            <TerminalIcon size={18} className="text-cyan-400" />
            {PROGRAMMABLE_COPYWRITE.terminal.title}
          </h2>
          <p className="text-xs text-gray-400">
            {PROGRAMMABLE_COPYWRITE.terminal.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Terminal Screen (Left) */}
          <div className="lg:col-span-8 bg-black/80 border border-gray-800 rounded-xl overflow-hidden shadow-2xl flex flex-col justify-between" style={{ height: "400px" }}>
            
            {/* Header */}
            <div className="bg-[#121214] px-4 py-2 border-b border-gray-800 flex justify-between items-center text-[11px] font-mono select-none">
              <span className="text-gray-400 flex items-center gap-1.5">
                <Cpu size={12} className="text-cyan-400" />
                {PROGRAMMABLE_COPYWRITE.terminal.consoleLabel}
              </span>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-700"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-gray-700"></span>
              </div>
            </div>

            {/* Logs */}
            <div className="p-4 overflow-y-auto space-y-2 font-mono text-[11px] flex-grow">
              {terminalLogs.map((log, idx) => (
                <div
                  key={idx}
                  className={
                    log.type === "cmd"
                      ? "text-cyan-400"
                      : log.type === "resp"
                      ? "text-emerald-400"
                      : "text-gray-500 italic"
                  }
                >
                  {log.text}
                </div>
              ))}
            </div>

            {/* Input field */}
            <div className="bg-[#0f0f11] p-2 border-t border-gray-800 flex gap-2">
              <span className="text-gray-500 font-mono text-xs pl-2 shrink-0 py-1.5 select-none">AFB&gt;</span>
              <input
                id="scpi-input"
                type="text"
                value={terminalInput}
                onChange={e => setTerminalInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleExecute(terminalInput)}
                className="flex-grow bg-transparent border-none text-xs text-gray-200 focus:outline-none font-mono py-1"
                placeholder={PROGRAMMABLE_COPYWRITE.terminal.placeholder}
              />
              <button
                id="btn-scpi-send"
                type="button"
                onClick={() => handleExecute(terminalInput)}
                className="px-4 bg-cyan-500 text-gray-950 font-bold font-mono text-xs rounded uppercase hover:bg-cyan-400 cursor-pointer transition select-none"
              >
                {PROGRAMMABLE_COPYWRITE.terminal.runBtn}
              </button>
            </div>
          </div>

          {/* Command Cheat Sheet List (Right) */}
          <div className="lg:col-span-4 bg-[#121214] border border-gray-800 rounded-xl p-5 space-y-4">
            <span className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest">{PROGRAMMABLE_COPYWRITE.terminal.cheatSheetTitle}</span>
            <p className="text-[11px] text-gray-500 leading-normal">{PROGRAMMABLE_COPYWRITE.terminal.cheatSheetSub}</p>
            
            <div className="space-y-2 max-h-[280px] overflow-y-auto pr-1">
              {commandTemplates.map((item, idx) => (
                <button
                  key={idx}
                  id={`scpi-template-btn-${idx}`}
                  type="button"
                  onClick={() => {
                    setTerminalInput(item.cmd);
                    handleExecute(item.cmd);
                  }}
                  className="w-full text-left p-2.5 bg-[#161619] hover:bg-gray-800/40 border border-gray-800 hover:border-gray-700/80 rounded-lg transition flex justify-between items-center font-mono text-[10px] group cursor-pointer"
                >
                  <div>
                    <span className="block font-bold text-cyan-400">{item.cmd}</span>
                    <span className="block text-gray-500 text-[9px] mt-0.5">{item.desc}</span>
                  </div>
                  <Play size={10} className="text-gray-600 group-hover:text-cyan-400 transition-colors shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Code Export Script Builder */}
      <section id="code-snippet-export" className="bg-[#121214] border border-gray-800 rounded-xl overflow-hidden">
        <div className="bg-[#161619] px-6 py-3 border-b border-gray-800 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Code size={16} className="text-cyan-400" />
            <h4 className="text-xs font-mono uppercase tracking-wider text-gray-200">{PROGRAMMABLE_COPYWRITE.exportCode.title}</h4>
          </div>
          <button
            id="btn-copy-python-code"
            type="button"
            onClick={handleCopyPython}
            className="text-[10px] text-gray-400 hover:text-white font-mono flex items-center gap-1 bg-[#18181b] border border-gray-800 px-3 py-1 rounded-md transition cursor-pointer"
          >
            {isCopied ? (
              <>
                <Check size={12} className="text-emerald-500" />
                {PROGRAMMABLE_COPYWRITE.exportCode.copiedBtn}
              </>
            ) : (
              <>
                <Copy size={12} />
                {PROGRAMMABLE_COPYWRITE.exportCode.copyBtn}
              </>
            )}
          </button>
        </div>
        <pre className="p-6 overflow-x-auto text-xs text-cyan-400/80 font-mono bg-black/40 max-h-[320px] select-all leading-normal">
          {PROGRAMMABLE_COPYWRITE.exportCode.code}
        </pre>
      </section>

      {/* Technical Standards & EEAT Citations Section */}
      <section id="technical-references" className="bg-[#121214] border border-gray-800 rounded-xl p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-gray-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
          <h4 className="text-xs font-mono uppercase text-gray-200 tracking-wider">{PROGRAMMABLE_COPYWRITE.citations.title}</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="space-y-2 text-gray-400">
            <p className="leading-relaxed">
              {PROGRAMMABLE_COPYWRITE.citations.col1}
            </p>
          </div>
          <div className="space-y-2 text-gray-450">
            <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: PROGRAMMABLE_COPYWRITE.citations.col2 }} />
          </div>
        </div>
      </section>
      
    </div>
  );
}
