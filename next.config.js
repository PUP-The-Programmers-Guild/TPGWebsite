const MillionLint = require('@million/lint');
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react"]
  },
  modularizeImports: {
    "@phosphor-icons/react": {
      transform: "@phosphor-icons/react/dist/ssr/{{member}}"
    }
  },
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "images.unsplash.com",
      port: ""
    }, {
      protocol: "https",
      hostname: "picsum.photos",
      port: ""
    }, {
      protocol: "https",
      hostname: process.env.S3_BUCKET,
      port: ""
    }]
  }
};
module.exports = MillionLint.next()(withBundleAnalyzer(nextConfig));