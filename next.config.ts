import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/valentines",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
