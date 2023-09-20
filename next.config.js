/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "swiperjs.com",
        port: "",
        pathname: "",
      },
    ],
  },

  images: {
    domains: ["swiperjs.com"],
  },
};

module.exports = nextConfig;
