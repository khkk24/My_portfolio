/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isProd ? '/My_portfolio' : '',
  assetPrefix: isProd ? '/My_portfolio' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
