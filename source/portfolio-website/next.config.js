/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/intro-page',
  assetPrefix: '/intro-page',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig