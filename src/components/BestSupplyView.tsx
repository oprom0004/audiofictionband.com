/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React from "react";
import Link from "next/link";
import { TECHNICAL_COMPARISONS } from "../data";
import { Award, AlertCircle, ArrowRight } from "lucide-react";
import { BEST_SUPPLY_COPYWRITE, COMMON_COPYWRITE } from "../data/copywriting";

export default function BestSupplyView() {
  return (
    <div id="best-supply-view" className="space-y-10">
      {/* Editorial guide title block */}
      <section id="ranking-content-editorial" className="space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
          <Award size={13} className="text-cyan-400" />
          <span className="text-xs font-mono font-medium text-cyan-400 uppercase tracking-wider">
            {BEST_SUPPLY_COPYWRITE.badge}
          </span>
        </div>
        <h1 className="text-3xl font-sans font-bold text-gray-100 tracking-tight">
          {BEST_SUPPLY_COPYWRITE.title}
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed max-w-4xl" dangerouslySetInnerHTML={{ __html: BEST_SUPPLY_COPYWRITE.intro }} />
      </section>

      {/* Grid of core metrics */}
      <section id="evaluation-criteria-grid" className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BEST_SUPPLY_COPYWRITE.comparisons.map((item, id) => (
          <div key={id} className="p-5 bg-[#121214] border border-gray-800 rounded-xl space-y-3">
            <div className="text-xs font-sans font-bold text-cyan-400">{item.title}</div>
            <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Side-by-side comparison directory */}
      <section id="comparative-matrix-segment" className="space-y-4">
        <h3 className="text-xs font-mono uppercase text-gray-400 tracking-wider">
          Side-By-Side Technical Contrast Ledger ({COMMON_COPYWRITE.brandName} vs Budget Generic)
        </h3>

        <div id="comparison-cards-holder" className="space-y-4">
          {TECHNICAL_COMPARISONS.map((comp, idx) => (
            <div key={idx} className="bg-[#121214] border border-gray-800 rounded-xl p-5 space-y-3 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-gray-800">
                <span className="font-sans font-bold text-gray-200 text-sm">{comp.feature}</span>
                <span className="text-[10px] bg-cyan-500/10 text-cyan-400 font-mono tracking-wider px-2 py-0.5 rounded">
                  METRIC {idx + 1}
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#161619] p-3 border border-gray-800 rounded-lg space-y-1">
                  <span className="block text-[10px] font-mono text-emerald-500 font-bold uppercase">{COMMON_COPYWRITE.brandName} Premium standard:</span>
                  <p className="text-[11px] text-gray-350 leading-relaxed font-mono">{comp.afbSpec}</p>
                </div>
                <div className="bg-[#161619] p-3 border border-gray-800 rounded-lg space-y-1">
                  <span className="block text-[10px] font-mono text-red-400 font-bold uppercase">Generic Low-Rate Standard:</span>
                  <p className="text-[11px] text-gray-400 leading-relaxed font-mono">{comp.cheaperSpec}</p>
                </div>
              </div>

              <div className="text-[11px] text-gray-500 leading-relaxed pt-1 select-none flex items-start gap-1.5">
                <AlertCircle size={13} className="text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>Impact on Testing:</strong> {comp.importance}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended actions box */}
      <section id="recommendations-curated" className="bg-[#121214] border border-gray-800 rounded-xl p-6">
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400">{BEST_SUPPLY_COPYWRITE.summaryTitle}</h4>
          <p className="text-xs text-gray-400 leading-normal">
            {BEST_SUPPLY_COPYWRITE.summaryCol1} {BEST_SUPPLY_COPYWRITE.summaryCol2}
          </p>
          <div className="pt-2">
            <Link
              id="best-supply-navigate-specs"
              href="/models-800v-dc-1a-6a"
              className="text-xs text-cyan-400 font-mono flex items-center gap-1 hover:text-cyan-300 cursor-pointer"
            >
              Examine model spectrum (1A to 6A)
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
