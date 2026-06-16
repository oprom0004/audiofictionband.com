import type { Metadata } from "next";
import HomeView from "@/components/HomeView";

import { META_DATA_REGISTRY } from "@/data/copywriting";

export const metadata: Metadata = {
  title: META_DATA_REGISTRY.home.title,
  description: META_DATA_REGISTRY.home.description,
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AFB Variable Power Solutions",
    "url": "https://audiofictionband.com",
    "description": "Explore the AFB Power series of high-performance 800V DC power supplies. Engineered for high-voltage laboratories, EV testbeds, solar MPPT validation, and automated testing.",
    "publisher": {
      "@type": "Organization",
      "name": "AFB Power",
      "logo": {
        "@type": "ImageObject",
        "url": "https://audiofictionband.com/images/power_supply_800v.png"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeView />
    </>
  );
}
