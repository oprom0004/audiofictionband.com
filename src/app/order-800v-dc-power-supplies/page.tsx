import type { Metadata } from "next";
import BuyOnlineView from "@/components/BuyOnlineView";

import { META_DATA_REGISTRY } from "@/data/copywriting";

export const metadata: Metadata = {
  title: META_DATA_REGISTRY.buy_online.title,
  description: META_DATA_REGISTRY.buy_online.description,
  alternates: {
    canonical: "/order-800v-dc-power-supplies",
  },
};

export default function Page() {
  return <BuyOnlineView />;
}
