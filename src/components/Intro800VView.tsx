/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Zap, ShieldCheck, Cpu, Layers, AlertTriangle } from "lucide-react";
import { INTRO_800V_COPYWRITE, COMMON_COPYWRITE } from "../data/copywriting";

export default function Intro800VView() {
  return (
    <div id="intro-800v-view" className="space-y-8 animate-fade-in">
      
      {/* Editorial Banner */}
      <section id="intro-hero" className="p-8 rounded-2xl bg-gradient-to-r from-[#141417] to-[#0d0d0f] border border-gray-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/[0.03] rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-mono text-cyan-400 tracking-wider uppercase font-bold">
            <Zap size={11} /> 800V High-Voltage Paradigm
          </div>
          <h2 className="text-3xl font-sans font-extrabold text-white tracking-tight">
            {INTRO_800V_COPYWRITE.title}
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed font-sans" dangerouslySetInnerHTML={{ __html: INTRO_800V_COPYWRITE.intro }} />
        </div>
      </section>

      {/* Core Insights Grid */}
      <section id="core-insights" className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {INTRO_800V_COPYWRITE.points.map((pt, id) => {
          const icons = [Cpu, Layers, ShieldCheck];
          const colors = [
            "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
            "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
            "text-red-400 bg-red-500/10 border-red-500/20"
          ];
          const Icon = icons[id] || Cpu;
          const colorClass = colors[id] || "text-cyan-400 bg-cyan-500/10 border-cyan-500/20";
          return (
            <div key={id} className="p-6 bg-[#121214] border border-gray-800 rounded-xl space-y-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorClass.split(" ")[1]} ${colorClass.split(" ")[2]} ${colorClass.split(" ")[0]}`}>
                <Icon size={20} />
              </div>
              <h3 className="text-md font-sans font-bold text-gray-200">{pt.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans font-normal">
                {pt.desc}
              </p>
            </div>
          );
        })}
      </section>

      {/* Tech Specifications and Applications details */}
      <section id="specs-breakdown" className="bg-[#121214] border border-gray-800 rounded-xl p-6 space-y-6">
        
        <div className="border-b border-gray-800 pb-4">
          <h3 className="text-lg font-sans font-semibold text-gray-200">
            {INTRO_800V_COPYWRITE.conclusionTitle}
          </h3>
          <p className="text-xs text-gray-400 mt-1 leading-relaxed">
            How ETM units optimize extreme high-voltage operations while guaranteeing lab-grade noise indices and seamless PC software programming.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-xs text-gray-300">
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 font-mono font-bold">1</div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-200">Dual-Frequency Switching Core</h4>
                <p className="text-gray-400 leading-relaxed">
                  {INTRO_800V_COPYWRITE.conclusionCol1}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 font-mono font-bold">2</div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-200">Advanced Voltage Discharge Circuit</h4>
                <p className="text-gray-400 leading-relaxed font-normal">
                  {INTRO_800V_COPYWRITE.conclusionCol2}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 font-mono font-bold">3</div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-200">Galvanic Isolation Integrity</h4>
                <p className="text-gray-400 leading-relaxed font-normal font-sans">
                  Safety rating reaches up to 3000VAC dry galvanic isolation barriers. Bypasses external high voltage surges completely from backing up into upper operational computers or operator-adjacent controllers.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-normal font-sans">
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 font-mono font-bold">4</div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-200 font-sans">Pre-configuration & Decimal Overflows</h4>
                <p className="text-gray-400 leading-relaxed">
                  Preset high-precision knobs enable fine and coarse values to be dialled before output is toggled ON. Multi-digit micro LED indicators automatically scale the decimal floating carry based on active configuration ratings.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 font-mono font-bold">5</div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-200 font-sans">Short Circuit Ignition Resistance</h4>
                <p className="text-gray-400 leading-relaxed">
                  Includes unique hardware safeguards designed to endure continuous full loads and short-circuit sparks. Extremely helpful in testing switchgears, circuit breakers, or material drawing machines under stressful load spikes.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 font-mono font-bold">6</div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-200 font-sans">Smart Temperature Noise Fan</h4>
                <p className="text-gray-400 leading-relaxed">
                  Dual-active speed intelligent cooling system stays completely silent under low power output, only engaging high-capacity exhaust flow when temperature indices cross predefined safety threshold limits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Warning Highlight */}
      <section id="safety-disclaimer" className="p-4 rounded-xl bg-red-500/5 border border-red-500/10 flex gap-3 items-center">
        <div className="w-8 h-8 rounded bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
          <AlertTriangle size={16} />
        </div>
        <p className="text-[11px] text-gray-400 leading-relaxed font-sans font-normal">
          <span className="text-red-400 font-bold uppercase tracking-wider font-mono mr-1">High Voltage Warning:</span>
          800V DC is highly conductive. When researching using ETM variable supplies, operators must employ personal protective equipment (PPE), maintain minimum clearance boundaries, and verify dry galvanic grounds are strictly interconnected.
        </p>
      </section>

    </div>
  );
}
