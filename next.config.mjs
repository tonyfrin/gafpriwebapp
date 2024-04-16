/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['categorygafpri.s3.us-east-2.amazonaws.com', 'tiendasgafpri.com'],
  },
  env: {
    API_URL: process.env.API_URL,
  },
};

export default nextConfig;
