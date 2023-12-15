/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  css: {
    modules: true, // Enable CSS modules
  },
  publicRuntimeConfig: {
    App_Name: "Saransh Realtor India",
    API_DEVELOPMENT: "http://localhost:5000/",
    PRODUCTION: false,
  },
};

module.exports = nextConfig;
