import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // required for static export — no Image Optimization API at runtime
    remotePatterns: [],
  },
};

export default nextConfig;
