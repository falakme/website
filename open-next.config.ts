import { defineCloudflareConfig } from "@opennextjs/cloudflare";

const config = defineCloudflareConfig({});

export default {
  ...config,
  // OpenNext would otherwise run `npm run build`, which is this same script.
  buildCommand: "npx next build",
};
