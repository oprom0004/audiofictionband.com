import type { Metadata } from "next";
import HomeView from "@/components/HomeView";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { META_DATA_REGISTRY } from "@/data/copywriting";

export const metadata: Metadata = {
  title: META_DATA_REGISTRY.home.title,
  description: META_DATA_REGISTRY.home.description,
  alternates: {
    canonical: "/",
  },
};

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  keywords: string[];
}

function getLatestBlogPosts(): BlogPost[] {
  const contentDir = path.join(process.cwd(), "content/variable-dc-power-supply");
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const files = fs.readdirSync(contentDir);
  const posts = files
    .filter(file => file.endsWith(".md"))
    .map(file => {
      const filePath = path.join(contentDir, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);
      const slug = file.replace(/\.md$/, "");

      return {
        slug,
        title: data.title || "Untitled Post",
        date: data.date || "",
        summary: data.summary || "",
        keywords: data.keywords || [],
      };
    });

  // Sort by date (newest first) and take the latest 6
  return posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);
}

export default function Page() {
  const posts = getLatestBlogPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AFB Variable Power Solutions",
    "url": "https://audiofictionband.com",
    "description": "Explore the AFB Power series of high-performance 800V DC power supplies. Engineered for high-voltage laboratories, EV testbeds, solar MPPT validation, and automated testing.",
    "publisher": {
      "@type": "Organization",
      "name": "AFB Power",
      "logo": {
        "@type": "ImageObject",
        "url": "https://audiofictionband.com/images/power_supply_800v.png"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeView posts={posts} />
    </>
  );
}
