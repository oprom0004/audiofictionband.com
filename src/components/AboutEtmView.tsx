/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck, Cpu, Globe, Mail } from "lucide-react";
import { ABOUT_FAQ_COPYWRITE, COMMON_COPYWRITE } from "../data/copywriting";

export default function AboutEtmView() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const faqs = ABOUT_FAQ_COPYWRITE.faqs;

  return (
    <div id="about-etm-view" className="space-y-8 animate-fade-in text-gray-200">
      
      {/* Corporate Overview Row */}
      <section id="corporate-profile" className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-[#121214] border border-gray-800 rounded-xl p-6 lg:p-8">
        
        {/* Left Info */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[9px] font-mono text-cyan-400 tracking-wider uppercase font-bold">
            <Globe size={11} /> Global Electromechanical Authority
          </div>
          <h2 className="text-2xl font-sans font-bold text-gray-150">
            About {COMMON_COPYWRITE.brandName}
          </h2>
          <p className="text-xs text-gray-400 leading-relaxed text-justify font-sans">
            {ABOUT_FAQ_COPYWRITE.intro}
          </p>
          <p className="text-xs text-gray-400 leading-relaxed text-justify font-sans" dangerouslySetInnerHTML={{ __html: ABOUT_FAQ_COPYWRITE.aboutText }} />

          <div className="grid grid-cols-3 gap-3 pt-2 text-center font-sans">
            <div className="p-2.5 bg-[#18181b] border border-gray-800 rounded-lg">
              <span className="block text-sm font-bold font-mono text-cyan-400">28+</span>
              <span className="block text-[9px] text-gray-500 uppercase tracking-wider mt-0.5">Years of Research</span>
            </div>
            <div className="p-2.5 bg-[#18181b] border border-gray-800 rounded-lg">
              <span className="block text-sm font-bold font-mono text-cyan-400">120K+</span>
              <span className="block text-[9px] text-gray-500 uppercase tracking-wider mt-0.5">Units Deployed</span>
            </div>
            <div className="p-2.5 bg-[#18181b] border border-gray-800 rounded-lg">
              <span className="block text-sm font-bold font-mono text-cyan-400">ISO 9001</span>
              <span className="block text-[9px] text-gray-500 uppercase tracking-wider mt-0.5">Certificated Quality</span>
            </div>
          </div>
        </div>

        {/* Right Quality badges & details */}
        <div className="bg-[#18181b] border border-gray-800 rounded-xl p-5 space-y-4">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300">
            {COMMON_COPYWRITE.brandName} Quality Commitment
          </h3>
          
          <div className="space-y-3 font-sans text-xs">
            <div className="flex gap-2 text-gray-400">
              <ShieldCheck size={16} className="text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-300 block text-[11px] uppercase tracking-wide">100% Full-Load Burn-In</strong>
                Every single 800V ETM power supply undergoes a mandatory 72-hour continuous dual-frequency peak thermal stress test before shipping out.
              </div>
            </div>

            <div className="flex gap-2 text-gray-400">
              <ShieldCheck size={16} className="text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-300 block text-[11px] uppercase tracking-wide">SCPI Compliance</strong>
                Full protocol coverage allows hassle-free laboratory automated cycle building without proprietary license locking or heavy DLL bindings.
              </div>
            </div>

            <div className="flex gap-2 text-gray-400">
              <ShieldCheck size={16} className="text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-300 block text-[11px] uppercase tracking-wide">Environmental Isolation</strong>
                Includes a dry protective dual ground layout to ensure complete safety and transient immunity during real-world short-circuit arcs.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Explorer Accordion */}
      <section id="interactive-faq" className="space-y-4">
        <div className="flex items-center gap-2 border-b border-gray-900 pb-3">
          <HelpCircle size={18} className="text-cyan-400" />
          <h3 className="text-lg font-sans font-semibold text-gray-150">
            {COMMON_COPYWRITE.brandName} ETM 800V Series FAQs
          </h3>
        </div>

        <p className="text-xs text-gray-400 leading-normal max-w-xl font-sans">
          Review responses to general operator setup inquiries, automation connections, and protective thresholds. Tap any question drawer to expand answers.
        </p>

        <div className="space-y-2 font-sans">
          {faqs.map((faq, index) => {
            const isExpanded = expandedIndex === index;
            // Let's alternate categories for visual variety
            const categories = ["Specifications", "Safety", "Programming", "Shipping"];
            const category = categories[index % categories.length] || "General";
            return (
              <div 
                key={index} 
                id={`faq-accordion-${index}`}
                className="bg-[#121214] border border-gray-800 rounded-xl overflow-hidden transition-colors"
              >
                {/* Trigger Row */}
                <button
                  type="button"
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-800/10 cursor-pointer text-xs"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <span className={`px-1.5 py-0.5 rounded font-mono text-[9px] uppercase tracking-wider font-bold ${
                      category === "Safety" ? "bg-red-500/10 text-red-400" :
                      category === "Specifications" ? "bg-cyan-500/10 text-cyan-400" :
                      category === "Programming" ? "bg-blue-500/10 text-blue-400" :
                      "bg-emerald-500/10 text-emerald-400"
                    }`}>
                      {category}
                    </span>
                    <span className="font-sans font-semibold text-gray-200 group-hover:text-cyan-400">
                      {faq.q}
                    </span>
                  </div>
                  <div className="text-gray-500 shrink-0">
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                {/* Content Panel */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 text-xs text-gray-400 leading-relaxed border-t border-gray-800/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Support Box */}
      <section id="faq-support" className="p-5 border border-gray-800 rounded-xl bg-gradient-to-b from-[#121214] to-[#0d0d0f] flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="space-y-1 font-sans">
          <h4 className="text-xs font-sans font-bold text-gray-200">Have a system-specific research setup question?</h4>
          <p className="text-[11px] text-gray-500">Our engineering dispatch team responds to all custom configuration designs and safety audits under two hours.</p>
        </div>
        <div className="flex items-center gap-3 shrink-0 font-mono">
          <Mail size={16} className="text-cyan-400" />
          <span className="text-xs font-medium text-gray-300">contact@variabledcpowersupply.com</span>
        </div>
      </section>

    </div>
  );
}
