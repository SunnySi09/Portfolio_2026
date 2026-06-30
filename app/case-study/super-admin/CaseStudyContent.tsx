"use client";

import React from "react";

export type Section = {
  id: string;
  title: string;
  shortTitle: string;
  content: React.ReactNode;
};

export const caseStudySections: Section[] = [
  {
    id: "cover-page",
    title: "01. Cover Page & Project Overview",
    shortTitle: "Overview",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-[#1e3f20]/10 to-[#d4af37]/5 p-6 rounded-xl border border-[#ebe5d3] mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#1e3f20] mb-2">Project Classification</p>
          <p className="text-xl sm:text-2xl font-serif font-bold text-ink">
            Elova B2B ERP: Enterprise-Scale Multi-Store Admin for Diamond &amp; Fine Jewellery wholesaling.
          </p>
        </div>
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          In the high-end jewelry industry, wholesale operations are notoriously complex. Unlike standard retail e-commerce, B2B jewelry transactions are subject to fluctuating precious metal market indices (such as gold, platinum, and silver) and complex, granular diamond quality calculations. 
          Historically, Elova—a premier global jewelry manufacturer based in Surat, India—managed its operations across 15+ distinct channels through a legacy system of isolated Excel spreadsheets, physical invoices, and phone-based orders.
        </p>
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          This case study describes the end-to-end design lifecycle of the **Elova Super Admin ERP**, a centralized multi-store management platform built to coordinate catalog publishing, global order desks, role-based security, live index-linked pricing configurations, and logistics. 
          As the lead Product Designer, I took ownership of the design vision from the initial stakeholder workshops down to the custom component library and visual QA testing.
        </p>
      </div>
    ),
  },
  {
    id: "executive-summary",
    title: "02. Executive Summary",
    shortTitle: "Executive Summary",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          The primary objective of the Elova ERP project was to replace an error-prone, distributed workflow with a single, highly performant administrative portal. Prior to this design intervention, creating a single new wholesale order required inventory managers, sales representatives, and billing teams to sync manually across four different systems. Product data updates could take up to 24 hours to sync across different B2B store templates, resulting in lost margins.
        </p>
        <div className="border-l-4 border-rausch pl-4 italic my-6 text-[#4a4235] text-[15px]">
          "We were bleeding profit because wholesale buyers were ordering rings based on gold and diamond rates that had changed 48 hours prior. Our catalog management was a bottleneck, and pricing errors were common."
          <span className="block mt-2 font-semibold text-xs not-italic text-muted">— CEO, Elova</span>
        </div>
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          My role was to lead the design of this complex application, focusing on reducing cognitive load for operators who interact with massive tabular grids daily. By introducing dynamic pricing modifiers, a structured 22-module information architecture, and a scalable design system, we designed a dashboard that successfully aligned business priorities with daily operational needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <div className="bg-[#fcfaf2] p-4 rounded-lg border border-[#ebe5d3] text-center">
            <span className="block font-display text-3xl font-extrabold text-[#1e3f20]">40%</span>
            <span className="text-xs text-muted font-medium uppercase mt-1 block">Reduction in Dispatch Time</span>
          </div>
          <div className="bg-[#fcfaf2] p-4 rounded-lg border border-[#ebe5d3] text-center">
            <span className="block font-display text-3xl font-extrabold text-[#1e3f20]">95%</span>
            <span className="text-xs text-muted font-medium uppercase mt-1 block">Drop in Pricing Discrepancies</span>
          </div>
          <div className="bg-[#fcfaf2] p-4 rounded-lg border border-[#ebe5d3] text-center">
            <span className="block font-display text-3xl font-extrabold text-[#1e3f20]">2 hrs</span>
            <span className="text-xs text-muted font-medium uppercase mt-1 block">Saved per Catalog Update</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "company-background",
    title: "03. Company Background",
    shortTitle: "Company Background",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          Elova operates as a premier designer and wholesale distributor of loose diamonds and fine gold jewelry. Serving hundreds of retail jewelry brands across North America, Europe, and Asia-Pacific, Elova manages an inventory of over 5,000 active SKUs, each featuring unique combinations of diamond carats, metal weights (14k/18k gold, platinum), and ring settings.
        </p>
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          The scale of Elova’s operations encompasses a centralized manufacturing hub in Surat, corporate sales offices in Mumbai and Dubai, and 15+ partner storefront portals.
          The corporate structure involves three core user groups:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[15px] text-body">
          <li><strong>Inventory Officers:</strong> Manage raw diamond sorting, metal weight allocations, and physical stock counts.</li>
          <li><strong>Catalog Managers:</strong> Standardize product descriptors, assign categories/collections, and set baseline markup multipliers.</li>
          <li><strong>Order &amp; Billing Teams:</strong> Process wholesale purchase orders, handle custom resize requests, and adjust discounts for volume buyers.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "problem-statement",
    title: "04. Problem Statement",
    shortTitle: "The Problem",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          The legacy operations were severely limited by operational fragmentation, which created substantial business and technical challenges:
        </p>
        <div className="grid gap-6 md:grid-cols-2 mt-4">
          <div className="p-5 border border-hairline rounded-lg bg-white shadow-sm">
            <h4 className="font-bold text-ink text-sm uppercase tracking-wide mb-2 text-rausch-active">Operational Fragmentations</h4>
            <p className="text-xs text-muted leading-relaxed">
              Resellers ordered items that were already dispatched or out-of-stock. Stock managers updated inventory in one database, while catalog managers operated in another, causing frequent delays.
            </p>
          </div>
          <div className="p-5 border border-hairline rounded-lg bg-white shadow-sm">
            <h4 className="font-bold text-ink text-sm uppercase tracking-wide mb-2 text-rausch-active">Financial Mismatches</h4>
            <p className="text-xs text-muted leading-relaxed">
              Wholesale pricing is based on live gold market rates. When index prices surged, sales agents closed orders based on stale, lower pricing models, leading to margin erosion.
            </p>
          </div>
          <div className="p-5 border border-hairline rounded-lg bg-white shadow-sm">
            <h4 className="font-bold text-ink text-sm uppercase tracking-wide mb-2 text-rausch-active">Reseller Disconnection</h4>
            <p className="text-xs text-muted leading-relaxed">
              B2B partners had no direct visibility into invoice tracking. Every inquiry about order resizing or fulfillment status required support tickets, back-and-forth emails, and phone tag.
            </p>
          </div>
          <div className="p-5 border border-hairline rounded-lg bg-white shadow-sm">
            <h4 className="font-bold text-ink text-sm uppercase tracking-wide mb-2 text-rausch-active">Security &amp; RBAC Gaps</h4>
            <p className="text-xs text-muted leading-relaxed">
              No granular control over who could edit product costs or apply discounts. Standard employees had access to the master margin configuration, introducing significant operational risk.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "design-goals",
    title: "05. Design Goals",
    shortTitle: "Design Goals",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          To address these challenges, we established a clear set of design goals, aligning user needs with business objectives:
        </p>
        <div className="space-y-4 mt-4">
          <div className="flex gap-4 items-start">
            <span className="h-6 w-6 rounded-full bg-[#1e3f20]/10 text-[#1e3f20] font-bold text-xs flex items-center justify-center shrink-0">1</span>
            <div>
              <h4 className="text-sm font-bold text-ink uppercase tracking-wide">Establish Pricing Consistency</h4>
              <p className="text-xs text-muted mt-0.5">Integrate live index calculators so that all SKU prices dynamically adjust to metal market changes instantly, protecting profit margins.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="h-6 w-6 rounded-full bg-[#1e3f20]/10 text-[#1e3f20] font-bold text-xs flex items-center justify-center shrink-0">2</span>
            <div>
              <h4 className="text-sm font-bold text-ink uppercase tracking-wide">Optimize Data Density Layouts</h4>
              <p className="text-xs text-muted mt-0.5">Design tables and card lists that allow staff to scan thousands of records, adjust components, and confirm statuses without layout fatigue.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="h-6 w-6 rounded-full bg-[#1e3f20]/10 text-[#1e3f20] font-bold text-xs flex items-center justify-center shrink-0">3</span>
            <div>
              <h4 className="text-sm font-bold text-ink uppercase tracking-wide">Enforce Role-Based Workflows</h4>
              <p className="text-xs text-muted mt-0.5">Build a secure access model allowing supervisors to assign specific modules and action permissions (read, write, delete) across different roles.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "research-process",
    title: "06. Research Process & User Insights",
    shortTitle: "Research",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          Designing an enterprise tool requires deep understanding of day-to-day operations. I conducted a week of onsite contextual inquiries at Elova’s Surat manufacturing facility and held remote interviews with B2B retail buyers in Dubai and New York.
        </p>
        <div className="bg-soft p-5 rounded-lg border border-hairline my-6">
          <h4 className="text-xs font-bold text-ink uppercase tracking-wider mb-2">Key Research Insight: The Calculator Fatigue</h4>
          <p className="text-xs text-muted leading-relaxed">
            We discovered that catalog managers kept up to 3 Excel calculators open simultaneously to verify SKU margins before hitting "Publish" on a product. They checked the carat weight of diamonds, the purity index of gold, and labor overhead, manually matching them against a printed markup sheet. This manual process was a major bottleneck in their daily workflow.
          </p>
        </div>
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          From these sessions, we created two primary user personas:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-4 border border-[#ebe5d3] bg-[#fdfcf7] rounded-lg">
            <span className="text-[10px] font-bold text-[#8b7a5f] uppercase tracking-wider">PERSONA A</span>
            <h4 className="text-sm font-extrabold text-ink mt-1">Catalina, Catalog Manager</h4>
            <p className="text-xs text-muted mt-2">
              <strong>Needs:</strong> Quick filtering of thousands of SKUs, bulk-editing gold margin parameters, and immediate visual confirmation that changes have updated across all partner channels.
            </p>
          </div>
          <div className="p-4 border border-[#ebe5d3] bg-[#fdfcf7] rounded-lg">
            <span className="text-[10px] font-bold text-[#8b7a5f] uppercase tracking-wider">PERSONA B</span>
            <h4 className="text-sm font-extrabold text-ink mt-1">Rajesh, Sales Director</h4>
            <p className="text-xs text-muted mt-2">
              <strong>Needs:</strong> Setting distinct pricing markups for diamond qualities (VVS, VS, SI), restricting client coupon codes, and auditing discount overrides.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "information-architecture",
    title: "07. Information Architecture & Navigation",
    shortTitle: "Information Architecture",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          We grouped the platform into 22 distinct modules under a 4-tier structural hierarchy to maintain clean navigation and support granular role permissions.
        </p>
        <div className="p-5 border border-hairline rounded-lg bg-white overflow-x-auto font-mono text-xs">
          <p className="text-[#1e3f20] font-bold mb-2">├── [1] Catalog &amp; Products</p>
          <p className="pl-6 text-muted mb-1">├── Product Selection (Active catalogs)</p>
          <p className="pl-6 text-muted mb-1">├── Browse Collections (Engagement, Wedding, Jewelry)</p>
          <p className="pl-6 text-muted mb-1">├── My Products (Master inventory listing, title/SKU editor)</p>
          <p className="pl-6 text-muted mb-1">├── Collections &amp; Categories</p>
          <p className="pl-6 text-muted mb-3">└── Ready To Ship Products</p>

          <p className="text-[#1e3f20] font-bold mb-2">├── [2] Sales Operations</p>
          <p className="pl-6 text-muted mb-1">├── Order Desk (Resize, Repair &amp; Dispatch lists)</p>
          <p className="pl-6 text-muted mb-1">├── Custom Jewelry (Blueprints &amp; CAD uploads)</p>
          <p className="pl-6 text-muted mb-3">└── Pricing Config. (Markups, promotions, coupons)</p>

          <p className="text-[#1e3f20] font-bold mb-2">├── [3] Store Infrastructure</p>
          <p className="pl-6 text-muted mb-1">├── Website Configurations (Multi-tenant portals)</p>
          <p className="pl-6 text-muted mb-1">├── CMS &amp; SEO Management</p>
          <p className="pl-6 text-muted mb-1">├── Analytics &amp; Reports</p>
          <p className="pl-6 text-muted mb-3">└── Billing &amp; Subscription Ledger</p>

          <p className="text-[#1e3f20] font-bold mb-2">└── [4] Corporate Settings</p>
          <p className="pl-6 text-muted mb-1">├── Employees &amp; Security</p>
          <p className="pl-6 text-muted mb-1">├── Roles &amp; Permissions (RBAC Admin Matrix)</p>
          <p className="pl-6 text-muted">└── Help Center &amp; Documentation</p>
        </div>
      </div>
    ),
  },
  {
    id: "feature-planning",
    title: "08. Feature Planning: Deep Dive Into Modules",
    shortTitle: "Features",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          Let's break down the functional purpose, target users, and key workflows designed for the primary modules:
        </p>

        <div className="space-y-4">
          <div className="p-5 border border-hairline rounded-lg bg-white">
            <h4 className="text-sm font-extrabold text-ink uppercase tracking-wider">Pricing Config &amp; Modifiers</h4>
            <p className="text-xs text-muted mt-1 leading-relaxed">
              <strong>Purpose:</strong> Allows sales managers to apply percentage discount margins dynamically across four component categories: Diamonds, Metals, Est. Stones, and Labor.
            </p>
            <p className="text-xs text-muted mt-1 leading-relaxed">
              <strong>Design Decision:</strong> Implemented drag sliders alongside manual inputs, giving catalog managers a quick way to simulate pricing outcomes before applying them globally.
            </p>
          </div>

          <div className="p-5 border border-hairline rounded-lg bg-white">
            <h4 className="text-sm font-extrabold text-ink uppercase tracking-wider">Order Desk &amp; Resize Workflow</h4>
            <p className="text-xs text-muted mt-1 leading-relaxed">
              <strong>Purpose:</strong> Tracks and manages incoming wholesale orders, with dedicated queues for specialized requests (e.g. Ring Resizing or Repair).
            </p>
            <p className="text-xs text-muted mt-1 leading-relaxed">
              <strong>Design Decision:</strong> Designed a unified ledger layout that separates standard shipping pipelines from the workshop resizing and repair flow, preventing logistical bottlenecks.
            </p>
          </div>

          <div className="p-5 border border-hairline rounded-lg bg-white">
            <h4 className="text-sm font-extrabold text-ink uppercase tracking-wider">Role-Based Access Control (RBAC) Matrix</h4>
            <p className="text-xs text-muted mt-1 leading-relaxed">
              <strong>Purpose:</strong> Protects margins and catalog data by restricting access to financial configurations to authorized users.
            </p>
            <p className="text-xs text-muted mt-1 leading-relaxed">
              <strong>Design Decision:</strong> Built a clear permission grid layout with toggle controls, allowing supervisors to see at a glance what actions a role can perform.
            </p>
          </div>

          <div className="p-5 border border-hairline rounded-lg bg-white">
            <h4 className="text-sm font-extrabold text-ink uppercase tracking-wider">Custom Jewellery &amp; CAD Blueprints</h4>
            <p className="text-xs text-muted mt-1 leading-relaxed">
              <strong>Purpose:</strong> Manages bespoke customer orders that require 3D modeling and custom material allocations.
            </p>
            <p className="text-xs text-muted mt-1 leading-relaxed">
              <strong>Design Decision:</strong> Created a dedicated drag-and-drop CAD blueprint uploader with version history, allowing developers and designers to track design changes throughout implementation.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "ux-process",
    title: "09. UX Process & Flow Analysis",
    shortTitle: "UX Process",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          Designing the workflow for a jewelry ERP requires accounting for complex physical and digital dependencies. A core challenge was mapping the catalog setup workflow to ensure pricing modifications update cleanly across different sales channels.
        </p>
        <div className="p-5 border border-hairline rounded-lg bg-[#fbfcfb] text-center my-6">
          <h4 className="text-xs font-bold text-ink uppercase tracking-wider mb-4">Core Workflow: B2B Price Update &amp; Channel Publishing</h4>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs font-medium">
            <div className="bg-white border border-hairline p-3 rounded shadow-sm">
              <span className="block text-[#1e3f20] font-bold mb-1">1. Update Rates</span>
              <span>Manager enters new gold pricing modifiers.</span>
            </div>
            <div className="bg-white border border-hairline p-3 rounded shadow-sm">
              <span className="block text-[#1e3f20] font-bold mb-1">2. Auto Calculation</span>
              <span>System calculates updated prices for all active SKUs.</span>
            </div>
            <div className="bg-white border border-hairline p-3 rounded shadow-sm">
              <span className="block text-[#1e3f20] font-bold mb-1">3. Review Stage</span>
              <span>Catalog manager audits margins in the review queue.</span>
            </div>
            <div className="bg-white border border-hairline p-3 rounded shadow-sm">
              <span className="block text-[#1e3f20] font-bold mb-1">4. Live Sync</span>
              <span>Updated pricing changes publish to reseller channels.</span>
            </div>
          </div>
        </div>
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          We paid close attention to edge cases. For instance, if an index price update occurs while a reseller has an active invoice session open, the platform locks the checkout session and requests confirmation of the new pricing structure, protecting both margins and customer trust.
        </p>
      </div>
    ),
  },
  {
    id: "design-system",
    title: "10. Scalable Design System & Tokens",
    shortTitle: "Design System",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          To ensure consistency across the admin platform and reseller templates, we built a comprehensive design system featuring custom typography, layout spacing, and UI components.
        </p>

        <div className="grid gap-6 md:grid-cols-3 mt-4">
          <div className="p-4 border border-hairline bg-white rounded-lg">
            <h4 className="text-xs font-bold text-muted uppercase tracking-wider mb-2">Typography</h4>
            <p className="text-xs text-body leading-relaxed">
              <strong>Display:</strong> Bricolage Grotesque (Variable) – Used for page titles and metrics.
            </p>
            <p className="text-xs text-body leading-relaxed mt-1">
              <strong>Body &amp; Tables:</strong> Inter – Tuned for legibility across dense tabular layouts.
            </p>
          </div>

          <div className="p-4 border border-hairline bg-white rounded-lg">
            <h4 className="text-xs font-bold text-muted uppercase tracking-wider mb-2">Color Palette</h4>
            <p className="text-xs text-body leading-relaxed">
              <strong>Primary Brand:</strong> Rausch (#ff385c) and Ink (#222222).
            </p>
            <p className="text-xs text-body leading-relaxed mt-1">
              <strong>B2B Premium Accent:</strong> Forest Green (#1e3f20) and Gold (#d4af37).
            </p>
          </div>

          <div className="p-4 border border-hairline bg-white rounded-lg">
            <h4 className="text-xs font-bold text-muted uppercase tracking-wider mb-2">Layout Spacing</h4>
            <p className="text-xs text-body leading-relaxed">
              Based on an 8px grid system. Layout margins use a max-width limit of 1200px (shell) to keep dashboards readable on wider monitors.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "key-screens",
    title: "11. Key Screens Deep Dive",
    shortTitle: "Key Screens",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          Let's review the design considerations and layout choices implemented across primary interfaces:
        </p>

        <div className="space-y-4">
          <div className="p-5 border border-hairline rounded-lg bg-white">
            <h4 className="text-sm font-extrabold text-ink uppercase tracking-wider">The Pricing Modification Panel</h4>
            <p className="text-xs text-muted mt-1 leading-relaxed">
              This screen provides a centralized dashboard for managing margins and coupons. By combining catalog selectors with inline discount sliders, managers can adjust diamond, metal, and labor rates in one place, seeing updated wholesale margins immediately before publishing.
            </p>
          </div>

          <div className="p-5 border border-hairline rounded-lg bg-white">
            <h4 className="text-sm font-extrabold text-ink uppercase tracking-wider">The Order Desk Workspace</h4>
            <p className="text-xs text-muted mt-1 leading-relaxed">
              This module organizes high-volume ordering pipelines into clear, manageable queues. By presenting key SKU information, pricing differences, and resize logs in a simplified tabular layout, fulfillment staff can confirm details and approve dispatches without layout fatigue.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "collaboration",
    title: "12. Developer Collaboration & Handoff",
    shortTitle: "Collaboration",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          Product design does not end with high-fidelity visual mockups. Collaborating with engineers is essential to align the proposed user experience with backend architecture limitations.
        </p>
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          We established bi-weekly backlog grooming sessions with developers. This helped ensure that the layout choices designed in Figma (such as real-time pricing updates) mapped directly to API performance limits. 
          By standardizing component naming conventions and documenting custom tokens in Figma Dev Mode, we reduced visual QA discrepancies and speeded up implementation.
        </p>
      </div>
    ),
  },
  {
    id: "challenges-faced",
    title: "13. Architectural Challenges Faced",
    shortTitle: "Challenges",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          Designing the platform required addressing complex technical and layout constraints, including:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[15px] text-body">
          <li>
            <strong>Tabular Data Density:</strong> Displaying detailed material properties (diamond counts, metal grades) in tables without creating horizontal scroll issues or cognitive fatigue.
          </li>
          <li>
            <strong>Live Pricing Performance:</strong> recalculating thousands of active SKU prices instantly without causing lag in the browser.
          </li>
          <li>
            <strong>Multi-Tenant Data Security:</strong> Restricting access to sensitive financial metrics to authorized catalog and store managers.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "solutions",
    title: "14. UX Solutions & Design Interventions",
    shortTitle: "Solutions",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          We resolved these constraints through systematic design interventions:
        </p>
        <div className="space-y-4 mt-4">
          <div className="p-4 border border-hairline bg-white rounded-lg">
            <h4 className="text-xs font-bold text-ink uppercase tracking-wider">Dynamic Layout Organization</h4>
            <p className="text-xs text-muted mt-1 leading-relaxed">
              We grouped product properties into structured, expandable table sections and cards. This allowed staff to focus on primary metrics (sku numbers, total prices) while keeping technical spec sheets easily accessible.
            </p>
          </div>

          <div className="p-4 border border-hairline bg-white rounded-lg">
            <h4 className="text-xs font-bold text-ink uppercase tracking-wider">Client-Side Calculations</h4>
            <p className="text-xs text-muted mt-1 leading-relaxed">
              We shifted formula calculations to client-side helpers. This allows the pricing preview cards to update margins immediately when users adjust the discount sliders, without waiting for server round-trips.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "impact",
    title: "15. Business Impact & Efficiency Metrics",
    shortTitle: "Impact",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          Three months after deployment, the Elova Super Admin ERP yielded significant operational improvements across wholesale channels:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-5 border border-hairline rounded-lg bg-[#fcfaf2] text-center">
            <span className="block font-display text-4xl font-extrabold text-[#1e3f20]">0%</span>
            <span className="block text-xs font-bold text-ink uppercase tracking-wider mt-2">Pricing Errors</span>
            <p className="text-[10px] text-muted mt-1">Automatic gold index calculation eliminated manual invoice discrepancies.</p>
          </div>

          <div className="p-5 border border-hairline rounded-lg bg-[#fcfaf2] text-center">
            <span className="block font-display text-4xl font-extrabold text-[#1e3f20]">40%</span>
            <span className="block text-xs font-bold text-ink uppercase tracking-wider mt-2">Fulfillment Speedup</span>
            <p className="text-[10px] text-muted mt-1">Dedicated workshop queues helped staff process resizing and repair dispatches faster.</p>
          </div>

          <div className="p-5 border border-hairline rounded-lg bg-[#fcfaf2] text-center">
            <span className="block font-display text-4xl font-extrabold text-[#1e3f20]">2 hrs</span>
            <span className="block text-xs font-bold text-ink uppercase tracking-wider mt-2">Saved per Update</span>
            <p className="text-[10px] text-muted mt-1">Centralized catalog updates publish to all reseller storefronts immediately.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "key-learnings",
    title: "16. Key Learnings & Takeaways",
    shortTitle: "Key Learnings",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          Designing this system taught me valuable lessons about enterprise software design:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[15px] text-body">
          <li>
            <strong>Design Systems Scale Workflows:</strong> Creating a unified component library did not just ensure visual consistency; it drastically reduced development cycles for new modules.
          </li>
          <li>
            <strong>Prioritize System Performance:</strong> Designing premium layouts is only half the battle. In data-dense applications, layout choices must align with underlying database constraints to prevent lags.
          </li>
          <li>
            <strong>Contextual Research is Essential:</strong> Spending time on the warehouse floor helped uncover user needs that stakeholders had missed, leading to key improvements in the catalog layout.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "reflection",
    title: "17. Reflection & Future Roadmap",
    shortTitle: "Reflection",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          Reflecting on the project, the primary improvement I would explore is optimized mobile layouts. While corporate catalog managers rely on large desktop screens, inventory workers on the warehouse floor require quick access to details on hand-held devices. Designing dedicated mobile screens for catalog scanning is a key focus on the product roadmap.
        </p>
      </div>
    ),
  },
];
