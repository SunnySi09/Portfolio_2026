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
        <div className="bg-gradient-to-r from-plum/10 to-transparent p-6 rounded-xl border border-plum/20 mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-plum mb-2">Project Classification</p>
          <p className="text-xl sm:text-2xl font-serif font-bold text-ink">
            JK Velvet Corporate B2B Platform: Rebuilding the digital presence, specifications catalog, and RFQ channel for a premium velvet manufacturer.
          </p>
        </div>
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          Surat-based JK Velvet is a leading manufacturer of premium velvet fabrics, supplying materials globally for luxury jewelry packaging, footwear, fashion, and home decor. 
          While they possess extensive manufacturing expertise and scale, their original corporate website did not reflect their capabilities.
        </p>
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          As the lead UI/UX Designer and Web Designer, I took ownership of redesigning the complete digital experience. 
          We restructured the information architecture, designed technical specification sheets, and created a responsive Request-for-Quote (RFQ) flow to drive B2B inquiries.
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
          The primary objective of the JK Velvet redesign was to replace an outdated corporate website with a modern B2B platform that builds trust and generates leads. 
          The legacy site lacked clear technical details and certifications, making it difficult for procurement managers to verify manufacturing capabilities.
        </p>
        <div className="border-l-4 border-plum pl-4 italic my-6 text-[#4a4235] text-[15px]">
          "Our original site looked outdated and didn't represent our manufacturing scale. The redesigned platform showcases our specs and certifications clearly, making it easier to connect with corporate buyers."
          <span className="block mt-2 font-semibold text-xs not-italic text-muted">— Director, JK Velvet</span>
        </div>
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          My role was to lead the product design, focusing on content hierarchy and B2B workflow optimization. 
          By designing a structured specification guide and a simplified RFQ form, we helped drive a **25% increase in B2B sales inquiries** post-launch.
        </p>
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
          JK Velvet has over 20 years of manufacturing experience, operating a state-of-the-art weaving and processing facility.
          The company serves three primary B2B segments:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[15px] text-body">
          <li><strong>Packaging Manufacturers:</strong> High-density backing velvet used to line jewelry cases, luxury watch boxes, and premium displays.</li>
          <li><strong>Fashion &amp; Footwear Brands:</strong> Premium textures and custom-dyed velvets for apparel, designer shoes, and fashion accessories.</li>
          <li><strong>Home Decor Suppliers:</strong> Durable, fire-retardant velvet fabrics for upholstery, curtains, and high-end cushions.</li>
        </ul>
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          Operating on a B2B wholesale model, the company prioritizes bulk custom orders and sample swatch distribution.
        </p>
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
          The original digital presence limited B2B sales and customer trust:
        </p>
        <div className="grid gap-6 md:grid-cols-2 mt-4">
          <div className="p-5 border border-hairline rounded-lg bg-white shadow-sm">
            <h4 className="font-bold text-ink text-sm uppercase tracking-wide mb-2 text-plum">Weak Visual Identity</h4>
            <p className="text-xs text-muted leading-relaxed">
              The legacy site styling did not reflect the quality and premium nature of the fabrics, failing to make a strong impression on corporate buyers.
            </p>
          </div>
          <div className="p-5 border border-hairline rounded-lg bg-white shadow-sm">
            <h4 className="font-bold text-ink text-sm uppercase tracking-wide mb-2 text-plum">Hidden Technical Specifications</h4>
            <p className="text-xs text-muted leading-relaxed">
              Fabric thickness, width, density, and roll lengths were hidden in text paragraphs. Procurement managers struggled to verify compatibility quickly.
            </p>
          </div>
          <div className="p-5 border border-hairline rounded-lg bg-white shadow-sm">
            <h4 className="font-bold text-ink text-sm uppercase tracking-wide mb-2 text-plum">Lack of Trust Signals</h4>
            <p className="text-xs text-muted leading-relaxed">
              No certifications, manufacturing facility photos, or quality standards were visible, causing friction for first-time visitors looking to place large B2B orders.
            </p>
          </div>
          <div className="p-5 border border-hairline rounded-lg bg-white shadow-sm">
            <h4 className="font-bold text-ink text-sm uppercase tracking-wide mb-2 text-plum">No Structured RFQ Flow</h4>
            <p className="text-xs text-muted leading-relaxed">
              To request pricing, buyers had to copy an email address from the footer and compile specifications manually, resulting in a low lead conversion rate.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "design-objectives",
    title: "05. Design Objectives",
    shortTitle: "Objectives",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          We established three core objectives to guide the website redesign:
        </p>
        <div className="space-y-4 mt-4">
          <div className="flex gap-4 items-start">
            <span className="h-6 w-6 rounded-full bg-plum/10 text-plum font-bold text-xs flex items-center justify-center shrink-0">1</span>
            <div>
              <h4 className="text-sm font-bold text-ink uppercase tracking-wide">Establish Professional Credibility</h4>
              <p className="text-xs text-muted mt-0.5">Showcase years of experience, ISO quality certifications, testing setups, and manufacturing infrastructure clearly across core pages.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="h-6 w-6 rounded-full bg-plum/10 text-plum font-bold text-xs flex items-center justify-center shrink-0">2</span>
            <div>
              <h4 className="text-sm font-bold text-ink uppercase tracking-wide">Optimize Product Specifications Layout</h4>
              <p className="text-xs text-muted mt-0.5">Design a clean specification grid and application-based navigation to help buyers check material specifications and widths easily.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="h-6 w-6 rounded-full bg-plum/10 text-plum font-bold text-xs flex items-center justify-center shrink-0">3</span>
            <div>
              <h4 className="text-sm font-bold text-ink uppercase tracking-wide">Design a Simplified RFQ Flow</h4>
              <p className="text-xs text-muted mt-0.5">Build a responsive Request-for-Quote (RFQ) form with structured input fields to capture product codes, roll volumes, and specifications quickly.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "research-process",
    title: "06. Research Process & User Benchmarking",
    shortTitle: "Research",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          We analyzed standard B2B manufacturing website structures and interviewed five procurement managers.
          Our research identified that technical buyers seek specification sheets, compliance details, and fast quote responses.
        </p>
        <div className="bg-soft p-5 rounded-lg border border-hairline my-6">
          <h4 className="text-xs font-bold text-ink uppercase tracking-wider mb-2">Key Research Insight: Specification Priority</h4>
          <p className="text-xs text-muted leading-relaxed">
            Data showed that 80% of technical buyers browse site pages to verify roll widths, density parameters, and backing materials. If these details are missing, they bounce to competitors instead of filling out contact forms.
          </p>
        </div>
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          This insight helped us prioritize data-dense spec grids over generic marketing slogans.
        </p>
      </div>
    ),
  },
  {
    id: "target-users",
    title: "07. Target Users & Personas",
    shortTitle: "Target Users",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          We created three target user personas to guide our content and layout strategy:
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-4 border border-plum/20 bg-white rounded-lg">
            <span className="text-[10px] font-bold text-plum uppercase tracking-wider">PERSONA A</span>
            <h4 className="text-sm font-extrabold text-ink mt-1">Harish, Jewelry Box Maker</h4>
            <p className="text-xs text-muted mt-2">
              <strong>Needs:</strong> High-density backing velvet. Requires exact roll widths, color matching sheets, and quality compliance proofs.
            </p>
          </div>
          <div className="p-4 border border-plum/20 bg-white rounded-lg">
            <span className="text-[10px] font-bold text-plum uppercase tracking-wider">PERSONA B</span>
            <h4 className="text-sm font-extrabold text-ink mt-1">Neha, Fashion Brand Designer</h4>
            <p className="text-xs text-muted mt-2">
              <strong>Needs:</strong> Premium textures and custom dye options. Needs to order fabric sample swatch kits quickly.
            </p>
          </div>
          <div className="p-4 border border-plum/20 bg-white rounded-lg">
            <span className="text-[10px] font-bold text-plum uppercase tracking-wider">PERSONA C</span>
            <h4 className="text-sm font-extrabold text-ink mt-1">Amit, Wholesale Buyer</h4>
            <p className="text-xs text-muted mt-2">
              <strong>Needs:</strong> Wholesale supply for upholstery. Seeks daily production capacity logs and high-volume pricing structures.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "information-architecture",
    title: "08. Information Architecture & Navigation Map",
    shortTitle: "IA",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          We structured the information architecture to separate company details (History, Infrastructure) from product categories (Packaging, Fashion, Decor) to make navigation easy to scan.
        </p>
        <div className="p-5 border border-hairline rounded-lg bg-white overflow-x-auto font-mono text-xs">
          <p className="text-plum font-bold mb-2">├── Homepage (Corporate Overview)</p>
          <p className="pl-6 text-muted mb-1">├── About Us (Infrastructure, History, Certifications)</p>
          <p className="pl-6 text-muted mb-1">├── Product Categories (Specification cards)</p>
          <p className="pl-6 text-muted mb-1">├── Industries Served (Packaging, Footwear, Fashion)</p>
          <p className="pl-6 text-muted mb-3">└── Request A Quote (RFQ Form)</p>
        </div>
      </div>
    ),
  },
  {
    id: "homepage-design",
    title: "09. Homepage Section Breakdown",
    shortTitle: "Homepage",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          Let's review the layout choices and business objectives for each section of the homepage:
        </p>

        <div className="space-y-4">
          <div className="p-5 border border-hairline rounded-lg bg-white">
            <h4 className="text-sm font-extrabold text-ink uppercase tracking-wider">Hero Banner</h4>
            <p className="text-xs text-muted mt-1 leading-relaxed">
              We replaced busy textile slideshows with a clean, high-resolution visual of premium velvet and a clear value statement: "Premium Velvet Fabrics. Manufactured for Global Standards." This focus establishes credibility instantly.
            </p>
          </div>

          <div className="p-5 border border-hairline rounded-lg bg-white">
            <h4 className="text-sm font-extrabold text-ink uppercase tracking-wider">Manufacturing Process &amp; Infrastructure</h4>
            <p className="text-xs text-muted mt-1 leading-relaxed">
              Displays details about the weaving and quality checking processes. This section helps build trust with new visitors looking for a high-volume manufacturing partner.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "product-showcase",
    title: "10. Product Showcase & Specifications",
    shortTitle: "Showcase",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          We redesigned product listings to focus on technical specifications. Product cards display roll width, density, and backing material clearly.
        </p>
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          By organizing products by industry application (e.g. "Jewelry Packaging Velvet" vs. "Footwear Velvet"), buyers can check compatibility and specs without searching.
        </p>
      </div>
    ),
  },
  {
    id: "trust-building",
    title: "11. Credibility & Trust Building",
    shortTitle: "Trust",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          To build trust with corporate procurement managers, we displayed the company's ISO quality certifications, facility testing processes, and high-volume production output capacity prominently.
        </p>
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          This transparency helps new visitors verify credibility and feel confident placing large bulk orders.
        </p>
      </div>
    ),
  },
  {
    id: "inquiry-experience",
    title: "12. Inquiry Experience & RFQ Optimization",
    shortTitle: "RFQ",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          The Request-for-Quote (RFQ) flow is critical for B2B lead generation. We replaced the generic contact form with a structured RFQ form.
        </p>
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          By adding fields for product code, roll volumes, and custom specifications, we helped buyers submit inquiries easily and reduced communication steps.
        </p>
      </div>
    ),
  },
  {
    id: "mobile-experience",
    title: "13. Mobile Responsiveness & Spec Tables",
    shortTitle: "Mobile",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          Since technical buyers browse on mobile viewports on the go, optimizing table layouts was essential.
        </p>
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          We designed responsive tables that allow horizontal swiping for detailed spec columns, keeping the page layout clean and easy to read on smaller screens.
        </p>
      </div>
    ),
  },
  {
    id: "design-system",
    title: "14. Design System Tokens",
    shortTitle: "Design System",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          The design system uses deep velvet-inspired color tones and clean typography to establish a professional B2B identity.
        </p>

        <div className="grid gap-6 md:grid-cols-3 mt-4">
          <div className="p-4 border border-hairline bg-white rounded-lg">
            <h4 className="text-xs font-bold text-muted uppercase tracking-wider mb-2">Typography</h4>
            <p className="text-xs text-body leading-relaxed">
              <strong>Display:</strong> Bricolage Grotesque – Used for titles and specs.
            </p>
            <p className="text-xs text-body leading-relaxed mt-1">
              <strong>Body:</strong> Inter – Used for tables and description grids.
            </p>
          </div>

          <div className="p-4 border border-hairline bg-white rounded-lg">
            <h4 className="text-xs font-bold text-muted uppercase tracking-wider mb-2">Color Palette</h4>
            <p className="text-xs text-body leading-relaxed">
              <strong>Primary Accent:</strong> Plum velvet violet (#460479).
            </p>
          </div>

          <div className="p-4 border border-hairline bg-white rounded-lg">
            <h4 className="text-xs font-bold text-muted uppercase tracking-wider mb-2">Grid &amp; Spacing</h4>
            <p className="text-xs text-body leading-relaxed">
              Built on the 8px grid system to ensure components align cleanly across different screens.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "collaboration",
    title: "15. Developer Collaboration & QA",
    shortTitle: "Collaboration",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          We worked closely with the front-end developer to ensure the responsive grids and spec tables matched our design mockups.
        </p>
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          Documenting naming conventions and asset links clearly in Figma helped speed up development and ensure quality throughout implementation.
        </p>
      </div>
    ),
  },
  {
    id: "challenges",
    title: "16. Corporate & Usability Challenges",
    shortTitle: "Challenges",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          Designing the website required addressing several layout and content challenges, including:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[15px] text-body">
          <li>
            <strong>Presenting Technical Details:</strong> Formatting density, widths, and backing specifications clearly without cluttering the page.
          </li>
          <li>
            <strong>Establishing Credibility:</strong> Showcasing years of experience and standards for first-time visitors.
          </li>
          <li>
            <strong>RFQ Form Simplicity:</strong> Keeping the quote request form easy to use while capturing necessary order details.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "solutions",
    title: "17. UX-Driven Design Solutions",
    shortTitle: "Solutions",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          We resolved these constraints through systematic layout design:
        </p>
        <div className="space-y-4 mt-4">
          <div className="p-4 border border-hairline bg-white rounded-lg">
            <h4 className="text-xs font-bold text-ink uppercase tracking-wider">Dynamic CAD Schematic Diagrams</h4>
            <p className="text-xs text-muted mt-1 leading-relaxed">
              We created custom vector CAD drawings to represent specifications visually. This helped buyers check backing layouts and dimensions easily.
            </p>
          </div>

          <div className="p-4 border border-hairline bg-white rounded-lg">
            <h4 className="text-xs font-bold text-ink uppercase tracking-wider">Integrated RFQ Entry Points</h4>
            <p className="text-xs text-muted mt-1 leading-relaxed">
              We placed quote request buttons near all spec tables. When a buyer clicks "Request B2B Quote," the part number is pre-filled automatically, simplifying the checkout.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "results-impact",
    title: "18. Results & Lead Generation Impact",
    shortTitle: "Impact",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          Three months after deployment, the redesigned website achieved significant B2B lead generation improvements:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="p-5 border border-hairline rounded-lg bg-plum/5 text-center">
            <span className="block font-display text-4xl font-extrabold text-plum">+25%</span>
            <span className="block text-xs font-bold text-ink uppercase tracking-wider mt-2">B2B RFQ Submissions</span>
            <p className="text-[10px] text-muted mt-1">Direct quote forms and pre-filled product selectors accelerated lead generation.</p>
          </div>

          <div className="p-5 border border-hairline rounded-lg bg-plum/5 text-center">
            <span className="block font-display text-4xl font-extrabold text-plum">20 Years</span>
            <span className="block text-xs font-bold text-ink uppercase tracking-wider mt-2">Digital Brand Equity</span>
            <p className="text-[10px] text-muted mt-1">Infrastructure galleries and quality certifications established manufacturing authority online.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "key-learnings",
    title: "19. Key Takeaways",
    shortTitle: "Key Takeaways",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          The JK Velvet redesign reinforced important principles in corporate B2B UX:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[15px] text-body">
          <li>
            <strong>Focus on Technical Clarity:</strong> Corporate buyers seek specifications and compliance details over marketing taglines.
          </li>
          <li>
            <strong>Pre-filled Forms Drive Inquiries:</strong> Simplifying the quote request flow by pre-filling product details helps increase submissions.
          </li>
          <li>
            <strong>Trust Elements are Essential:</strong> Displaying certifications and infrastructure photos is key to build trust with B2B clients.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "reflection",
    title: "20. Reflection & Future Roadmap",
    shortTitle: "Reflection",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          If redesigning the site today, I would explore interactive 3D swatch previewers. Adding a customization widget could allow designers to see how different velvet textures and colors look on watch cases or jewelry trays, further improving overall lead conversions.
        </p>
      </div>
    ),
  },
];
