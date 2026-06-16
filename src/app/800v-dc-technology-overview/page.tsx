import type { Metadata } from "next";
import Intro800VView from "@/components/Intro800VView";

import { META_DATA_REGISTRY } from "@/data/copywriting";

export const metadata: Metadata = {
  title: META_DATA_REGISTRY.intro_800v.title,
  description: META_DATA_REGISTRY.intro_800v.description,
  alternates: {
    canonical: "/800v-dc-technology-overview",
  },
};

export default function Page() {
  return <Intro800VView />;
}
