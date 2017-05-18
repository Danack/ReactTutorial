let path = require("path"),
  webpack = require('webpack'),
  config = require('./webpack.clientside.dev.js');


let CompressionPlugin = require("compression-webpack-plugin");

config.output = {
  path: path.resolve('./www/js_dist/'),
  filename: "[name].js"
};

config.devtool = "nosources-source-map";

config.plugins = [
  new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),

  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
  }}),

  new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),

  // keeps hashes consistent between compilations
  //new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
    mangle: true,
    comments: false,
    sourceMap: false,
    minimize: true
  }),

  new CompressionPlugin({
    asset: "[path].gz[query]",
    algorithm: "gzip",
    test: /\.(js|html)$/,
    threshold: 10240,
    minRatio: 0.8
  })
];


module.exports = config;

