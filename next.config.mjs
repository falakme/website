import path from "node:path";
import { fileURLToPath } from "node:url";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const root = path.dirname(fileURLToPath(import.meta.url));

initOpenNextCloudflareForDev();

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: { unoptimized: true },
  webpack(config) {
    config.resolve.alias["@"] = root;
    return config;
  },
};
export default nextConfig;
