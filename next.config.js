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

  // Compression and optimization
  compress: true,
  poweredByHeader: false,
};

module.exports = nextConfig;
