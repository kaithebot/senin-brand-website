import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: '/senin-brand-website',
  assetPrefix: '/senin-brand-website',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
