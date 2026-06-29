/**
 * PROCESS — how we work. Drives the Process page + home timeline.
 * A clear process reduces buyer risk — a key conversion lever for high-ticket work.
 */

export interface ProcessStep {
  number: string;
  title: string;
  summary: string;
  details: string[];
}

export const process: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    summary:
      "We learn your business, audience, and goals — and define what success looks like.",
    details: [
      "Kickoff & goal setting",
      "Audience & competitor review",
      "Scope & success metrics",
    ],
  },
  {
    number: "02",
    title: "Strategy",
    summary:
      "We map the site, the message, and the conversion path before any pixels are pushed.",
    details: ["Sitemap & user flows", "Messaging strategy", "Content plan"],
  },
  {
    number: "03",
    title: "Design",
    summary:
      "We craft a distinctive, on-brand interface — designed to convert, not just impress.",
    details: ["Wireframes", "High-fidelity UI", "Design system & prototype"],
  },
  {
    number: "04",
    title: "Build",
    summary:
      "We engineer a fast, accessible, production-grade site with clean, scalable code.",
    details: ["Responsive development", "CMS & integrations", "QA & accessibility"],
  },
  {
    number: "05",
    title: "Launch",
    summary:
      "We ship with confidence — optimized, tested, and tracked from day one.",
    details: ["Performance pass", "SEO & analytics", "Go-live & handover"],
  },
  {
    number: "06",
    title: "Growth",
    summary:
      "We keep improving — testing, iterating, and supporting your site as it scales.",
    details: ["A/B testing", "Iteration", "Ongoing support"],
  },
];
