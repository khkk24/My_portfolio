/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'github.com'],
  },
  i18n: {
    locales: ['pt', 'fr', 'en'],
    defaultLocale: 'pt',
  },
}

module.exports = nextConfig
