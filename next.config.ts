import type { NextConfig } from "next";

/**
 * Static export so the site can deploy to GitHub Pages (and any static host).
 * `NEXT_PUBLIC_BASE_PATH` is set at build time for project Pages
 * (e.g. "/cobalt" → arian200825.github.io/cobalt); empty for local dev and
 * custom-domain deploys.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
};

export default nextConfig;
