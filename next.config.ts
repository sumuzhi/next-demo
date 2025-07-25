import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
   images: {
    remotePatterns: [new URL('https://tailwindcss.com/**')],
  },
};

export default nextConfig;
