/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  images: {
    domains: ["images.unsplash.com",],
  }
}

module.exports = nextConfig
