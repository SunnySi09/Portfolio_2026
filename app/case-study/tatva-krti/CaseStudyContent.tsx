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
        <div className="bg-gradient-to-r from-wash/20 to-transparent p-6 rounded-xl border border-wash/40 mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-rausch-active mb-2">Project Classification</p>
          <p className="text-xl sm:text-2xl font-serif font-bold text-ink">
            Tatva Krti: A High-Converting Shopify Storefront for an Ayurvedic Wellness and Sustainable Lifestyle Brand.
          </p>
        </div>
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          Tatva Krti is an artisanal wellness brand specializing in hand-crafted copper drinkware, organic beeswax candles, and sustainable home items. 
          While the brand has a loyal customer base, its original online storefront suffered from poor category structure, lack of trust signals, and confusing mobile purchase paths.
        </p>
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          As the UI/UX Designer and Shopify Product Designer, I led the redesign of the storefront templates. 
          We improved the navigation flow, restructured product descriptions, and optimized layouts to build trust and drive higher conversions.
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
          The Tatva Krti redesign project aimed to improve storefront usability, elevate the wellness brand story, and reduce friction throughout the purchase funnel. 
          The original desktop and mobile templates lacked clear product categories and did not communicate the Ayurvedic benefits of the products, resulting in high drop-offs.
        </p>
        <div className="border-l-4 border-wash pl-4 italic my-6 text-[#4a4235] text-[15px]">
          "We wanted our digital storefront to reflect the purity and organic quality of our products. The redesign established a premium aesthetic that instantly resonated with our audience."
          <span className="block mt-2 font-semibold text-xs not-italic text-muted">— Founder, Tatva Krti</span>
        </div>
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          We revamped the homepage layout, simplified product page accordions, and optimized the mobile checkout flow. 
          The updates resulted in a **7% increase in user engagement** and a **12% improvement in purchase task success rates** during post-launch testing.
        </p>
      </div>
    ),
  },
  {
    id: "about-the-brand",
    title: "03. About the Brand",
    shortTitle: "About the Brand",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          Tatva Krti translates to "Elemental Creations." The brand is dedicated to reintroducing traditional Ayurvedic wellness practices into modern homes.
          The product taxonomy covers three main collections:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[15px] text-body">
          <li><strong>Pure Copper Drinkware:</strong> Copper bottles and tumblers made from 99.6% pure copper to promote Ayurvedic wellness.</li>
          <li><strong>Organics:</strong> Pure beeswax candles scented with natural essential oils.</li>
          <li><strong>Lifestyle:</strong> Organic linen kitchen textiles and hand-carved teak wood utensils.</li>
        </ul>
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          The target demographic includes eco-conscious millennials, wellness enthusiasts, and premium gift shoppers looking for high-quality, sustainable goods.
        </p>
      </div>
    ),
  },
  {
    id: "business-challenges",
    title: "04. Business Challenges",
    shortTitle: "Challenges",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          The brand faced several storefront challenges that impacted conversions and customer acquisition:
        </p>
        <div className="grid gap-6 md:grid-cols-2 mt-4">
          <div className="p-5 border border-hairline rounded-lg bg-white shadow-sm">
            <h4 className="font-bold text-ink text-sm uppercase tracking-wide mb-2 text-[#b45309]">Low Product Discoverability</h4>
            <p className="text-xs text-muted leading-relaxed">
              Resellers and retail customers struggled to navigate between different candle scents and bottle sizes, resulting in high drop-offs on the main collection grids.
            </p>
          </div>
          <div className="p-5 border border-hairline rounded-lg bg-white shadow-sm">
            <h4 className="font-bold text-ink text-sm uppercase tracking-wide mb-2 text-[#b45309]">Weak Product Storytelling</h4>
            <p className="text-xs text-muted leading-relaxed">
              The benefits of pure copper drinkware and organic beeswax were not communicated. Customers didn't understand the value of the products over mass-market alternatives.
            </p>
          </div>
          <div className="p-5 border border-hairline rounded-lg bg-white shadow-sm">
            <h4 className="font-bold text-ink text-sm uppercase tracking-wide mb-2 text-[#b45309]">Lack of Trust Signals</h4>
            <p className="text-xs text-muted leading-relaxed">
              No certifications of copper purity or materials sourcing were displayed on product pages, creating friction for first-time buyers concerned with product safety.
            </p>
          </div>
          <div className="p-5 border border-hairline rounded-lg bg-white shadow-sm">
            <h4 className="font-bold text-ink text-sm uppercase tracking-wide mb-2 text-[#b45309]">Mobile Checkout Friction</h4>
            <p className="text-xs text-muted leading-relaxed">
              The legacy checkout layout had small form inputs and lacked sticky CTAs, resulting in a high cart abandonment rate on mobile viewports.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "design-goals",
    title: "05. Design Objectives",
    shortTitle: "Objectives",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          We established clear design objectives to address usability issues and improve overall store performance:
        </p>
        <div className="space-y-4 mt-4">
          <div className="flex gap-4 items-start">
            <span className="h-6 w-6 rounded-full bg-wash/20 text-rausch-active font-bold text-xs flex items-center justify-center shrink-0">1</span>
            <div>
              <h4 className="text-sm font-bold text-ink uppercase tracking-wide">Enhance Trust &amp; Credibility</h4>
              <p className="text-xs text-muted mt-0.5">Integrate material purity certifications, detailed ingredient transparency logs, and verified customer reviews directly on the product detail templates.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="h-6 w-6 rounded-full bg-wash/20 text-rausch-active font-bold text-xs flex items-center justify-center shrink-0">2</span>
            <div>
              <h4 className="text-sm font-bold text-ink uppercase tracking-wide">Streamline Navigation &amp; Search</h4>
              <p className="text-xs text-muted mt-0.5">Design a clean mega-menu layout and advanced filtering sidebar to help customers sort products by collection, material, and scent options easily.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="h-6 w-6 rounded-full bg-wash/20 text-rausch-active font-bold text-xs flex items-center justify-center shrink-0">3</span>
            <div>
              <h4 className="text-sm font-bold text-ink uppercase tracking-wide">Optimize Mobile Checkout Path</h4>
              <p className="text-xs text-muted mt-0.5">Implement a sticky "Add to Cart" button on mobile product pages and design an optimized checkout sheet to reduce cart abandonment.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "discovery-research",
    title: "06. Discovery & Research",
    shortTitle: "Research",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          We reviewed user behavior patterns using Google Analytics and conducted usability tests with five customers.
          Our analysis identified key friction points in the buyer journey:
        </p>
        <div className="bg-soft p-5 rounded-lg border border-hairline my-6">
          <h4 className="text-xs font-bold text-ink uppercase tracking-wider mb-2">Key Usability Finding: The Missing Care Instructions</h4>
          <p className="text-xs text-muted leading-relaxed">
            We discovered that 35% of customer support inquiries were related to copper bottle care (e.g. how to clean oxidation). Buyers hesitated to purchase because care instructions were not available on the product page.
          </p>
        </div>
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          We used these insights to restructure product details and address common questions before checkout.
        </p>
      </div>
    ),
  },
  {
    id: "user-personas",
    title: "07. User Personas",
    shortTitle: "Personas",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          We created three user personas to guide our design decisions:
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-4 border border-[#dddddd] bg-white rounded-lg">
            <span className="text-[10px] font-bold text-muted uppercase tracking-wider">PERSONA A</span>
            <h4 className="text-sm font-extrabold text-ink mt-1">Vipul, Wellness Enthusiast</h4>
            <p className="text-xs text-muted mt-2">
              Wants authentic Ayurvedic copper drinkware. Seeks clarity on material purity, certifications, and product care guidelines.
            </p>
          </div>
          <div className="p-4 border border-[#dddddd] bg-white rounded-lg">
            <span className="text-[10px] font-bold text-muted uppercase tracking-wider">PERSONA B</span>
            <h4 className="text-sm font-extrabold text-ink mt-1">Srishti, Gift Buyer</h4>
            <p className="text-xs text-muted mt-2">
              Looks for premium wellness gifts. Needs quick category filters, gift wrapping options, and clear shipping timelines.
            </p>
          </div>
          <div className="p-4 border border-[#dddddd] bg-white rounded-lg">
            <span className="text-[10px] font-bold text-muted uppercase tracking-wider">PERSONA C</span>
            <h4 className="text-sm font-extrabold text-ink mt-1">Ananya, Sustainable Shopper</h4>
            <p className="text-xs text-muted mt-2">
              Prioritizes organic ingredients and plastic-free shipping. Checks product ingredient lists and packaging certifications.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "customer-journey",
    title: "08. Customer Journey Map",
    shortTitle: "Customer Journey",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          We mapped the user journey from landing pages to checkout to identify friction points and apply usability fixes:
        </p>
        <div className="p-5 border border-hairline rounded-lg bg-white overflow-x-auto font-mono text-xs">
          <p className="text-rausch-active font-bold mb-2">├── Homepage (Storytelling &amp; Trust)</p>
          <p className="pl-6 text-muted mb-1">├── Friction: Cluttered banners, missing testimonials.</p>
          <p className="pl-6 text-muted mb-3">└── UX Fix: Curated grid, bold value statement, trust badges.</p>

          <p className="text-rausch-active font-bold mb-2">├── Collections (Browse &amp; Filter)</p>
          <p className="pl-6 text-muted mb-1">├── Friction: Hard to filter candles by scent or size.</p>
          <p className="pl-6 text-muted mb-3">└── UX Fix: Advanced filtering sidebar, clear product cards.</p>

          <p className="text-rausch-active font-bold mb-2">├── Product Details (Information &amp; Cart)</p>
          <p className="pl-6 text-muted mb-1">├── Friction: Missing copper care instructions and purity signals.</p>
          <p className="pl-6 text-muted mb-3">└── UX Fix: Organized care accordions, sticky checkout drawer.</p>

          <p className="text-rausch-active font-bold mb-2">└── Checkout (Fulfillment)</p>
          <p className="pl-6 text-muted mb-1">├── Friction: Complex payment forms on mobile.</p>
          <p className="pl-6 text-muted">└── UX Fix: Sticky CTA, optimized mobile checkout templates.</p>
        </div>
      </div>
    ),
  },
  {
    id: "information-architecture",
    title: "09. Information Architecture & Navigation",
    shortTitle: "Navigation",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          We restructured the storefront layout to separate shopping (Collections, Best Sellers) from brand education (Ayurvedic Guide, Care Sheets) to keep navigation clean and easy to use.
        </p>
        <div className="p-4 border border-hairline bg-soft rounded-lg text-xs leading-relaxed text-body">
          <strong>Header Menu Structure:</strong>
          <br />
          Shop All &rarr; Copper Drinkware | Organic Beeswax Candles | Sustainable Home Linen
          <br />
          Wellness Hub &rarr; Ayurvedic Guidelines | Care &amp; Maintenance Sheets | Brand Blog
        </div>
      </div>
    ),
  },
  {
    id: "homepage-design",
    title: "10. Homepage Design Walkthrough",
    shortTitle: "Homepage",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          Let's review the layout choices and design decisions implemented across the main sections of the homepage:
        </p>

        <div className="space-y-4">
          <div className="p-5 border border-hairline rounded-lg bg-white">
            <h4 className="text-sm font-extrabold text-ink uppercase tracking-wider">Hero Banner</h4>
            <p className="text-xs text-muted mt-1 leading-relaxed">
              We replaced busy image slideshows with a clean, high-quality product image and a clear value statement: "Pure Copper, Conscious Living." This visual focus instantly sets a premium, minimalist tone.
            </p>
          </div>

          <div className="p-5 border border-hairline rounded-lg bg-white">
            <h4 className="text-sm font-extrabold text-ink uppercase tracking-wider">Artisanal Product Grid</h4>
            <p className="text-xs text-muted mt-1 leading-relaxed">
              We designed a clean grid to showcase best-selling items, including copper bottles and beeswax candles. Clear badges highlight key selling points like "99.6% Pure Copper" or "Hand-poured" to help drive purchases.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "product-detail-page",
    title: "11. Product Detail Page Optimization",
    shortTitle: "Product Page",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          The product detail page is critical for e-commerce conversions. We structured the page layout to address common questions and build trust:
        </p>
        <div className="grid gap-6 md:grid-cols-3 mt-4">
          <div className="p-4 border border-hairline bg-white rounded-lg">
            <h4 className="text-xs font-bold text-ink uppercase tracking-wider mb-2">Ayurvedic Tab Accordions</h4>
            <p className="text-xs text-muted leading-relaxed">
              Organizes material benefits and usage instructions in collapsible tabs, reducing visual clutter.
            </p>
          </div>

          <div className="p-4 border border-hairline bg-white rounded-lg">
            <h4 className="text-xs font-bold text-ink uppercase tracking-wider mb-2">Trust Signals</h4>
            <p className="text-xs text-muted leading-relaxed">
              Displays purity badges, certifications, and customer ratings prominently near the pricing section.
            </p>
          </div>

          <div className="p-4 border border-hairline bg-white rounded-lg">
            <h4 className="text-xs font-bold text-ink uppercase tracking-wider mb-2">Sticky Mobile CTA</h4>
            <p className="text-xs text-muted leading-relaxed">
              Keeps the "Add to Cart" button visible at the bottom of the screen as users scroll, simplifying mobile checkout.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "collection-pages",
    title: "12. Collection Pages & Filtering",
    shortTitle: "Collections",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          We redesigned collection grids to help customers browse products easily. The sidebar filter controls allow users to sort items by size, price, and scent options without page reloads.
        </p>
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          We also customized empty states (e.g. when filters yield no items) to recommend popular products, keeping shoppers engaged and reducing bounce rates.
        </p>
      </div>
    ),
  },
  {
    id: "mobile-experience",
    title: "13. Mobile Usability & Performance",
    shortTitle: "Mobile",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          Since over 70% of storefront visitors browse on mobile viewports, optimizing the mobile layout was essential.
        </p>
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          We increased touch target sizes for all links and buttons, designed a simple slide-out menu panel, and optimized images to load fast even on slower mobile connections.
        </p>
      </div>
    ),
  },
  {
    id: "design-system",
    title: "14. Curated Design System",
    shortTitle: "Design System",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          The storefront design system uses warm earth tones and clean typography to reflect the organic quality of the wellness brand.
        </p>

        <div className="grid gap-6 md:grid-cols-3 mt-4">
          <div className="p-4 border border-hairline bg-white rounded-lg">
            <h4 className="text-xs font-bold text-muted uppercase tracking-wider mb-2">Typography</h4>
            <p className="text-xs text-body leading-relaxed">
              <strong>Display:</strong> Bricolage Grotesque – Used for banners and product titles.
            </p>
            <p className="text-xs text-body leading-relaxed mt-1">
              <strong>Body:</strong> Inter – Tuned for readability across descriptions and reviews.
            </p>
          </div>

          <div className="p-4 border border-hairline bg-white rounded-lg">
            <h4 className="text-xs font-bold text-muted uppercase tracking-wider mb-2">Color Palette</h4>
            <p className="text-xs text-body leading-relaxed">
              <strong>Tones:</strong> Terracotta clay, soft linen beige, charcoal ink, and gold.
            </p>
          </div>

          <div className="p-4 border border-hairline bg-white rounded-lg">
            <h4 className="text-xs font-bold text-muted uppercase tracking-wider mb-2">Grid &amp; Spacing</h4>
            <p className="text-xs text-body leading-relaxed">
              Uses a flexible grid layout to ensure elements adjust smoothly across mobile, tablet, and desktop screens.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "shopify-implementation",
    title: "15. Shopify Liquid Implementation",
    shortTitle: "Implementation",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          We implemented the design changes on Shopify using dynamic sections inside the customized Dawn Theme.
        </p>
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          By documenting layouts and assets clearly in Figma, we helped developers build responsive templates efficiently. Regular visual QA reviews helped ensure that the final storefront match our design mockups.
        </p>
      </div>
    ),
  },
  {
    id: "conversion-optimization",
    title: "16. Conversion Rate Optimization (CRO)",
    shortTitle: "CRO",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          We applied targeted conversion optimization strategies to improve average order values (AOV) and reduce cart abandonment:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[15px] text-body">
          <li><strong>Product Bundling:</strong> Recommended related items (e.g. Copper Cleaning Powder with Copper Bottles) near the checkout button.</li>
          <li><strong>Social Proof:</strong> Displayed verified reviews and user-generated content prominently on product detail pages.</li>
          <li><strong>Clear Policies:</strong> Placed return window details and free shipping limits near the "Add to Cart" CTA.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "seo-content",
    title: "17. SEO &amp; Content Strategy",
    shortTitle: "SEO",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          A clean layout helps search engines index content effectively. We planned heading hierarchies and designed clean metadata templates to support organic search visibility.
        </p>
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          By integrating educational blog posts directly on the homepage, we created a clear path for wellness shoppers looking for Ayurvedic insights.
        </p>
      </div>
    ),
  },
  {
    id: "challenges",
    title: "18. Usability & Performance Challenges",
    shortTitle: "Challenges",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          Redesigning the storefront required addressing several usability and performance challenges:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[15px] text-body">
          <li>
            <strong>Balancing Media &amp; Speed:</strong> Displaying high-quality product images without affecting page load times.
          </li>
          <li>
            <strong>Shopify Theme Limits:</strong> Customizing Dawn Theme structures without breaking core checkout behaviors.
          </li>
          <li>
            <strong>Responsive Images:</strong> Ensuring detailed packaging layouts display clearly on both mobile and desktop viewports.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "solutions",
    title: "19. Design Solutions & Asset Management",
    shortTitle: "Solutions",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          We resolved these constraints through optimized asset management and structured layouts:
        </p>
        <div className="space-y-4 mt-4">
          <div className="p-4 border border-hairline bg-white rounded-lg">
            <h4 className="text-xs font-bold text-ink uppercase tracking-wider">Asset Optimization</h4>
            <p className="text-xs text-muted mt-1 leading-relaxed">
              We compressed product photography to modern WebP formats and used lazy-loading for image grids. This helped improve page load speed on mobile devices.
            </p>
          </div>

          <div className="p-4 border border-hairline bg-white rounded-lg">
            <h4 className="text-xs font-bold text-ink uppercase tracking-wider">Liquid Code Customization</h4>
            <p className="text-xs text-muted mt-1 leading-relaxed">
              We custom-coded product accordion blocks into the Shopify liquid templates. This allowed us to build custom tabs without depending on heavy third-party apps, maintaining optimal site speed.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "results-impact",
    title: "20. Post-Launch Outcomes & Impact",
    shortTitle: "Impact",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          Usability testing and behavior analysis post-launch confirmed significant improvements in customer engagement:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="p-5 border border-hairline rounded-lg bg-wash/5 text-center">
            <span className="block font-display text-4xl font-extrabold text-rausch-active">+7%</span>
            <span className="block text-xs font-bold text-ink uppercase tracking-wider mt-2">User Engagement</span>
            <p className="text-[10px] text-muted mt-1">Restructured product layouts and clear collections increased pages viewed per session.</p>
          </div>

          <div className="p-5 border border-hairline rounded-lg bg-wash/5 text-center">
            <span className="block font-display text-4xl font-extrabold text-rausch-active">+12%</span>
            <span className="block text-xs font-bold text-ink uppercase tracking-wider mt-2">Task Success Rate</span>
            <p className="text-[10px] text-muted mt-1">Usability tests confirmed buyers could filter scents, check care instructions, and checkout faster.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "key-learnings",
    title: "21. Key Takeaways",
    shortTitle: "Key Takeaways",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          The Tatva Krti storefront redesign reinforced key principles in e-commerce UX:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[15px] text-body">
          <li>
            <strong>Building Trust is Critical:</strong> Showing certifications, material purity, and instructions clearly is essential to convert wellness shoppers.
          </li>
          <li>
            <strong>Focus on Mobile Usability:</strong> Optimizing touch targets and checkout CTAs on mobile viewports is key to drive conversion rates.
          </li>
          <li>
            <strong>Avoid Heavy Third-Party Apps:</strong> Custom-coding accordion features helps maintain optimal site performance and fast page load times.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "reflection",
    title: "22. Reflection & Future Roadmap",
    shortTitle: "Reflection",
    content: (
      <div className="space-y-6">
        <p className="text-body text-[15px] sm:text-base leading-relaxed">
          If given the opportunity to redesign today, I would explore personalized wellness guides. Introducing a brief quiz could help guide shoppers to the correct copper bottle size or candle scents based on their wellness goals, creating a more personalized shopping experience.
        </p>
      </div>
    ),
  },
];
