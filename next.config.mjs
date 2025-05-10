/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove standalone output as it's not needed in web container
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  // Add configuration to properly handle static assets
  webpack: (config) => {
    return config;
  },
  // Ensure proper asset handling
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : '',
};

export default nextConfig;