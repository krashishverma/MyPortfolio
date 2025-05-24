/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use static export in production
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),
  
  basePath: process.env.NODE_ENV === 'production' ? '/MyPortfolio' : '', // Only use basePath in production
  trailingSlash: true, // Ensure proper paths for GitHub Pages
  images: {
    unoptimized: true, // Disable Image Optimization for static export
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Add package optimization for better performance
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
};

module.exports = nextConfig;
