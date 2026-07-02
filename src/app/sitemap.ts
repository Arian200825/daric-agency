import type { MetadataRoute } from "next";
import { site, nav } from "@/content/site";
import { industries } from "@/content/industries";

// Required for `output: export` — emit a static sitemap.xml at build time.
export const dynamic = "force-static";

/**
 * sitemap.xml — generated from nav + solution pages + portfolio so it stays in
 * sync as pages are added/removed in one place.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    ...nav.map((n) => n.href),
    "/portfolio",
    ...industries.map((i) => `/solutions/${i.slug}`),
  ];
  return routes.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
