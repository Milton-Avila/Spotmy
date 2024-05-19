/** @type {import('next').NextConfig} */

export default {
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.(jpg|jpeg|mp3)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/[path][name][ext]'
      },
    });
    return config;
  },
};
