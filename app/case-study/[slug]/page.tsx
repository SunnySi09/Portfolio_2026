"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import Reveal from "@/components/Reveal";
import { caseStudies } from "@/lib/caseStudies";
import { CaseStudyPreview } from "@/components/CaseStudyPreviews";
import Link from "next/link";

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const study = caseStudies[slug];

  if (!study) {
    notFound();
  }

  // Accent-specific styling configurations
  const accentGradients = {
    rausch: "from-rausch/5 to-transparent",
    ink: "from-ink/5 to-transparent",
    wash: "from-wash/15 to-transparent",
    plum: "from-plum/5 to-transparent",
  };

  const accentTextColors = {
    rausch: "text-rausch",
    ink: "text-ink border-ink",
    wash: "text-rausch-active",
    plum: "text-plum",
  };

  const accentPillStyles = {
    rausch: "bg-rausch/10 text-rausch-active border-rausch/20",
    ink: "bg-ink/5 text-ink border-ink/10",
    wash: "bg-wash/30 text-rausch-active border-wash/50",
    plum: "bg-plum/10 text-plum border-plum/20",
  };

  const gradient = accentGradients[study.accent] || "from-soft to-transparent";
  const textColor = accentTextColors[study.accent] || "text-ink";
  const pillStyle = accentPillStyles[study.accent] || "bg-soft text-ink border-hairline";

  return (
    <>
      <CursorGlow />
      <Nav />

      {/* Brand Accent Top Hero Wash */}
      <div className={`absolute top-[72px] left-0 right-0 h-[400px] bg-gradient-to-b ${gradient} pointer-events-none z-0`} />

      <main className="relative z-10 shell pt-10 pb-24">
        {/* Back Link */}
        <Reveal>
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-ink transition-colors mb-8"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Selected Work
          </Link>
        </Reveal>

        {/* Case Study Hero Section */}
        <section className="mt-2">
          <Reveal>
            <span className="eyebrow">{study.tag}</span>
            <h1 className="mt-3 font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-ink leading-tight">
              {study.title}
            </h1>
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-body max-w-3xl">
              {study.intro}
            </p>
          </Reveal>

          {/* Project Metadata Grid */}
          <Reveal delay={100}>
            <div className="mt-10 grid gap-8 border-y border-hairline py-8 sm:grid-cols-3">
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-muted mb-2">My Role</span>
                <span className="text-[15px] font-semibold text-ink">{study.role}</span>
              </div>
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-muted mb-2">Timeline</span>
                <span className="text-[15px] font-semibold text-ink">{study.duration}</span>
              </div>
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-muted mb-2">Tools & Technology</span>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {study.tools.map((tool) => (
                    <span
                      key={tool}
                      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${pillStyle}`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Dynamic Case Study Core Narrative Sections */}
        <div className="mt-16 space-y-20 max-w-4xl mx-auto">
          
          {/* Section 1: Introduction */}
          <Reveal as="section">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
              01. Introduction
            </h2>
            <div className="mt-4 prose prose-slate">
              <p className="text-[15px] sm:text-base leading-relaxed text-body">
                {study.intro} This case study reviews the complete lifecycle of designing, testing, and shipping this interface, from identifying specific user friction points to shipping the final design system metrics.
              </p>
            </div>
          </Reveal>

          {/* Section 2: Problem Statement */}
          <Reveal as="section">
            <div className="rounded-xl border border-hairline bg-soft/50 p-6 sm:p-8">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-ink flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-rausch/10 text-rausch text-sm" aria-hidden>
                  !
                </span>
                02. The Problem
              </h2>
              <div className="mt-4">
                <p className="text-[15px] sm:text-base leading-relaxed text-body">
                  {study.problem}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Section 3: The Solution & Interactive Prototyping Preview */}
          <Reveal as="section" className="space-y-6">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
                03. The Solution
              </h2>
              <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-body">
                {study.solution} Below is an interactive prototype demonstrating the layout structure, core configurations, and responsive visual flow designed for this project.
              </p>
            </div>

            {/* Interactive Mockup Container */}
            <div className="mt-6 border border-hairline rounded-xl bg-canvas p-2 sm:p-4 shadow-lift">
              <div className="mb-3 flex items-center justify-between border-b border-hairline pb-2 px-1">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <span className="text-[10px] font-mono text-muted">Interactive Sandbox Preview</span>
              </div>
              <CaseStudyPreview slug={study.slug} />
            </div>
          </Reveal>

          {/* Section 4: Market Research & User Validation */}
          <Reveal as="section">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
              04. Market Research & Analysis
            </h2>
            <div className="mt-4">
              <p className="text-[15px] sm:text-base leading-relaxed text-body">
                {study.marketResearch}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 rounded-xl border border-hairline p-6 bg-white">
                <div className="text-center">
                  <span className="block font-display text-3xl sm:text-4xl font-extrabold text-rausch">12%</span>
                  <span className="mt-1 block text-xs text-muted font-medium">Usability Task Success Improvement</span>
                </div>
                <div className="text-center border-l border-hairline">
                  <span className="block font-display text-3xl sm:text-4xl font-extrabold text-ink">40%</span>
                  <span className="mt-1 block text-xs text-muted font-medium">Order Processing Speed Boost</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Section 5: Conclusion & Reflections */}
          <Reveal as="section">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
              05. Conclusion
            </h2>
            <div className="mt-4">
              <p className="text-[15px] sm:text-base leading-relaxed text-body">
                {study.conclusion}
              </p>
            </div>
          </Reveal>

        </div>

        {/* Back navigation at bottom */}
        <Reveal className="mt-20 border-t border-hairline pt-12 flex justify-center">
          <Link
            href="/#work"
            className="inline-flex h-12 items-center justify-center rounded-full border border-ink bg-white px-8 text-sm font-semibold text-ink hover:bg-ink hover:text-white transition-colors"
          >
            ← Back to All Case Studies
          </Link>
        </Reveal>
      </main>

      <Footer />
    </>
  );
}
