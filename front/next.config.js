/** @type {import('next').NextConfig} */
require("dotenv").config;
const nextConfig = {
  env: {
    URL: process.env.API_URL,
  },
};
module.exports = nextConfig;
