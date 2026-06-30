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
        <div className="bg-gradient-to-r from-rausch/10 to-transparent p-6 rounded-xl border border-rausch/20 mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-rausch-active mb-2">Project Classification</p>
          <p className="text-xl sm:text-2xl font-serif font-bold text-ink">
            Store Admin Dashboard: A Multi-Tenant SaaS ERP Hub enabling individual B2B/B2C jewelry retail partners to manage their inventory, orders, and site configurations.
          </p>
        </div>
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          In a modern retail network, individual merchants require a dashboard that balances localized control with master inventory sync. For B2B jewelry partners, this is especially important: they need to import diamond inventory, adjust retail prices, configure local store themes, and process customer checkouts without manual database management.
        </p>
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          This case study reviews the design lifecycle of the **Store Admin Dashboard**. Working closely with retail partners and frontend developers, I led the UX strategy and UI layout design. We built a platform that allows store managers to launch, configure, and run their jewelry e-commerce sites with zero programming experience.
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
          The Store Admin Dashboard is built to simplify retail management for jewelry store owners. Prior to this design intervention, merchants spent days manually syncing products, typing invoice lists, and configuring settings. Setting up a new store took an average of 8 days and required significant support assistance.
        </p>
        <div className="border-l-4 border-rausch pl-4 italic my-6 text-[#4a4235] text-[15px]">
          "We wanted a dashboard that made running a jewelry site as simple as running a standard Shopify store, but with B2B wholesale calculations built in. The new interface cut our onboarding time in half."
          <span className="block mt-2 font-semibold text-xs not-italic text-muted">— Retail Partner, Mumbai</span>
        </div>
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          My role was to design a clean, modular administration interface. By structuring the workflow into logical modules, designing a step-by-step onboarding wizard, and creating simple permission controls, we reduced setup time and simplified daily operations.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <div className="bg-rausch/5 p-4 rounded-lg border border-rausch/10 text-center">
            <span className="block font-display text-3xl font-extrabold text-rausch-active">2 Days</span>
            <span className="text-xs text-muted font-medium uppercase mt-1 block">Setup Onboarding Time</span>
          </div>
          <div className="bg-rausch/5 p-4 rounded-lg border border-rausch/10 text-center">
            <span className="block font-display text-3xl font-extrabold text-rausch-active">0%</span>
            <span className="text-xs text-muted font-medium uppercase mt-1 block">RBAC Lockout Errors</span>
          </div>
          <div className="bg-rausch/5 p-4 rounded-lg border border-rausch/10 text-center">
            <span className="block font-display text-3xl font-extrabold text-rausch-active">100%</span>
            <span className="text-xs text-muted font-medium uppercase mt-1 block">Responsive Controls</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "business-context",
    title: "03. Business Context",
    shortTitle: "Business Context",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          The Store Admin acts as a localized storefront controller connected to the parent Super Admin ecosystem.
          The relationship between these systems governs the daily operational workflows:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[15px] text-body">
          <li><strong>Super Admin (Publisher):</strong> Controls the master supply chain, adds new raw jewelry items, and manages global index changes.</li>
          <li><strong>Store Admin (Merchant):</strong> Imports jewelry items, sets local markup percentages, configs domain addresses, and handles end-customer orders.</li>
          <li><strong>Store Tenant (Customer):</strong> Enjoys a localized, fast shopping interface displaying accurate retail prices and real-time stock levels.</li>
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
          Merchants faced several challenges that affected overall productivity and store management:
        </p>
        <div className="grid gap-6 md:grid-cols-2 mt-4">
          <div className="p-5 border border-hairline rounded-lg bg-white shadow-sm">
            <h4 className="font-bold text-ink text-sm uppercase tracking-wide mb-2 text-rausch">Catalog Import Fatigue</h4>
            <p className="text-xs text-muted leading-relaxed">
              Wholesale jewelry catalogs contain hundreds of items. Sorting through carats, metal purities, and settings to build a store catalog was time-consuming and confusing.
            </p>
          </div>
          <div className="p-5 border border-hairline rounded-lg bg-white shadow-sm">
            <h4 className="font-bold text-ink text-sm uppercase tracking-wide mb-2 text-rausch">Role Security Confusion</h4>
            <p className="text-xs text-muted leading-relaxed">
              Shop owners struggled to configure employee access. Without simple role management, staff had access to sensitive billing settings, creating operational risk.
            </p>
          </div>
          <div className="p-5 border border-hairline rounded-lg bg-white shadow-sm">
            <h4 className="font-bold text-ink text-sm uppercase tracking-wide mb-2 text-rausch">CMS &amp; Design Hurdles</h4>
            <p className="text-xs text-muted leading-relaxed">
              Updating landing page banners or menus required HTML support. Store owners couldn't run campaigns independently, losing seasonal sales opportunities.
            </p>
          </div>
          <div className="p-5 border border-hairline rounded-lg bg-white shadow-sm">
            <h4 className="font-bold text-ink text-sm uppercase tracking-wide mb-2 text-rausch">Disconnected Orders</h4>
            <p className="text-xs text-muted leading-relaxed">
              Order processing, resizing details, and logistics were handled separately. Fulfillment teams faced significant friction tracking order updates manually.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "design-objectives",
    title: "05. Design Objectives",
    shortTitle: "Design Objectives",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          We established three core design objectives to guide the dashboard revamp:
        </p>
        <div className="space-y-4 mt-4">
          <div className="flex gap-4 items-start">
            <span className="h-6 w-6 rounded-full bg-rausch/10 text-rausch-active font-bold text-xs flex items-center justify-center shrink-0">1</span>
            <div>
              <h4 className="text-sm font-bold text-ink uppercase tracking-wide">Accelerate Merchant Setup</h4>
              <p className="text-xs text-muted mt-0.5">Design a step-by-step onboarding guide that helps shop owners bind domains, configure payments, and select products quickly.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="h-6 w-6 rounded-full bg-rausch/10 text-rausch-active font-bold text-xs flex items-center justify-center shrink-0">2</span>
            <div>
              <h4 className="text-sm font-bold text-ink uppercase tracking-wide">Granular Role Security</h4>
              <p className="text-xs text-muted mt-0.5">Build a visual permissions configurator that simplifies role-based access management for employees, cashiers, and managers.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="h-6 w-6 rounded-full bg-rausch/10 text-rausch-active font-bold text-xs flex items-center justify-center shrink-0">3</span>
            <div>
              <h4 className="text-sm font-bold text-ink uppercase tracking-wide">Intuitive Content Management</h4>
              <p className="text-xs text-muted mt-0.5">Design a visual builder for menus, promotional banners, and landing pages to eliminate the need for custom HTML tweaks.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "user-research",
    title: "06. User Research & Personas",
    shortTitle: "Research",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          We interviewed 10 jewelry shop owners and conducted usability testing on legacy ERP systems. This helped us understand daily pain points and map the merchant journey from setup to order processing.
        </p>
        <div className="bg-soft p-5 rounded-lg border border-hairline my-6">
          <h4 className="text-xs font-bold text-ink uppercase tracking-wider mb-2">Key Research Insight: The RBAC Lockout</h4>
          <p className="text-xs text-muted leading-relaxed">
            Many store owners reported locking out cashiers or accidentally giving them access to cost prices due to confusing security panels. This validated the need for an intuitive, visual permission toggle panel.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-4 border border-rausch/20 bg-[#fffbfa] rounded-lg">
            <span className="text-[10px] font-bold text-rausch-active uppercase tracking-wider">PERSONA A</span>
            <h4 className="text-sm font-extrabold text-ink mt-1">Meera, Boutique Owner</h4>
            <p className="text-xs text-muted mt-2">
              <strong>Needs:</strong> Quickly publishing seasonal promotional collections, updating pricing markups, and managing shop settings without coding knowledge.
            </p>
          </div>
          <div className="p-4 border border-rausch/20 bg-[#fffbfa] rounded-lg">
            <span className="text-[10px] font-bold text-rausch-active uppercase tracking-wider">PERSONA B</span>
            <h4 className="text-sm font-extrabold text-ink mt-1">Aarav, Fulfillment Manager</h4>
            <p className="text-xs text-muted mt-2">
              <strong>Needs:</strong> Tracking resize requests, verifying customer payment captures, printing shipping labels, and updating order dispatch statuses.
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
          We structured the dashboard layout to separate daily operations (Orders, Catalog) from configuration tasks (Settings, Customization) to keep navigation clean and focused.
        </p>
        <div className="p-5 border border-hairline rounded-lg bg-white overflow-x-auto font-mono text-xs">
          <p className="text-rausch-active font-bold mb-2">├── [1] Store Workspace</p>
          <p className="pl-6 text-muted mb-1">├── Dashboard (Sales, Active alerts, Quick actions)</p>
          <p className="pl-6 text-muted mb-1">├── Product Management (Local catalogs)</p>
          <p className="pl-6 text-muted mb-1">├── Inventory &amp; Stock Levels</p>
          <p className="pl-6 text-muted mb-3">└── Orders Desk (Resizing &amp; Fulfillment logs)</p>

          <p className="text-rausch-active font-bold mb-2">├── [2] Store Customization (CMS)</p>
          <p className="pl-6 text-muted mb-1">├── CMS Pages (About, localized policies)</p>
          <p className="pl-6 text-muted mb-1">├── Website Builder (Theme elements, layout configs)</p>
          <p className="pl-6 text-muted mb-1">├── Menus &amp; Custom Navigation</p>
          <p className="pl-6 text-muted mb-3">└── Banners &amp; Promos</p>

          <p className="text-rausch-active font-bold mb-2">├── [3] Marketing &amp; Sales</p>
          <p className="pl-6 text-muted mb-1">├── Promotions &amp; Coupons</p>
          <p className="pl-6 text-muted mb-1">├── SEO Configurations</p>
          <p className="pl-6 text-muted mb-3">└── Analytics &amp; Reports</p>

          <p className="text-rausch-active font-bold mb-2">└── [4] System Settings</p>
          <p className="pl-6 text-muted mb-1">├── Profile (Contact details)</p>
          <p className="pl-6 text-muted mb-1">├── Shipping &amp; Payment configuration</p>
          <p className="pl-6 text-muted">└── Security Roles (RBAC toggles)</p>
        </div>
      </div>
    ),
  },
  {
    id: "core-modules",
    title: "08. Core Modules Deep Dive",
    shortTitle: "Core Modules",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          Let's examine the design decisions, target workflows, and user objectives for the core modules:
        </p>

        <div className="space-y-4">
          <div className="p-5 border border-hairline rounded-lg bg-white">
            <h4 className="text-sm font-extrabold text-ink uppercase tracking-wider">The Storefront Builder</h4>
            <p className="text-xs text-muted mt-1 leading-relaxed">
              Allows merchants to customize banners, theme colors, and layout structures without custom coding. The simplified drag-and-drop system makes it easy to update shop layouts for seasonal promotions.
            </p>
          </div>

          <div className="p-5 border border-hairline rounded-lg bg-white">
            <h4 className="text-sm font-extrabold text-ink uppercase tracking-wider">Role Security Dashboard</h4>
            <p className="text-xs text-muted mt-1 leading-relaxed">
              Simplifies employee access control for shop owners. The visual toggle matrix helps prevent configuration errors, keeping sensitive settings protected while granting staff access to necessary catalog tools.
            </p>
          </div>

          <div className="p-5 border border-hairline rounded-lg bg-white">
            <h4 className="text-sm font-extrabold text-ink uppercase tracking-wider">Orders &amp; Customer Ledger</h4>
            <p className="text-xs text-muted mt-1 leading-relaxed">
              Organizes customer details, purchase histories, and fulfillment logs into one dashboard. This centralized view helps support teams track and resolve resize requests and order updates quickly.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "ux-process",
    title: "09. UX Process & Onboarding Flows",
    shortTitle: "UX Process",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          We focused on optimizing the onboarding experience to reduce setup friction. The step-by-step onboarding wizard guides merchants through the initial configurations logically.
        </p>
        <div className="p-5 border border-hairline rounded-lg bg-[#fbfcfb] text-center my-6">
          <h4 className="text-xs font-bold text-ink uppercase tracking-wider mb-4">Onboarding Flow: From Registration to Launch</h4>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs font-medium">
            <div className="bg-white border border-hairline p-3 rounded shadow-sm">
              <span className="block text-rausch font-bold mb-1">1. Profile &amp; Domain</span>
              <span>Input details and link your store domain.</span>
            </div>
            <div className="bg-white border border-hairline p-3 rounded shadow-sm">
              <span className="block text-rausch font-bold mb-1">2. Gateway Setup</span>
              <span>Enable payment methods and local shipping zones.</span>
            </div>
            <div className="bg-white border border-hairline p-3 rounded shadow-sm">
              <span className="block text-rausch font-bold mb-1">3. Catalog Import</span>
              <span>Select products and configure retail markups.</span>
            </div>
            <div className="bg-white border border-hairline p-3 rounded shadow-sm">
              <span className="block text-rausch font-bold mb-1">4. Theme Customization</span>
              <span>Update layout colors, banners, and hit launch.</span>
            </div>
          </div>
        </div>
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          By utilizing bulk actions, smart filters, and progressive disclosure, we kept the workspace clean and easy to navigate, reducing the learning curve for store owners.
        </p>
      </div>
    ),
  },
  {
    id: "design-system",
    title: "10. Design System & Component Library",
    shortTitle: "Design System",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          The Store Admin dashboard utilizes the same core layout components, form elements, and typography as the portfolio design system to maintain visual consistency.
        </p>

        <div className="grid gap-6 md:grid-cols-3 mt-4">
          <div className="p-4 border border-hairline bg-white rounded-lg">
            <h4 className="text-xs font-bold text-muted uppercase tracking-wider mb-2">Typography</h4>
            <p className="text-xs text-body leading-relaxed">
              <strong>Display:</strong> Bricolage Grotesque (Variable) – Used for dashboards and main sections.
            </p>
            <p className="text-xs text-body leading-relaxed mt-1">
              <strong>Sans:</strong> Inter – Used for navigation lists and tabular data grids.
            </p>
          </div>

          <div className="p-4 border border-hairline bg-white rounded-lg">
            <h4 className="text-xs font-bold text-muted uppercase tracking-wider mb-2">Color Palette</h4>
            <p className="text-xs text-body leading-relaxed">
              <strong>Primary Highlight:</strong> Rausch (#ff385c) active indicators.
            </p>
            <p className="text-xs text-body leading-relaxed mt-1">
              <strong>Surfaces:</strong> Clean White (#ffffff) and Soft grey (#f7f7f7).
            </p>
          </div>

          <div className="p-4 border border-hairline bg-white rounded-lg">
            <h4 className="text-xs font-bold text-muted uppercase tracking-wider mb-2">Layout Spacing</h4>
            <p className="text-xs text-body leading-relaxed">
              Based on the 8px grid system. Layout elements are structured to adapt smoothly to different monitor sizes.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "screen-walkthroughs",
    title: "11. Screen Walkthroughs",
    shortTitle: "Walkthroughs",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          Let's review the layout choices and usability considerations for two primary screens:
        </p>

        <div className="space-y-4">
          <div className="p-5 border border-hairline rounded-lg bg-white">
            <h4 className="text-sm font-extrabold text-ink uppercase tracking-wider">The Store Onboarding Wizard</h4>
            <p className="text-xs text-muted mt-1 leading-relaxed">
              We replaced long setup sheets with a clean step-by-step assistant. By grouping configurations into four logical stages and saving progress automatically, we reduced drop-offs and accelerated store setups.
            </p>
          </div>

          <div className="p-5 border border-hairline rounded-lg bg-white">
            <h4 className="text-sm font-extrabold text-ink uppercase tracking-wider">The Security Configurator</h4>
            <p className="text-xs text-muted mt-1 leading-relaxed">
              This screen provides simple, visual access controls. Using clear toggles for each employee role, shop owners can configure permissions without layout confusion.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "collaboration",
    title: "12. Developer Collaboration & Hand-off",
    shortTitle: "Collaboration",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          Maintaining close communication with developers throughout implementation helped align layout designs with technical requirements.
        </p>
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          By documenting design tokens in Figma Dev Mode and holding regular grooming syncs, we resolved layout constraints early. This collaboration helped ensure that interactive dashboard elements load fast and work reliably.
        </p>
      </div>
    ),
  },
  {
    id: "challenges",
    title: "13. Layout & Usability Challenges",
    shortTitle: "Challenges",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          Designing the dashboard required addressing several layout and workflow challenges, including:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[15px] text-body">
          <li>
            <strong>Simplify Complex Data:</strong> Displaying product specs, stock levels, and order histories clearly without overwhelming the user.
          </li>
          <li>
            <strong>Optimize Step-by-Step Setups:</strong> Organizing long configuration tasks into intuitive workflows.
          </li>
          <li>
            <strong>Responsive Layout Grid:</strong> Ensuring tables, grids, and settings panels remain fully functional on smaller screen sizes.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "solutions",
    title: "14. UX-Driven Design Solutions",
    shortTitle: "Solutions",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          We addressed these challenges through structured layout design:
        </p>
        <div className="space-y-4 mt-4">
          <div className="p-4 border border-hairline bg-white rounded-lg">
            <h4 className="text-xs font-bold text-ink uppercase tracking-wider">Progressive Disclosure</h4>
            <p className="text-xs text-muted mt-1 leading-relaxed">
              We hid technical product details under optional tabs. This keeps the primary listing clean and easy to scan, while keeping specifications easily accessible.
            </p>
          </div>

          <div className="p-4 border border-hairline bg-white rounded-lg">
            <h4 className="text-xs font-bold text-ink uppercase tracking-wider">Simplified Setup Wizard</h4>
            <p className="text-xs text-muted mt-1 leading-relaxed">
              We replaced lengthy settings panels with a guided setup process. Progress is saved automatically, allowing merchants to pause and resume setup at their convenience.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "outcomes",
    title: "15. Outcomes & Metrics",
    shortTitle: "Outcomes",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          After deployment, the updated Store Admin Dashboard achieved significant improvements in usability and store management:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-5 border border-hairline rounded-lg bg-rausch/5 text-center">
            <span className="block font-display text-4xl font-extrabold text-rausch-active">2 Days</span>
            <span className="block text-xs font-bold text-ink uppercase tracking-wider mt-2">Setup Time</span>
            <p className="text-[10px] text-muted mt-1">Average store onboarding setup time dropped from 8 days to just 2 days.</p>
          </div>

          <div className="p-5 border border-hairline rounded-lg bg-rausch/5 text-center">
            <span className="block font-display text-4xl font-extrabold text-rausch-active">0%</span>
            <span className="block text-xs font-bold text-ink uppercase tracking-wider mt-2">Role Lockouts</span>
            <p className="text-[10px] text-muted mt-1">Simple, visual toggles eliminated role permission lockout errors.</p>
          </div>

          <div className="p-5 border border-hairline rounded-lg bg-rausch/5 text-center">
            <span className="block font-display text-4xl font-extrabold text-rausch-active">-35%</span>
            <span className="block text-xs font-bold text-ink uppercase tracking-wider mt-2">Support Tickets</span>
            <p className="text-[10px] text-muted mt-1">Visual website customization tools reduced HTML/CSS layout support requests.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "key-learnings",
    title: "16. Key Takeaways",
    shortTitle: "Key Takeaways",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          This project reinforced the importance of tenant-focused design in SaaS portals:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[15px] text-body">
          <li>
            <strong>Onboarding Friction Matters:</strong> A structured onboarding wizard is crucial to keep new merchants engaged and reduce setup drop-offs.
          </li>
          <li>
            <strong>Design for Different Skill Levels:</strong> Standard configurations should remain beginner-friendly, while keeping advanced layout settings available for experienced users.
          </li>
          <li>
            <strong>Systematic Navigation:</strong> Grouping dashboard controls into logical operational categories helps operators find necessary tools quickly.
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
          If given the opportunity to redesign today, I would focus on introducing automated layout suggestions. Adding AI-driven recommendation blocks could help store owners optimize product displays and banners based on sales trends, further improving overall store conversions.
        </p>
      </div>
    ),
  },
];
