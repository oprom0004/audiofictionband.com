import type { Metadata } from "next";
import LabUseView from "@/components/LabUseView";

import { META_DATA_REGISTRY } from "@/data/copywriting";

export const metadata: Metadata = {
  title: META_DATA_REGISTRY.lab.title,
  description: META_DATA_REGISTRY.lab.description,
  alternates: {
    canonical: "/laboratory-800v-dc-power",
  },
};

export default function Page() {
  return <LabUseView />;
}
