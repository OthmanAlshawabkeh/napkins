/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  // Optimize for WebContainer environment
  output: 'standalone',
  // Improve chunk loading reliability
  webpack: (config) => {
    // Optimize chunk size
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        minSize: 20000,
        maxSize: 70000,
      }
    };
    return config;
  },
  // Ensure proper asset handling for WebContainer environment with leading slash
  assetPrefix: './',
  // Improve hydration reliability
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons']
  }
};

export default nextConfig;