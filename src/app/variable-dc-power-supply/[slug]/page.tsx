/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { Calendar, User, Tag, ArrowLeft } from "lucide-react";

export const dynamic = "force-static";

const CONTENT_DIR = path.join(process.cwd(), "content/variable-dc-power-supply");

interface PageParams {
  params: Promise<{ slug: string }>;
}

// Generate static params for all .md files
// NOTE: must return at least one entry with output:export — use _placeholder when empty
export function generateStaticParams() {
  if (!fs.existsSync(CONTENT_DIR)) return [{ slug: "_placeholder" }];
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"));
  if (files.length === 0) return [{ slug: "_placeholder" }];
  return files.map((file) => ({ slug: file.replace(/\.md$/, "") }));
}

// Generate per-page metadata from frontmatter
export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return {};
  const { data } = matter(fs.readFileSync(filePath, "utf-8"));
  return {
    title: data.title
      ? `${data.title} | AFB Power`
      : "Variable DC Power Supply Article | AFB Power",
    description: data.summary || "",
    keywords: Array.isArray(data.keywords) ? data.keywords.join(", ") : "",
    alternates: { canonical: `/variable-dc-power-supply/${slug}` },
  };
}

// Simple Markdown → HTML renderer (no external dep needed beyond gray-matter)
function markdownToHtml(md: string): string {
  return md
    // Headings
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-bold text-gray-100 mt-7 mb-2">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold text-cyan-400 mt-10 mb-3 border-b border-gray-800 pb-2">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="text-2xl font-extrabold text-gray-100 mt-6 mb-4">$1</h1>')
    // Bold / italic
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-gray-100 font-semibold">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em class="text-gray-300 italic">$1</em>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-cyan-400 hover:text-cyan-300 underline underline-offset-2">$1</a>')
    // Unordered list items
    .replace(/^\s*[-*]\s+(.+)$/gm, '<li class="ml-5 list-disc text-gray-300 text-base leading-relaxed">$1</li>')
    // Ordered list items
    .replace(/^\d+\.\s+(.+)$/gm, '<li class="ml-5 list-decimal text-gray-300 text-base leading-relaxed">$1</li>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code class="bg-gray-800 text-cyan-300 text-xs px-1.5 py-0.5 rounded font-mono">$1</code>')
    // Horizontal rule
    .replace(/^---$/gm, '<hr class="border-gray-800 my-8" />')
    // Blank lines → paragraph breaks
    .replace(/\n\n+/g, '</p><p class="text-gray-300 text-base leading-relaxed my-4">')
    // Wrap in opening paragraph
    .replace(/^/, '<p class="text-gray-300 text-base leading-relaxed my-4">')
    .replace(/$/, "</p>")
    // Wrap consecutive <li> in <ul>
    .replace(/(<li[^>]*>[\s\S]*?<\/li>)(\s*<li)/g, "$1$2")
    .replace(/(<li class="ml-5 list-disc[^"]*"[^>]*>)/g, (m) =>
      m.includes("list-disc") ? m : m
    );
}

export default async function ArticlePage({ params }: PageParams) {
  const { slug } = await params;
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);

  // _placeholder is only a build-time sentinel; treat as 404 at runtime
  if (slug === "_placeholder" || !fs.existsSync(filePath)) notFound();

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const htmlContent = markdownToHtml(content);

  return (
    <article id="article-page" className="max-w-3xl mx-auto font-sans space-y-8">

      {/* Back link */}
      <Link
        href="/variable-dc-power-supply"
        className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-mono uppercase transition"
      >
        <ArrowLeft size={13} />
        Variable DC Power Supply Articles
      </Link>

      {/* Article Header */}
      <header className="space-y-5 border-b border-gray-800 pb-8">
        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-gray-500 uppercase">
          {data.date && (
            <span className="flex items-center gap-1">
              <Calendar size={11} className="text-cyan-400" />
              {data.date}
            </span>
          )}
          {data.author && (
            <span className="flex items-center gap-1">
              <User size={11} className="text-cyan-400" />
              {data.author}
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-100 leading-tight tracking-tight">
          {data.title || slug}
        </h1>

        {/* Summary */}
        {data.summary && (
          <p className="text-sm text-gray-400 leading-relaxed border-l-2 border-cyan-500/40 pl-4 italic">
            {data.summary}
          </p>
        )}

        {/* Keywords */}
        {Array.isArray(data.keywords) && data.keywords.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {data.keywords.map((kw: string, idx: number) => (
              <span
                key={idx}
                className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded bg-gray-800 text-[11px] font-mono text-gray-400 uppercase font-semibold"
              >
                <Tag size={8} />
                {kw}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Article Body */}
      <section
        id="article-body"
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      {/* Footer CTA */}
      <footer className="mt-12 p-6 rounded-xl bg-[#0e0e10] border border-gray-800 space-y-3">
        <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">Related Resource</p>
        <p className="text-sm text-gray-300 leading-relaxed">
          Explore the full AFB Power ETM 800V DC power supply lineup — from compact 1A bench units to 4.8 kW three-phase rack systems.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="text-xs text-cyan-400 hover:text-cyan-300 font-mono uppercase underline underline-offset-2 transition"
          >
            ← AFB Power Home
          </Link>
          <Link
            href="/variable-dc-power-supply"
            className="text-xs text-cyan-400 hover:text-cyan-300 font-mono uppercase underline underline-offset-2 transition"
          >
            More Articles
          </Link>
        </div>
      </footer>

    </article>
  );
}
