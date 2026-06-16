/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React from "react";
import { Mail, Phone, MapPin, Globe, Award, ShieldCheck, Clock } from "lucide-react";
import { WHERE_TO_BUY_COPYWRITE, COMMON_COPYWRITE } from "../data/copywriting";

export default function WhereToBuyView() {
  const regions = [
    {
      name: "Official E-Commerce Portal",
      zone: "Direct Online Channels",
      desc: "Our primary direct e-commerce portal optimized for quick checkout, credit card, or corporate bank invoice processing. Ideal for immediate dispatch of standalone 800V DC power supply chassis.",
      contact: "Web Checkout Gateway",
      phone: "Online Store",
      addr: "https://variabledcpowersupply.com",
      url: "https://variabledcpowersupply.com",
      isWeb: true
    },
    {
      name: "Factory-Direct Sales & Technical Inquiries",
      zone: "Centralized Procurement",
      desc: "For bulk university laboratory procurement, customized high-voltage cabinets, educational pricing partnerships, and special analog/digital interface requests.",
      contact: "contact@variabledcpowersupply.com",
      phone: "Global support desk",
      addr: "Direct Factory Shipping & Custom Assembly"
    }
  ];

  return (
    <div id="where-to-buy-view" className="space-y-10">
      
      {/* Intro section */}
      <section id="buy-intro" className="space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
          <Globe size={13} className="text-cyan-400" />
          <span className="text-xs font-mono font-medium text-cyan-400 uppercase tracking-wider">
            {WHERE_TO_BUY_COPYWRITE.badge}
          </span>
        </div>
        <h1 className="text-3xl font-sans font-bold text-gray-100 tracking-tight">
          {WHERE_TO_BUY_COPYWRITE.title}
        </h1>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-2 pb-6 border-b border-gray-800">
          <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
            {WHERE_TO_BUY_COPYWRITE.intro}
          </p>
          <button
            type="button"
            onClick={() => { window.location.href = COMMON_COPYWRITE.officialStoreUrl; }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-extrabold uppercase text-xs tracking-wider rounded-lg transition-all shadow-lg shadow-cyan-500/15 hover:scale-[1.02] shrink-0 text-center cursor-pointer"
          >
            {COMMON_COPYWRITE.storeBtnText}
          </button>
        </div>
      </section>

      {/* Global Distribution contacts */}
      <section id="distribution-grid" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {regions.map((region, id) => (
          <div key={id} className="p-6 bg-[#121214] border border-gray-800 rounded-xl space-y-4">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest px-2.5 py-1 bg-cyan-500/5 border border-cyan-500/10 rounded">
                {region.zone}
              </span>
            </div>
            
            <h3 className="text-base font-sans font-bold text-gray-100">{region.name}</h3>
            <p className="text-xs text-gray-400 leading-normal">{region.desc}</p>
            
            <div className="pt-4 border-t border-gray-800 space-y-2 text-xs">
              {'isWeb' in region && region.isWeb ? (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-400 font-mono">
                    <Globe size={13} className="text-cyan-400 shrink-0" />
                    <a
                      href="https://variabledcpowersupply.com"
                      target="_blank"
                      rel="noopener"
                      className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
                    >
                      variabledcpowersupply.com ↗
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 font-mono">
                    <ShieldCheck size={13} className="text-cyan-400 shrink-0" />
                    <span>Secure Gateway Active</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 font-mono">
                    <Clock size={13} className="text-cyan-400 shrink-0" />
                    <span>Instant Credit Checkout Ready</span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2 text-gray-400 font-mono">
                    <Mail size={13} className="text-cyan-400" />
                    <span className="text-gray-200 select-all">{region.contact}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 font-mono">
                    <Phone size={13} className="text-cyan-400" />
                    <span>{region.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin size={13} className="text-cyan-400 shrink-0" />
                    <span className="truncate">{WHERE_TO_BUY_COPYWRITE.logisticsTitle}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Logistics & Safety Certification Compliance */}
      <section id="regulatory-compliance" className="bg-[#121214] border border-gray-800 rounded-xl p-6">
        <h3 className="text-sm font-mono uppercase text-gray-200 tracking-wider mb-6 flex items-center gap-2">
          <Award className="text-cyan-400" size={16} /> REQUIRED ENTERPRISE CERTIFICATIONS
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { tag: "CE / LVD & EMC", title: "EN 61010-1", desc: "Meets product safety principles for laboratory measurement equipment and CE-rated electromagnetic immunity guidelines." },
            { tag: "ISO 9001:2015", title: "Certified Factory", desc: "Each 800V DC unit undergoes a rigorous 48-hour continuous burning test at peak current to minimize early infant mortality failures." },
            { tag: "RoHS Compliant", title: "Directives 2011/65/EU", desc: "Free from hazardous lead or cadmium compositions, certified safe for high-temperature cleanroom equipment racks." },
            { tag: "Calibration Traceable", title: "NIST / DAkkS Ready", desc: "Supplied with high-accuracy calibration certification proving internal 16-bit analog-to-digital converters drift range." }
          ].map((cert, id) => (
            <div key={id} className="space-y-2 p-4 bg-[#161619] border border-gray-800/80 rounded-lg">
              <span className="block text-[10px] font-mono text-cyan-400 uppercase tracking-widest">{cert.tag}</span>
              <h4 className="text-xs font-sans font-bold text-gray-200">{cert.title}</h4>
              <p className="text-[11px] text-gray-400 leading-normal">{cert.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
