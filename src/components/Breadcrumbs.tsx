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
  if (!pathname) return null;

  // Split path into segments
  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbsList = [
    { label: "Home", href: "/" }
  ];

  let currentPath = "";
  segments.forEach((segment) => {
    currentPath += `/${segment}`;
    
    // Check in labels map first
    let label = ROUTE_LABELS_MAP[currentPath];
    
    if (!label) {
      if (segment === "variable-dc-power-supply") {
        label = "Variable DC Power Supply";
      } else {
        // Clean up slug to look like a title
        label = segment
          .split("-")
          .map(word => {
            if (["ev", "dc", "mppt", "scpi", "lan", "iso", "loto", "ate", "led", "rs485"].includes(word.toLowerCase())) {
              return word.toUpperCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
          })
          .join(" ");
        // Truncate if too long
        if (label.length > 35) {
          label = label.substring(0, 32) + "...";
        }
      }
    }
    
    breadcrumbsList.push({ label, href: currentPath });
  });

  return (
    <div id="breadcrumbs" className="flex flex-wrap items-center gap-1.5 text-xs text-gray-500 py-1.5 font-sans border-b border-gray-900 pb-3">
      {breadcrumbsList.map((crumb, idx) => {
        const isLast = idx === breadcrumbsList.length - 1;
        return (
          <React.Fragment key={crumb.href}>
            {idx > 0 && <ChevronRight size={11} className="text-gray-600 shrink-0" />}
            {isLast ? (
              <span className="text-cyan-400 font-semibold truncate max-w-[250px] sm:max-w-[450px]">
                {crumb.label}
              </span>
            ) : (
              <Link 
                href={crumb.href}
                className="hover:text-cyan-400 font-semibold cursor-pointer transition text-gray-400 shrink-0 flex items-center gap-1"
              >
                {idx === 0 && <Globe size={13} className="text-cyan-400 inline" />}
                {crumb.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
