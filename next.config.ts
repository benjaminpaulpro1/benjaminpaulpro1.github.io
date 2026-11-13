import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  output: "export", // GitHub Pages serves static files only
  images: { unoptimized: true },
};

export default nextConfig;
