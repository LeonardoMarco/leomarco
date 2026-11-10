import type { NextConfig } from "next";

const isGitHubPagesExport = process.env.GITHUB_PAGES_EXPORT === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  ...(isGitHubPagesExport && {
    output: "export",
    trailingSlash: true,
    images: { unoptimized: true },
    ...(basePath && { basePath }),
  }),
};

export default nextConfig;
