/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Link from "next/link";
import { COMMON_COPYWRITE } from "../data/copywriting";

export default function Footer() {
  return (
    <footer id="site-footer" className="bg-[#0b0b0d] border-t border-gray-900 mt-16 text-xs text-gray-500 py-12 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-bold text-gray-200">
            <div className="w-8 h-6 rounded bg-cyan-500 text-gray-950 flex items-center justify-center font-bold font-mono text-[9px]">
              {COMMON_COPYWRITE.brandLogo}
            </div>
            <span className="font-sans uppercase text-xs tracking-wider">{COMMON_COPYWRITE.brandName} Solutions</span>
          </div>
          <p className="leading-relaxed text-gray-500">
            Specialist integrator of high-reliability 800V DC programmable power systems. Empowering research labs, automation clusters, and automated electrical systems.
          </p>
        </div>

        <div className="space-y-3 font-sans">
          <h4 className="text-xs uppercase tracking-wider text-gray-400 font-bold">Quick Inner Links</h4>
          <ul className="space-y-1.5 text-gray-400">
            <li>
              <Link href="/how-to-operate-800v-dc-power-supply" className="hover:text-cyan-400 text-[11px] underline text-left cursor-pointer">
                Operator Setup Manual
              </Link>
            </li>
            <li>
              <Link href="/buy-800v-dc-power-supply" className="hover:text-cyan-400 text-[11px] underline text-left cursor-pointer">
                Procurement Channels
              </Link>
            </li>
            <li>
              <Link href="/800v-dc-power-pricing-guide" className="hover:text-cyan-400 text-[11px] underline text-left cursor-pointer">
                Pricing Matrix Guide
              </Link>
            </li>
            <li>
              <Link href="/order-800v-dc-power-supplies" className="hover:text-cyan-400 text-[11px] underline text-left cursor-pointer">
                Inventory & Rates Portal
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-3 font-sans">
          <h4 className="text-xs uppercase tracking-wider text-gray-400 font-bold">Amperage Matrix</h4>
          <ul className="space-y-1.5 font-mono text-gray-400">
            <li>800V / 1A (Model eTM-8001)</li>
            <li>800V / 2A (Model eTM-8002)</li>
            <li>800V / 3A (Model eTM-8003)</li>
            <li>800V / 5A (Model eTM-8005)</li>
            <li>800V / 6A (Model eTM-8006)</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs uppercase tracking-wider text-gray-400 font-bold">Digital Inquiries</h4>
          <p className="leading-normal">
            Direct all official R&D tenders, system RFQs, and distribution request files to our support desk.
          </p>
          <div className="pt-1.5">
            <span className="block text-gray-300 font-mono text-xs">contact@variabledcpowersupply.com</span>
            <span className="block text-gray-500 text-[11px] mt-0.5">Response within 2 hours</span>
          </div>
        </div>

      </div>

      {/* Bottom copyright detail */}
      <div id="footer-copyright" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-gray-950 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
        <span>
          &copy; 1998 - 2026 {COMMON_COPYWRITE.brandName} Corporation. All rights reserved. Registered under domain: {COMMON_COPYWRITE.brandSub}
        </span>
        <div className="flex gap-4 text-gray-500">
          <span className="hover:text-gray-400 cursor-help underline">High-Voltage Safeties Standard</span>
          <span>&middot;</span>
          <span className="hover:text-gray-400 cursor-help underline">ISO 9001 Audited</span>
        </div>
      </div>
    </footer>
  );
}
