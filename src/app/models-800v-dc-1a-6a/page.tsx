import type { Metadata } from "next";
import CurrentSeriesView from "@/components/CurrentSeriesView";

import { META_DATA_REGISTRY } from "@/data/copywriting";

export const metadata: Metadata = {
  title: META_DATA_REGISTRY.current_series.title,
  description: META_DATA_REGISTRY.current_series.description,
  alternates: {
    canonical: "/models-800v-dc-1a-6a",
  },
};

export default function Page() {
  return <CurrentSeriesView />;
}
