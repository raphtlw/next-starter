const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true,
  i18n: {
    locales: ["en-SG"],
    defaultLocale: "en-SG",
  },
  pwa: {
    dest: "public",
    disable:
      process.env.PWA_ENABLED === false ||
      process.env.NODE_ENV === "development",
  },
});

module.exports = nextConfig;
