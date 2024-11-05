import pkg from "./package.json" assert { type: "json" };
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["gamehub-publisher.s3.ap-south-1.amazonaws.com"],
  },
  env: {
    NEXT_PUBLIC_APP_VERSION: pkg.version,
  },
};

export default nextConfig;
