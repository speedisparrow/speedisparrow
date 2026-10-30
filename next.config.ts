import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  experimental: {
    agentUpgrade: "security",
  },
  images: {
    remotePatterns: [new URL('https://cdn-icons-png.flaticon.com/512/6017/6017412.png')],
  },
};
export default nextConfig;
