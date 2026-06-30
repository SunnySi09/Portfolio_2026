"use client";

import React, { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import Reveal from "@/components/Reveal";
import { caseStudySections } from "./CaseStudyContent";
import { CaseStudyPreview } from "@/components/CaseStudyPreviews";
import Link from "next/link";

export default function TatvaKrtiCaseStudyPage() {
  const [activeSection, setActiveSection] = useState("cover-page");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Calculate reading progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // 2. Scroll Spy active section highlight logic
      const scrollPos = window.scrollY + 180; // Offset for navbar & headroom
      for (let i = caseStudySections.length - 1; i >= 0; i--) {
        const id = caseStudySections[i].id;
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once at start to set default values
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100, // Navbar headroom spacing
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <>
      <CursorGlow />
      <Nav />

      {/* Reading Progress Bar */}
      <div className="sticky top-[72px] left-0 right-0 h-1 bg-wash/30 z-40">
        <div
          className="h-full bg-[#ff385c] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Decorative Brand Top Wash */}
      <div className="absolute top-[72px] left-0 right-0 h-[380px] bg-gradient-to-b from-wash/10 to-transparent pointer-events-none z-0" />

      <main className="relative z-10 shell pt-8 pb-24">
        {/* Breadcrumb Back Navigation */}
        <Reveal>
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-ink transition-colors mb-8"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Selected Work
          </Link>
        </Reveal>

        {/* Dynamic Cover Section Header */}
        <section className="mb-12 border-b border-hairline pb-8">
          <Reveal>
            <span className="eyebrow">Shopify UX · E-commerce</span>
            <h1 className="mt-3 font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-ink leading-tight">
              Case Study: Tatva Krti
            </h1>
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-body max-w-3xl">
              A Shopify storefront revamp designed to improve product discoverability, elevate organic wellness storytelling, and reduce mobile checkout friction.
            </p>
          </Reveal>

          {/* Project Metadata Grid */}
          <Reveal delay={100}>
            <div className="mt-10 grid gap-6 sm:grid-cols-4 border-t border-hairline pt-8 text-xs">
              <div>
                <span className="block font-bold uppercase tracking-wider text-muted mb-1.5">My Role</span>
                <span className="text-[14px] font-semibold text-ink">Shopify UI/UX Designer</span>
                <p className="text-[10px] text-muted-soft mt-1 leading-normal">
                  Storefront Auditing, User Journeys, High-Fidelity UI, Asset Optimization, Design QA.
                </p>
              </div>
              <div>
                <span className="block font-bold uppercase tracking-wider text-muted mb-1.5">Timeline</span>
                <span className="text-[14px] font-semibold text-ink">Apr 2025 - Oct 2025</span>
                <p className="text-[10px] text-muted-soft mt-1 leading-normal">Completed project delivery.</p>
              </div>
              <div>
                <span className="block font-bold uppercase tracking-wider text-muted mb-1.5">The Team</span>
                <span className="text-[14px] font-semibold text-ink">E-commerce Operations</span>
                <p className="text-[10px] text-muted-soft mt-1 leading-normal">
                  1 PM, 1 Designer, 1 FE Developer, 1 Digital Marketer.
                </p>
              </div>
              <div>
                <span className="block font-bold uppercase tracking-wider text-muted mb-1.5">Tools &amp; Tech</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {["Shopify", "Dawn Theme", "Figma", "FigJam"].map((t) => (
                    <span
                      key={t}
                      className="inline-flex rounded-full border border-wash/40 bg-wash/10 px-2 py-0.5 font-semibold text-[10px] text-rausch-active"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Double-Column Workspace layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Sticky Left Navigation (Table of Contents) */}
          <aside className="hidden lg:block w-64 sticky top-28 shrink-0 select-none">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-muted mb-4 px-3">
              TABLE OF CONTENTS
            </span>
            <nav className="space-y-1 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              {caseStudySections.map((sec) => {
                const isActive = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full text-left text-xs px-3 py-2 rounded transition-all duration-150 block truncate ${
                      isActive
                        ? "bg-wash/30 text-rausch-active font-bold border-l-2 border-rausch"
                        : "text-muted hover:text-ink hover:bg-soft"
                    }`}
                  >
                    {sec.shortTitle}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Right Column (Long-form Case Study Copy) */}
          <article className="flex-1 max-w-4xl space-y-16">
            {caseStudySections.map((sec, idx) => (
              <section
                key={sec.id}
                id={sec.id}
                className="scroll-mt-28 border-b border-hairline last:border-b-0 pb-16"
              >
                <Reveal delay={idx === 0 ? 50 : 0}>
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-ink mb-6">
                    {sec.title}
                  </h2>
                  <div className="prose prose-slate max-w-none text-[#333333]">
                    {sec.content}
                  </div>

                  {/* Inline interactive sandbox mockup injected inside 'Product Detail Page' section */}
                  {sec.id === "product-detail-page" && (
                    <div className="mt-8 border border-hairline rounded-xl bg-canvas p-2 sm:p-4 shadow-lift">
                      <div className="mb-3 flex items-center justify-between border-b border-hairline pb-2 px-1">
                        <div className="flex gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                        </div>
                        <span className="text-[10px] font-mono text-muted uppercase font-semibold">
                          Interactive Tatva Krti Storefront Product Grid
                        </span>
                      </div>
                      <CaseStudyPreview slug="tatva-krti" />
                    </div>
                  )}
                </Reveal>
              </section>
            ))}

            {/* Bottom Back Button */}
            <Reveal className="pt-8 flex justify-center">
              <Link
                href="/#work"
                className="inline-flex h-12 items-center justify-center rounded-full border border-ink bg-white px-8 text-sm font-semibold text-ink hover:bg-ink hover:text-white transition-colors"
              >
                ← Back to All Projects
              </Link>
            </Reveal>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
