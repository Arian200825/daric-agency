import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Required for `output: export` — emit a static robots.txt at build time.
export const dynamic = "force-static";

/**
 * robots.txt — allow all crawling, point to the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
