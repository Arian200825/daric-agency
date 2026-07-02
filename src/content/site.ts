/**
 * SITE — single source of truth for brand, navigation, contact + SEO defaults.
 * Change brand-level facts here; they propagate across the entire site.
 *
 * ⚠️  Fields marked NEEDS_INPUT are sensible defaults pending your confirmation.
 */

export const site = {
  name: "Daric",
  legalName: "Daric", // NEEDS_INPUT: registered company name once formed
  tagline: "Websites That Define Your Brand.",
  description:
    "Daric is a premium AI-powered web agency designing and building high-performance websites for high-end businesses.",
  url: "https://daric.agency", // primary domain (placeholder — confirm/register)
  locale: "en",

  contact: {
    email: "hello@daric.agency", // default tied to domain — confirm once mailbox exists
    phone: "", // NEEDS_INPUT
    location: "Remote · Worldwide", // NEEDS_INPUT
    bookingUrl: "", // NEEDS_INPUT: Calendly/Cal.com link for "Book a call"
  },

  socials: [
    // NEEDS_INPUT: real handles — empty links are hidden in the footer.
    { label: "Instagram", href: "" },
    { label: "LinkedIn", href: "" },
    { label: "X", href: "" },
    { label: "Dribbble", href: "" },
  ],

  // Primary calls-to-action reused across the site.
  cta: {
    primary: { label: "Start a project", href: "/contact" },
    secondary: { label: "View live demos", href: "/solutions" },
  },
} as const;

/** Main navigation — drives the navbar and footer sitemap. */
export const nav = [
  { label: "Solutions", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export type NavItem = (typeof nav)[number];
