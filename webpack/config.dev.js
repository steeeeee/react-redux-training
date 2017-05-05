const path = require('path');
const webpack = require('webpack');

const assetsPath = path.resolve(__dirname, '../public/assets');

const { webpackHost, webpackPort } = require('../config/config.env');

module.exports = {
  devtool: 'inline-source-map',
  context: path.resolve(__dirname, '..'),
  entry: {
    main: [
      `webpack-hot-middleware/client?path=http://${webpackHost}:${webpackPort}/__webpack_hmr`, './src/index.js',
    ],
  },
  output: {
    path: assetsPath,
    filename: '[name].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: `http://${webpackHost}:${webpackPort}/assets/`,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
      },
    ],
  },
  resolve: {
    modules: [
      'src',
      'node_modules',
    ],
    extensions: [
      '.json',
      '.js',
      '.jsx',
    ],
  },
  plugins: [
    // Hot Reload
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(/webpack-stats\.json$/),
  ],
};
