import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Uncomment and set to your repo name if deploying to:
  // https://<username>.github.io/<repo-name>/
  // basePath: "/chankennethg",
};

export default nextConfig;
