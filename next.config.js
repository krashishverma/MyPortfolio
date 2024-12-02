module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  output: 'export', // This is an example of setting Next.js to static export if needed
  basePath: '/MyPortfolio', // Set this if you want to deploy on GitHub Pages with a base path
  trailingSlash: true, // Ensure URLs end with a slash
}
