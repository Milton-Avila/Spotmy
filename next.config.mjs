/** @type {import('next').NextConfig} */

// next.config.mjs
export default {
    webpack(config, { isServer }) {
      // Adicione a regra de regex personalizada para os tipos de arquivos desejados
      config.module.rules.push({
        test: /\.(jpg|JPG|jpeg|png|gif|mp3|svg|ttf|woff2|woff|eot)$/i, // Regex para tipos de arquivos desejados
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: '/_next/static/', // Caminho público para os arquivos
              outputPath: `${isServer ? '../' : ''}static/`, // Caminho de saída para os arquivos
            },
          },
        ],
      });
  
      return config;
    },
  };
  