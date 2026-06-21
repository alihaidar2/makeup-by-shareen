import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    // Add external domains here as you add portfolio/team images
    remotePatterns: [],
  },
};

export default nextConfig;
