import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Local /public imagery for now; remote patterns can be added when we
    // wire real venue photography / a CMS.
    remotePatterns: [],
  },
};

export default nextConfig;
