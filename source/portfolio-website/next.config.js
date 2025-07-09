const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/intro-page' : '',
  assetPrefix: isProd ? '/intro-page' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
