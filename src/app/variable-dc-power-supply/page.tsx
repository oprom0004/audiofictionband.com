/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Metadata } from "next";
import { BookOpen, Calendar, User, Tag, ArrowRight } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Variable DC Power Supply — Technical Articles & Industry Insights | AFB Power",
  description: "In-depth articles on variable DC power supply selection, programmable control, EV battery testing, lab-grade setups, and industrial 800V architecture.",
  alternates: {
    canonical: "/variable-dc-power-supply",
  },
};

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  summary: string;
  keywords: string[];
}

function getBlogPosts(): BlogPost[] {
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
        author: data.author || "AFB Power Editor",
        summary: data.summary || "",
        keywords: data.keywords || [],
      };
    });

  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function BlogIndexPage() {
  const posts = getBlogPosts();

  return (
    <div id="blog-index" className="space-y-10 font-sans">
      
      {/* Editorial Header */}
      <section id="blog-header" className="space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
          <BookOpen size={13} className="text-cyan-400" />
          <span className="text-xs font-mono font-medium text-cyan-400 uppercase tracking-wider font-semibold">
            Technical Curation
          </span>
        </div>
        <h1 className="text-3xl font-extrabold text-gray-100 tracking-tight">
          Variable DC Power Supply — Technical Articles
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
          In-depth engineering articles on selecting, installing, and programming variable DC power supplies for 800V EV testbeds, solar MPPT validation, lab research, and industrial automation.
        </p>
      </section>

      {/* Blog Cards Grid */}
      <section id="blog-grid">
        {posts.length === 0 ? (
          <div className="p-10 text-center bg-[#121214] border border-gray-800 rounded-xl space-y-2">
            <p className="text-sm text-gray-400 font-mono">No article parameters detected.</p>
            <p className="text-xs text-gray-500">Automated crawlers will commit news content on the next scheduled run.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <article 
                key={post.slug}
                className="bg-[#121214] border border-gray-800 hover:border-cyan-500/30 rounded-xl p-6 transition flex flex-col justify-between group h-full space-y-4"
              >
                <div className="space-y-3">
                  {/* Meta Indicators */}
                  <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono text-gray-500 uppercase">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} className="text-cyan-400" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={11} className="text-cyan-400" />
                      {post.author}
                    </span>
                  </div>

                  {/* Title & summary */}
                  <h2 className="text-base font-bold text-gray-150 group-hover:text-cyan-400 transition-colors leading-snug">
                    <Link href={`/variable-dc-power-supply/${post.slug}`} className="cursor-pointer">
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>

                {/* Keywords tags & Link action */}
                <div className="space-y-3 pt-3 border-t border-gray-850">
                  <div className="flex flex-wrap gap-1.5">
                    {post.keywords.map((kw, idx) => (
                      <span 
                        key={idx}
                        className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded bg-gray-800 text-[9px] font-mono text-gray-400 uppercase font-semibold"
                      >
                        <Tag size={8} />
                        {kw}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-end pt-1">
                    <Link
                      href={`/variable-dc-power-supply/${post.slug}`}
                      className="text-xs text-cyan-400 hover:text-cyan-300 font-mono uppercase flex items-center gap-1 transition cursor-pointer"
                    >
                      Read full report
                      <ArrowRight size={13} className="transform group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>

              </article>
            ))}
          </div>
        )}
      </section>

    </div>
  );
}
