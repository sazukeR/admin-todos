import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
  remotePatterns: [
   {
    protocol: "https",
    hostname: "tailus.io",
    pathname: "/**",
   },
   {
    protocol: "https",
    hostname: "img.freepik.com",
   },
  ],
 },
 /* config options here */
 reactCompiler: true,
};

export default nextConfig;
