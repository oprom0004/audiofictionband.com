import type { Metadata } from "next";
import HowToUseView from "@/components/HowToUseView";

import { META_DATA_REGISTRY } from "@/data/copywriting";

export const metadata: Metadata = {
  title: META_DATA_REGISTRY.how_to_use.title,
  description: META_DATA_REGISTRY.how_to_use.description,
  alternates: {
    canonical: "/how-to-operate-800v-dc-power-supply",
  },
};

export default function Page() {
  return <HowToUseView />;
}
