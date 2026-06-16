import type { Metadata } from "next";
import AboutEtmView from "@/components/AboutEtmView";

import { META_DATA_REGISTRY } from "@/data/copywriting";

export const metadata: Metadata = {
  title: META_DATA_REGISTRY.about_faq.title,
  description: META_DATA_REGISTRY.about_faq.description,
  alternates: {
    canonical: "/afb-power-etm-series-faq",
  },
};

export default function Page() {
  return <AboutEtmView />;
}
