const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.resolve(__dirname, './dist'),
};

module.exports = {
  externals: {
    paths: PATHS,
  },
  entry: {
    index: path.join(PATHS.src, '/app.tsx'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: path.join(PATHS.src, '/index.html'),
    }),
    new Dotenv(),
  ],
  output: {
    path: PATHS.dist,
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][hash][ext]',
        },
      },
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              dimensions: false,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|mp3)$/i,
        loader: 'file-loader',
        exclude: /node_modules/,
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
  },
};
