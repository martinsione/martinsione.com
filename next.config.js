/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/Martin Sione - Resume.pdf",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/martinsione",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/martinsione",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
