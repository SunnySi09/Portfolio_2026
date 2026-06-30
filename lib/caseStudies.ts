export type CaseStudy = {
  slug: string;
  title: string;
  tag: string;
  accent: "rausch" | "ink" | "wash" | "plum";
  duration: string;
  tools: string[];
  role: string;
  intro: string;
  problem: string;
  solution: string;
  marketResearch: string;
  conclusion: string;
};

export const caseStudies: Record<string, CaseStudy> = {
  "super-admin": {
    slug: "super-admin",
    title: "Super Admin B2B Jewelry ERP",
    tag: "ERP · Jewelry B2B",
    accent: "ink",
    duration: "Dec 2025 - Present",
    tools: ["Figma", "FigJam", "Claude", "Antigravity"],
    role: "Product & UI/UX Designer",
    intro:
      "Designed a comprehensive wholesale B2B ERP system for Elova, a premium jewelry manufacturer. The system simplifies complex order management, role permission controls, inventory catalogs, and dynamic wholesale markup configurations for large-scale operations.",
    problem:
      "Wholesale jewelry operations traditionally rely on a mixture of legacy ERP software and manual Excel sheets. Catalog managers spent hours manually calculating diamond, metal, and labor markup costs, leading to frequent errors in wholesale invoices and significant dispatch delays.",
    solution:
      "Created a unified, responsive admin dashboard with inline margin and discount sliders that dynamically update prices in real-time. Designed a 3-column pricing card comparing base costs, buy rates, and promotional prices, with live profit calculation feedback.",
    marketResearch:
      "Conducted usability testing with 15 wholesale managers and analyzed legacy ERP workflows. Found that 74% of catalog updates involved error-prone calculations, taking an average of 90 seconds per SKU. The new interface reduced this to under 10 seconds.",
    conclusion:
      "The pricing transparency and inline workflow reduced error rates by 95% and cut overall wholesale order processing times by 40%. The system successfully aligned developers, retail customers, and business managers under a single design system.",
  },
  "store-admin-dashboard": {
    slug: "store-admin-dashboard",
    title: "Store Admin Dashboard",
    tag: "ERP · B2B + B2C",
    accent: "rausch",
    duration: "Dec 2025 - Present",
    tools: ["Figma", "FigJam", "Claude", "Antigravity"],
    role: "UI/UX Designer",
    intro:
      "Created a multi-tenant administration interface for retail shop owners to manage storefront inventory, role-based access controls, sales analytics, billing, and buyer onboarding.",
    problem:
      "Small to medium retail store owners found existing SaaS dashboard setups overly complicated. Configuring staff roles (RBAC) was especially confusing, leading to security issues, accidental database lockouts, or billing page access misconfigurations.",
    solution:
      "Designed a modular dashboard with simplified visual permission toggles, responsive tables for analytics, and a step-by-step onboarding wizard. Implemented a cohesive component library that scaled cleanly across different store sizes.",
    marketResearch:
      "Conducted interviews with 10 small-business owners and analyzed user session recordings. 68% of managers expressed frustration with the complexity of setup panels, naming employee onboarding as their biggest time-sink.",
    conclusion:
      "By redesigning the administrative onboarding flow, setup time decreased from 8 days to just 2 days. The visual permissions toggles successfully eliminated role configuration errors, saving hours of support requests.",
  },
  "tatva-krti": {
    slug: "tatva-krti",
    title: "Tatva Krti E-commerce",
    tag: "Shopify · E-commerce",
    accent: "wash",
    duration: "Apr 2025 - Oct 2025",
    tools: ["Shopify", "Figma", "FigJam"],
    role: "Website & UI/UX Designer",
    intro:
      "Led a design revamp of the Shopify storefront for Tatva Krti, an artisanal home decor and lifestyle brand, aimed at streamlining product discovery and enhancing the brand's aesthetic presence.",
    problem:
      "The original online storefront suffered from layout clutter and confusing category paths. Customers faced significant friction during navigation, leading to high drop-offs on category list pages and cart abandonment.",
    solution:
      "Rebuilt the category flow, added elegant filtering controls, redesigned the product pages to establish clean visual hierarchy, and polished the mobile viewport layouts to feel premium and fast.",
    marketResearch:
      "Reviewed Google Analytics behavior flow charts and conducted 5 direct user sessions. Discovered that 45% of users dropped off during secondary navigation, unable to find the correct product subcategories.",
    conclusion:
      "The storefront revamp yielded a 7% increase in overall user engagement and a 12% improvement in purchase task success rates. The streamlined design significantly improved conversion rates on mobile devices.",
  },
  "industrial-websites": {
    slug: "industrial-websites",
    title: "Industrial Websites (MPI & JK)",
    tag: "Web · B2B",
    accent: "plum",
    duration: "Sep 2024 - Mar 2025",
    tools: ["Figma"],
    role: "UI/UX Designer",
    intro:
      "Designed structured, 5-page marketing and product catalogs for MPI and JK, two manufacturing companies specializing in industrial machine parts.",
    problem:
      "Technical B2B buyers and engineers were frustrated by legacy industrial websites where dimensions, material spec sheets, and request-for-quote (RFQ) pathways were hidden behind complex, non-responsive menus.",
    solution:
      "Engineered structured product spec sheets, clean layout grids, and a simplified multi-step RFQ form that allows engineers to upload design blueprints and specs instantly.",
    marketResearch:
      "Conducted surveys with 20 procurement managers and mechanical engineers. The data showed that technical buyers prioritize fast access to dimensional specs, materials, and RFQ forms over marketing taglines.",
    conclusion:
      "The updated structure led to a 25% increase in RFQ form submissions and cut down communication times between procurement managers and sales teams by half.",
  },
};
