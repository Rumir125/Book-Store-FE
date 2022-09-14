/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    backendPort: 3000,
  },
};

module.exports = nextConfig;
