import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Deploying to https://chankennethg.github.io/portfolio/
  basePath: "/portfolio",
};

export default nextConfig;
