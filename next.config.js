const withReactSvg = require("next-react-svg");
const path = require("path");

/** @type {import('next').NextConfig} */

module.exports = withReactSvg({
  reactStrictMode: true,
  include: path.resolve(__dirname, "src/assets/svg"),
  webpack(config, options) {
    return config;
  },
});
