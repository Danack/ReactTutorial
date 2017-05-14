//var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

var BUILD_DIR = path.resolve(__dirname, "..", "public");
var APP_DIR = path.resolve(__dirname, "..", "src");
var webpackProdConfig = {
  entry: [
    APP_DIR + "/client"
  ],
  output: {
    filename: "client.bundle.js",
    path: BUILD_DIR,
    publicPath: "/"
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        include: APP_DIR,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader","css-loader?modules&importLoaders=1!postcss-loader")
      },
      {
        test: /\.(jp[e]?g|png|gif|svg)$/i,
        loader: "file-loader?name=img/[name].[ext]"
      },
      {
        test: /\.mp4$/,
        loader: 'file-loader?limit=10000&mimetype=video/mp4&name=videos/[name].[ext]'
      },
      {
        test: /\.html$/,
        loader: "file-loader?name=[name].[ext]"
      },
      {
        test: /\.ico$/,
        loader: "file-loader?name=[name].[ext]"
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  postcss: function () {
    return [require('autoprefixer'), require('precss')];
  },
  plugins: [
    new ExtractTextPlugin("all.bundle.css")
  ]
};

module.exports = webpackProdConfig;