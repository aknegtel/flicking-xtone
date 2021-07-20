// next.config.js
const withPlugins = require("next-compose-plugins");
const { i18n } = require("./next-i18next.config");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  i18n,
  webpack5: false,
  images: {
    deviceSizes: [640, 768, 1024, 1280, 1536, 2048],
    domains: ["localhost"],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(pdf|ico|txt)$/,
      use: [
        {
          loader: "ignore-loader",
        },
      ],
    });

    config.module.rules.push({
      test: /\.(gif|png|webp|jpe?g)$/i,
      use: [
        {
          loader: "lqip-modern-loader",
        },
      ],
    });

    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp|mp4)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/media/[name].[hash].[ext]",
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = withPlugins(
  [
    withBundleAnalyzer,
    // plugins here
  ],
  nextConfig
);
