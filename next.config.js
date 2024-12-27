/**
 * @type {import('next').NextConfig}
 */
const path = require('path');
const nextConfig = {
  output: "export",
  distDir: "dist",
  webpack(config) {
    config.resolve.alias["@components"] = path.join(__dirname, "components");
    return config;
  },
};

module.exports = nextConfig;
