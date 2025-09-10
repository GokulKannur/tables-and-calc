/** @type {import('next').NextConfig} */
const nextConfig = {
  // config options here
  async redirects() {
    return [
      {
        source: '/calculators/area-calculator-',
        destination: '/calculators/area-calculator',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;