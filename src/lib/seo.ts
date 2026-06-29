import type { Metadata } from "next";
import { site } from "@/content/site";

/**
 * buildMetadata — one helper every page uses for consistent, correct SEO.
 * Handles title templating, canonical URLs, Open Graph + Twitter cards.
 */
export function buildMetadata({
  title,
  description = site.description,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
} = {}): Metadata {
  const url = `${site.url}${path}`;
  const fullTitle = title ? `${title} — ${site.name}` : `${site.name} — ${site.tagline}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
