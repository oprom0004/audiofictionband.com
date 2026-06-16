import type { Metadata } from "next";
import WhereToBuyView from "@/components/WhereToBuyView";

import { META_DATA_REGISTRY } from "@/data/copywriting";

export const metadata: Metadata = {
  title: META_DATA_REGISTRY.where_to_buy.title,
  description: META_DATA_REGISTRY.where_to_buy.description,
  alternates: {
    canonical: "/buy-800v-dc-power-supply",
  },
};

export default function Page() {
  return <WhereToBuyView />;
}
