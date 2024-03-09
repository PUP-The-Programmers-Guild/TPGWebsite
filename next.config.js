const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  images: {
    domains: ["images.unsplash.com", "picsum.photos", process.env.S3_BUCKET],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
