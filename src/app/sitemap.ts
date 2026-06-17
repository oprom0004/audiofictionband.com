import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://audiofictionband.com";
  const staticRoutes = [
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
    "/variable-dc-power-supply",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/variable-dc-power-supply" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/variable-dc-power-supply" ? 0.9 : 0.8,
  }));

  // Dynamically add individual article pages
  const articleEntries: MetadataRoute.Sitemap = [];
  const contentDir = path.join(process.cwd(), "content/variable-dc-power-supply");
  if (fs.existsSync(contentDir)) {
    const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));
    const todayStr = new Date().toISOString().split("T")[0];
    for (const file of files) {
      const slug = file.replace(/\.md$/, "");
      const { data } = matter(fs.readFileSync(path.join(contentDir, file), "utf-8"));
      
      // Only include already published articles in sitemap
      if (data.date && data.date <= todayStr) {
        articleEntries.push({
          url: `${baseUrl}/variable-dc-power-supply/${slug}`,
          lastModified: data.date ? new Date(data.date) : new Date(),
          changeFrequency: "monthly",
          priority: 0.7,
        });
      }
    }
  }

  return [...staticEntries, ...articleEntries];
}

