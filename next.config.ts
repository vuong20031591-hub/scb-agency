import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization configuration
  images: {
    // Enable image optimization
    unoptimized: false,
    // Define device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Define image sizes for srcset
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Supported image formats
    formats: ['image/avif', 'image/webp'],
    // Minimum cache TTL for optimized images (in seconds)
    minimumCacheTTL: 60,
    // Allow SVG images
    dangerouslyAllowSVG: true,
    // Content security policy for SVG
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Compress responses
  compress: true,
  // Experimental features for better performance
  experimental: {
    // Optimize package imports
    optimizePackageImports: ['framer-motion', 'embla-carousel-react'],
  },
  // Headers for caching and security
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
