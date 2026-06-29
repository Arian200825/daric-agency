/**
 * PORTFOLIO — concept showcases until real client work lands.
 *
 * ⚠️  These are CONCEPT projects (clearly labeled as such on the site so we stay
 * honest). Each has `concept: true`. As real projects ship, add them with
 * `concept: false`, real metrics, and a testimonial.
 *
 * Images: place files in /public/work/<image>. Until then a branded gradient
 * placeholder renders automatically (see components/sections/PortfolioGrid).
 */

export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  concept: boolean;
  summary: string;
  /** Optional headline result — shown as a stat when present. */
  result?: string;
  tags: string[];
  image?: string;
  /** Two accent stops for the placeholder gradient (hsl or hex). */
  gradient: [string, string];
}

export const projects: Project[] = [
  {
    slug: "halo-saas",
    title: "Halo",
    category: "SaaS Platform",
    year: "2025",
    concept: true,
    summary:
      "A bold marketing site for a B2B analytics platform — clarity-first layout with a confident, data-driven aesthetic.",
    result: "Concept",
    tags: ["Web Design", "Development", "Motion"],
    gradient: ["#2563eb", "#1e1b4b"],
  },
  {
    slug: "atelier-commerce",
    title: "Atelier",
    category: "E-commerce",
    year: "2025",
    concept: true,
    summary:
      "A luxury fashion storefront concept — editorial product pages and a frictionless checkout.",
    result: "Concept",
    tags: ["E-commerce", "Brand", "UX"],
    gradient: ["#9333ea", "#1e1b4b"],
  },
  {
    slug: "north-realty",
    title: "North",
    category: "Real Estate",
    year: "2025",
    concept: true,
    summary:
      "A premium real-estate brand and site concept — immersive listings with map-driven discovery.",
    result: "Concept",
    tags: ["Web Design", "Brand", "Development"],
    gradient: ["#0ea5e9", "#0c4a6e"],
  },
  {
    slug: "ember-hospitality",
    title: "Ember",
    category: "Hospitality",
    year: "2025",
    concept: true,
    summary:
      "A fine-dining restaurant concept — atmospheric visuals, reservations, and a story-led layout.",
    result: "Concept",
    tags: ["Web Design", "Brand", "Motion"],
    gradient: ["#f97316", "#7c2d12"],
  },
  {
    slug: "ledger-fintech",
    title: "Ledger",
    category: "Fintech",
    year: "2025",
    concept: true,
    summary:
      "A trustworthy fintech concept — precise, calm UI that makes a complex product feel simple.",
    result: "Concept",
    tags: ["Product Design", "Development", "SEO"],
    gradient: ["#14b8a6", "#134e4a"],
  },
  {
    slug: "studio-folio",
    title: "Folio",
    category: "Portfolio",
    year: "2025",
    concept: true,
    summary:
      "A creative studio portfolio concept — typographic, motion-rich, and unmistakably premium.",
    result: "Concept",
    tags: ["Web Design", "Motion", "Brand"],
    gradient: ["#6366f1", "#1e1b4b"],
  },
];
