/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow external images from Wikipedia/Wikimedia
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/wikipedia/**',
      },
    ],
    // Image optimization
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 year cache
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/calculators/area-calculator-',
        destination: '/calculators/area-calculator',
        permanent: true,
      },
    ];
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      // Cache static assets aggressively
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,

  // Enable React strict mode for better development
  reactStrictMode: true,

  // Optimize package imports
  experimental: {
    optimizePackageImports: ['lucide-react', 'mathjs'],
  },
};

module.exports = nextConfig;
