import type { Metadata } from "next";
import ProgrammableView from "@/components/ProgrammableView";

import { META_DATA_REGISTRY } from "@/data/copywriting";

export const metadata: Metadata = {
  title: META_DATA_REGISTRY.programmable.title,
  description: META_DATA_REGISTRY.programmable.description,
  alternates: {
    canonical: "/programmable-800v-dc-psu",
  },
};

export default function Page() {
  return <ProgrammableView />;
}
