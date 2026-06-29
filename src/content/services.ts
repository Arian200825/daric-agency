/**
 * SERVICES — what we sell. Drives the Services page + the home preview grid.
 * `icon` maps to a key in components/ui/Icon.tsx.
 *
 * ⚠️  DRAFT copy for your approval — refine wording/scope as you like.
 */

export interface Service {
  slug: string;
  icon: string;
  title: string;
  summary: string;
  /** Concrete deliverables — shown as a checklist on the Services page. */
  deliverables: string[];
}

export const services: Service[] = [
  {
    slug: "web-design",
    icon: "layout",
    title: "Web Design",
    summary:
      "Distinctive, conversion-focused interfaces designed to make premium brands look the part.",
    deliverables: [
      "UX strategy & wireframes",
      "High-fidelity UI design",
      "Design system & components",
      "Interactive prototypes",
    ],
  },
  {
    slug: "web-development",
    icon: "code",
    title: "Web Development",
    summary:
      "Fast, accessible, production-grade builds in modern frameworks — engineered to scale.",
    deliverables: [
      "Next.js / React builds",
      "Headless CMS integration",
      "Core Web Vitals optimization",
      "Analytics & tracking setup",
    ],
  },
  {
    slug: "brand-identity",
    icon: "sparkles",
    title: "Brand & Identity",
    summary:
      "Cohesive visual identities — logo, type, color, and voice — that command attention.",
    deliverables: [
      "Logo & wordmark",
      "Visual identity system",
      "Brand guidelines",
      "Messaging & tone of voice",
    ],
  },
  {
    slug: "ecommerce",
    icon: "cart",
    title: "E-commerce",
    summary:
      "Storefronts built to sell — frictionless, fast, and tuned for conversion.",
    deliverables: [
      "Shopify / headless commerce",
      "Product & checkout UX",
      "Payment & shipping setup",
      "Conversion rate optimization",
    ],
  },
  {
    slug: "seo-performance",
    icon: "gauge",
    title: "SEO & Performance",
    summary:
      "Technical SEO and speed work that gets premium brands found and keeps them fast.",
    deliverables: [
      "Technical SEO audit",
      "Performance optimization",
      "Structured data & metadata",
      "Search Console setup",
    ],
  },
  {
    slug: "care-growth",
    icon: "trending",
    title: "Care & Growth",
    summary:
      "Ongoing design, development, and optimization to keep momentum after launch.",
    deliverables: [
      "Monthly design & dev hours",
      "A/B testing & iteration",
      "Priority support",
      "Performance reporting",
    ],
  },
];
