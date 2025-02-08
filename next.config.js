/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['us-west-2.graphassets.com', 'media.graphassets.com', 'cdn.example.com']
  }
}

module.exports = nextConfig
