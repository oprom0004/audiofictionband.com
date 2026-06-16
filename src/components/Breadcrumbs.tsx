"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, ChevronRight } from "lucide-react";

const ROUTE_LABELS_MAP: Record<string, string> = {
  "/": "Home",
  "/how-to-operate-800v-dc-power-supply": "Operator Setup Manual",
  "/buy-800v-dc-power-supply": "Procurement Channels",
  "/800v-dc-power-pricing-guide": "Pricing Matrix Guide",
  "/order-800v-dc-power-supplies": "Inventory & Rates Portal",
  "/best-800v-dc-power-supplies": "Performance Benchmark",
  "/models-800v-dc-1a-6a": "1A-6A Specs",
  "/programmable-800v-dc-psu": "SCPI Control",
  "/laboratory-800v-dc-power": "Lab Grade PSU",
  "/800v-dc-power-applications": "Industrial Case Studies",
  "/800v-dc-technology-overview": "HVDC Tech Overview",
  "/afb-power-etm-series-faq": "FAQ & About",
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  const label = ROUTE_LABELS_MAP[pathname] || "";

  return (
    <div id="breadcrumbs" className="flex items-center gap-2 text-xs text-gray-500 py-1.5 font-sans border-b border-gray-900 pb-3">
      <Link 
        href="/"
        className="hover:text-cyan-400 font-semibold cursor-pointer transition flex items-center gap-1.5 text-gray-400"
      >
        <Globe size={13} className="text-cyan-400" />
        <span>800V DC Power Supply</span>
      </Link>
      
      {pathname !== "/" && label && (
        <>
          <ChevronRight size={12} className="text-gray-600 shrink-0" />
          <span className="text-gray-200 font-semibold">
            {label}
          </span>
        </>
      )}
    </div>
  );
}
