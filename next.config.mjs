/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img.icons8.com"],
  },
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during `next build`
  },
};

export default nextConfig;