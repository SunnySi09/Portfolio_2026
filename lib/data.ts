// All content below is taken directly from Sunny Singh's resume.
// Nothing here is invented. The few unknown links are left blank on purpose
// and marked with TODO so they are easy to find and fill in.

export const profile = {
  name: "Sunny Singh",
  role: "Product & UI/UX Designer",
  location: "Surat, Gujarat, India",
  email: "sunnysinghsurat200@gmail.com",
  phone: "+91 93284 44036",
  linkedin: "https://linkedin.com/in/sunny-singh-4817a9322",
  portfolio: "", // TODO: resume lists a "Portfolio" link but no URL was provided
  availability: "Open to product design roles",
  // Pulled from the PROFILE summary
  intro:
    "Product and UI/UX designer working across SaaS, ERP, and e-commerce. I turn tangled business requirements into interfaces people actually understand, with a soft spot for design systems that scale.",
};

// The kinetic strip under the hero. Pulled from the SKILLS block.
export const marquee = [
  "Figma",
  "Design Systems",
  "UX Strategy",
  "Prototyping",
  "Wireframing",
  "User Journey Mapping",
  "Framer",
  "Shopify",
  "Usability Testing",
  "Information Architecture",
  "Component Libraries",
  "Interaction Design",
];

// Big-number moments. Every figure is straight from the resume.
export const stats = [
  {
    value: "+7%",
    label: "user engagement",
    note: "Tatva Krti Shopify storefront revamp",
  },
  {
    value: "+12%",
    label: "task success rate",
    note: "uncovered through usability research sessions",
  },
  {
    value: "8+",
    label: "ERP modules designed",
    note: "Product, Order, RBAC, Pricing, CMS, Analytics and more",
  },
  {
    value: "3",
    label: "companies shipped for",
    note: "SaaS, ERP and e-commerce products",
  },
];

export type Project = {
  title: string;
  tag: string;
  blurb: string;
  tools: string[];
  accent: "rausch" | "ink" | "wash" | "plum";
  live: boolean;
  href: string; // empty string renders no outbound link
};

// From the PROJECTS section of the resume.
export const projects: Project[] = [
  {
    title: "Super Admin",
    tag: "ERP · Jewelry B2B",
    blurb:
      "An intuitive admin built to simplify daily store operations, catalog management, and customer order processing, with seamless workflows for publishing, inventory, pricing and fulfillment.",
    tools: ["Figma", "FigJam", "Claude", "Antigravity"],
    accent: "ink",
    live: false,
    href: "/case-study/super-admin",
  },
  {
    title: "Store Admin Dashboard",
    tag: "ERP · B2B + B2C",
    blurb:
      "A Super Admin platform for managing stores, products, inventory, pricing and orders. UI and UX spanning Store Management, RBAC, CMS, Analytics, Billing and Onboarding on a scalable design system.",
    tools: ["Figma", "FigJam", "Claude", "Antigravity"],
    accent: "rausch",
    live: false,
    href: "/case-study/store-admin-dashboard",
  },
  {
    title: "Tatva Krti",
    tag: "Shopify · E-commerce",
    blurb:
      "A storefront revamp with cleaner category flow, polished product presentation and stronger visual hierarchy, lifting user engagement by 7 percent.",
    tools: ["Shopify", "Figma", "FigJam"],
    accent: "wash",
    live: true,
    href: "/case-study/tatva-krti",
  },
  {
    title: "Industrial Websites (MPI & JK)",
    tag: "Web · B2B",
    blurb:
      "A complete five-page industrial site with detailed product pages, structured layouts and intuitive navigation built for technical B2B visitors.",
    tools: ["Figma"],
    accent: "plum",
    live: true,
    href: "/case-study/industrial-websites",
  },
];

// From the EXPERIENCE section.
export const experience = [
  {
    company: "Touch Co.",
    role: "UI/UX Designer & Product Designer",
    period: "Dec 2025 - Present",
    mode: "In-office",
    points: [
      "Designed end-to-end UI/UX for a B2B diamond commerce ecosystem across Super Admin, Store Admin and customer-facing platforms.",
      "Planned scalable ERP modules including Product Management, Order Management, Role Access Control, Pricing Margins, CMS, Analytics and Onboarding.",
      "Now leading a team of developers, prioritizing tasks and keeping product vision, design and build aligned.",
    ],
  },
  {
    company: "Tatva Krti (Sigma Marketing)",
    role: "Website & UI/UX Designer",
    period: "Apr 2025 - Oct 2025",
    mode: "Remote",
    points: [
      "Revamped the Shopify storefront for a 7 percent lift in engagement through better structure and product discovery.",
      "Designed responsive Framer landing pages tuned for desktop, tablet and mobile breakpoints.",
      "Ran usability research that improved task success rates by 12 percent.",
    ],
  },
  {
    company: "Creative Vaibes",
    role: "UI/UX Designer",
    period: "Sep 2024 - Mar 2025",
    mode: "Remote",
    points: [
      "Designed an AI Art Studio interface for generating images from prompts and blending creative workflows.",
      "Built structured UI systems for industrial sites, improving navigation clarity and page understanding.",
      "Delivered conversion-driven landing pages with clean visual hierarchy.",
    ],
  },
];

// From the SKILLS section, grouped as the resume groups them.
export const skillGroups = [
  {
    title: "Design & Prototyping",
    items: ["Figma", "Photoshop", "Illustrator", "Sketch"],
  },
  {
    title: "Web Platforms",
    items: ["Shopify front-end", "Framer"],
  },
  {
    title: "UX",
    items: [
      "Wireframing",
      "User Journey Mapping",
      "Prototyping",
      "Usability Testing",
      "Information Architecture",
    ],
  },
  {
    title: "UI",
    items: [
      "Responsive Design",
      "Landing Pages",
      "Dashboard Design",
      "Component Libraries",
      "Design Systems",
    ],
  },
];

// From the EDUCATION section.
export const education = {
  school: "Parul University",
  degree: "B.Tech, Computer Science & Engineering",
  period: "2021 - 2025",
  detail: "CGPA 7.77 · Vadodara, India",
};

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];
