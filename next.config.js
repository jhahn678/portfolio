/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['julian-hahn-portfolio.s3.amazonaws.com'],
    
  }
}

module.exports = nextConfig
