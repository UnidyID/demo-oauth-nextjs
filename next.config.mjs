import * as config from "./src/app/config.mjs";

console.log(JSON.stringify(config, null, 2));

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    taint: true,
  },
};

export default nextConfig;
