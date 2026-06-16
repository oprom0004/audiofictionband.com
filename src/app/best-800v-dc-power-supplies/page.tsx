import type { Metadata } from "next";
import BestSupplyView from "@/components/BestSupplyView";

import { META_DATA_REGISTRY } from "@/data/copywriting";

export const metadata: Metadata = {
  title: META_DATA_REGISTRY.best.title,
  description: META_DATA_REGISTRY.best.description,
  alternates: {
    canonical: "/best-800v-dc-power-supplies",
  },
};

export default function Page() {
  return <BestSupplyView />;
}
