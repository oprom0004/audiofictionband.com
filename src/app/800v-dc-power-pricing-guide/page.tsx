import type { Metadata } from "next";
import PriceView from "@/components/PriceView";

import { META_DATA_REGISTRY } from "@/data/copywriting";

export const metadata: Metadata = {
  title: META_DATA_REGISTRY.price.title,
  description: META_DATA_REGISTRY.price.description,
  alternates: {
    canonical: "/800v-dc-power-pricing-guide",
  },
};

export default function Page() {
  return <PriceView />;
}
