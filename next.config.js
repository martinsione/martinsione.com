const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
module.exports = withContentlayer({
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
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        "react/jsx-runtime.js": "preact/compat/jsx-runtime",
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    return config;
  },
});
