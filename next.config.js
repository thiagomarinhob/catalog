/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-op.vesti.mobi",
        port: "",
        pathname: "",
      },
    ],
  },

  images: {
    domains: ["cdn-op.vesti.mobi"],
  },
};

module.exports = nextConfig;
