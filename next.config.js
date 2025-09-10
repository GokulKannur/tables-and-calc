/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add this async redirects() function
  async redirects() {
    return [
      {
        source: '/calculators/area-calculator',
        destination: '/calculators/area-calculator', // Redirects to the same URL to force a correct lookup
        permanent: true,
      },
      {
        source: '/calculators/area-calculator-',
        destination: '/calculators/area-calculator',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;