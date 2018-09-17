const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './views/src/js/index.js',
  output: {
    path: path.join(__dirname, '/views/build'),
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
      template: './views/src/html/index.html',
    }),
  ],
  stats: 'errors-only',
  devServer: {
    port: 3000,
    open: true,
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
