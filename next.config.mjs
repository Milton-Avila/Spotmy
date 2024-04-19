/** @type {import('next').NextConfig} */

// next.config.mjs
export default {
    webpack(config, { isServer }) {
      config.module.rules.push({
        test: /\.(jpg|jpeg|mp3)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: '/_next/static/',
              outputPath: `${isServer ? '../' : ''}static/`,
            },
          },
        ],
      });
  
      return config;
    },
  };
  