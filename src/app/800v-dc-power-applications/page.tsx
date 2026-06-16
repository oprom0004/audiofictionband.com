import type { Metadata } from "next";
import ApplicationView from "@/components/ApplicationView";

import { META_DATA_REGISTRY } from "@/data/copywriting";

export const metadata: Metadata = {
  title: META_DATA_REGISTRY.application.title,
  description: META_DATA_REGISTRY.application.description,
  alternates: {
    canonical: "/800v-dc-power-applications",
  },
};

export default function Page() {
  return <ApplicationView />;
}
