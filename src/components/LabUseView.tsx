/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useState } from "react";
import { FlaskConical, ShieldCheck, ShieldAlert, Cpu, HeartPulse } from "lucide-react";
import { LAB_USE_COPYWRITE, COMMON_COPYWRITE } from "../data/copywriting";

export default function LabUseView() {
  const [safetyInterlocked, setSafetyInterlocked] = useState<boolean>(true);

  return (
    <div id="lab-use-view" className="space-y-10">
      
      {/* Intro section */}
      <section id="laboratory-focus-header" className="space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
          <FlaskConical size={13} className="text-cyan-400" />
          <span className="text-xs font-mono font-medium text-cyan-400 uppercase tracking-wider font-semibold">
            {LAB_USE_COPYWRITE.badge}
          </span>
        </div>
        <h1 className="text-3xl font-sans font-bold text-gray-100 tracking-tight">
          {LAB_USE_COPYWRITE.title}
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed max-w-4xl" dangerouslySetInnerHTML={{ __html: LAB_USE_COPYWRITE.intro }} />
      </section>

      {/* Grid of lab specific qualifications */}
      <section id="laboratory-advantages" className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {LAB_USE_COPYWRITE.cards.map((item, id) => {
          const icons = [Cpu, ShieldCheck, HeartPulse];
          const IconComponent = icons[id] || Cpu;
          return (
            <div key={id} className="p-5 bg-[#121214] border border-gray-800 rounded-xl space-y-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/5 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <IconComponent size={16} />
              </div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-gray-200 font-bold">{item.title}</h4>
              <p className="text-[11px] text-gray-400 leading-normal">{item.desc}</p>
            </div>
          );
        })}
      </section>

      {/* INTERACTIVE INTERLOCK SYSTEM DESIGN FOR SAFETY */}
      <section id="interlock-simulator-container" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#121214] border border-gray-800 rounded-xl p-6">
        
        {/* Left explanation detail */}
        <div className="lg:col-span-7 space-y-4">
          <span className="block text-[9px] font-mono text-cyan-400 uppercase tracking-widest">Safety Safeguard Simulation</span>
          <h3 className="text-lg font-sans font-bold text-gray-150">DB9 Hardwired Safety Interlock Loop</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            The rear panel of every {COMMON_COPYWRITE.brandName} unit incorporates a DB9 interlock terminal block. Laboratories connect this loop to physical door limit switches or emergency shut-off plunger buttons. If a technician or worker enters the high-voltage test area, the physical contact path opens, triggering an absolute mechanical-level solid-state shutdown of the high-voltage IGBT inverter stage, independent of microprocessor commands.
          </p>

          <div className="flex items-center gap-3 bg-[#18181b] p-3 border border-gray-800 rounded-lg">
            <div className="space-y-0.5">
              <span className="block text-xs font-bold text-gray-350">Toggle Physical Area Gate Switch:</span>
              <span className="block text-[10px] text-gray-500">Simulate opening the test area barrier door.</span>
            </div>
            <button
              id="btn-gate-interlock-toggle"
              type="button"
              onClick={() => setSafetyInterlocked(!safetyInterlocked)}
              className={`ml-auto py-1 px-3 border rounded text-[10px] font-mono font-bold tracking-wider cursor-pointer ${
                safetyInterlocked
                  ? "bg-emerald-950 border-emerald-500 text-emerald-400"
                  : "bg-red-950 border-red-500 text-red-400"
              }`}
            >
              {safetyInterlocked ? "GATE SHUT (SAFE)" : "GATE OPEN (LATCH)"}
            </button>
          </div>
        </div>

        {/* Right simulated display card */}
        <div className="lg:col-span-5 bg-[#18181b] border border-gray-800 rounded-xl p-5 text-center space-y-4">
          <span className="block text-left text-[9px] font-mono text-gray-500 uppercase">PSU REAR PANEL STATUS</span>

          <div className={`p-6 border rounded-lg transition-colors ${
            safetyInterlocked
              ? "border-emerald-500/20 bg-emerald-500/[0.02]"
              : "border-red-500/30 bg-red-500/[0.04]"
          }`}>
            {safetyInterlocked ? (
              <div className="space-y-2">
                <div className="text-2xl font-mono text-emerald-400 font-bold tracking-wide">800.00 V</div>
                <span className="text-[10px] font-bold text-emerald-500 font-mono tracking-widest uppercase block">
                  ● HIGH VOLTAGE READY
                </span>
                <p className="text-[10px] text-gray-500 font-sans leading-normal">
                  Hardwired safety interlock circuit closed. Output is permitted to activate.
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="text-2xl font-mono text-red-500 font-bold tracking-wide">0.00 V</div>
                <span className="text-[10px] font-bold text-red-400 font-mono tracking-widest uppercase block">
                  ▲ ABSOLUTE INTERLOCK TRIP
                </span>
                <p className="text-[10px] text-red-400/80 font-sans leading-normal font-medium">
                  CRITICAL: Rear DB9 circuit loop opened! High Volt output shut-down within 1.4 microseconds.
                </p>
              </div>
            )}
          </div>
        </div>

      </section>

      {/* Technical Standards & EEAT Citations Section */}
      <section id="technical-references" className="bg-[#121214] border border-gray-800 rounded-xl p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-gray-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
          <h4 className="text-xs font-mono uppercase text-gray-200 tracking-wider">Technical Standards & Regulatory Citations</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="space-y-2 text-gray-400">
            <p className="leading-relaxed">
              {LAB_USE_COPYWRITE.engineeringSpecsCol1}
            </p>
          </div>
          <div className="space-y-2 text-gray-405">
            <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: LAB_USE_COPYWRITE.engineeringSpecsCol2 }} />
          </div>
        </div>
      </section>

    </div>
  );
}
