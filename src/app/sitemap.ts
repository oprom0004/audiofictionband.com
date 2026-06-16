import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://audiofictionband.com";
  const routes = [
    "",
    "/models-800v-dc-1a-6a",
    "/800v-dc-power-applications",
    "/laboratory-800v-dc-power",
    "/800v-dc-power-pricing-guide",
    "/800v-dc-technology-overview",
    "/best-800v-dc-power-supplies",
    "/order-800v-dc-power-supplies",
    "/afb-power-etm-series-faq",
    "/how-to-operate-800v-dc-power-supply",
    "/programmable-800v-dc-psu",
    "/buy-800v-dc-power-supply",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
