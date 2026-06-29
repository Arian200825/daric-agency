/**
 * PRICING — packages shown on the Pricing page + home preview.
 * Prices approved by client (USD, "starting at").
 */

export interface PricingTier {
  slug: string;
  name: string;
  /** null = "Let's talk" (custom/enterprise). */
  price: number | null;
  currency: string;
  /** e.g. "starting at" / "per project" / "per month". */
  cadence: string;
  tagline: string;
  features: string[];
  cta: { label: string; href: string };
  featured?: boolean;
}

export const currencySymbol = "$";

export const pricing: PricingTier[] = [
  {
    slug: "starter",
    name: "Starter",
    price: 1495,
    currency: "USD",
    cadence: "starting at",
    tagline: "A standout single-page or compact site to get you live, fast.",
    features: [
      "Up to 3 pages / sections",
      "Custom design (no templates)",
      "Responsive + dark mode",
      "Basic SEO & analytics",
      "2-week delivery",
    ],
    cta: { label: "Start with Starter", href: "/contact?plan=starter" },
  },
  {
    slug: "professional",
    name: "Professional",
    price: 2995,
    currency: "USD",
    cadence: "starting at",
    tagline: "A complete marketing site built to convert and scale.",
    features: [
      "Up to 8 pages",
      "Bespoke design system",
      "CMS for self-editing",
      "Advanced SEO & performance",
      "Motion & micro-interactions",
      "4-week delivery",
    ],
    cta: { label: "Choose Professional", href: "/contact?plan=professional" },
    featured: true,
  },
  {
    slug: "premium",
    name: "Premium",
    price: 5995,
    currency: "USD",
    cadence: "starting at",
    tagline: "E-commerce or web-app builds for brands that need more.",
    features: [
      "Unlimited core pages",
      "E-commerce / web app",
      "Custom integrations",
      "Conversion optimization",
      "Priority delivery",
      "30-day post-launch support",
    ],
    cta: { label: "Choose Premium", href: "/contact?plan=premium" },
  },
  {
    slug: "custom",
    name: "Custom Enterprise",
    price: null,
    currency: "USD",
    cadence: "",
    tagline: "A retainer, multi-site program, or something entirely bespoke.",
    features: [
      "Dedicated team",
      "Ongoing design & dev",
      "Multi-site / multi-brand",
      "SLA & priority support",
      "Tailored scope",
    ],
    cta: { label: "Request a quote", href: "/contact?plan=custom" },
  },
];
