/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/My_portfolio',
  assetPrefix: '/My_portfolio',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
