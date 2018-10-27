const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './renderer/src/js/index.js',
  output: {
    path: path.join(__dirname, '/renderer/build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HTMLPlugin({
      template: './renderer/src/html/index.html',
    }),
  ],
  stats: 'errors-only',
  devServer: {
    port: 3000,
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: false,
      reasons: true,
      children: false,
      source: false,
      errors: true,
      errorDetails: true,
      warnings: true,
      publicPath: false,
    },
  },
};
