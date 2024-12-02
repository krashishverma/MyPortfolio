module.exports = {
  output: 'export', // Set for static export
  basePath: '/MyPortfolio', // Use your repository name as the base path
  trailingSlash: true, // Ensure proper paths for GitHub Pages
  images: {
    unoptimized: true, // Disable Image Optimization for `next export`
  },
  eslint: {
    ignoreDuringBuilds: true, // Allow production builds to succeed despite ESLint errors
  },
};
