let path = require("path");
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,

  //devtool: "eval-cheap-module-source-map",
  devtool: "source-map",

  entry: {
    app: './public/js_src/app.js',
    vendor: ['react', 'react-dom'],
  },

  output: {
    path: path.resolve('./public/'),
    filename: "js_dev/[name].js"
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),
    new ExtractTextPlugin({
      filename: 'styles/[name].css',
      disable: false,
      allChunks: true
    })
  ],

  module: {
    rules: [
      // SASS support: transform from SCSS into CSS
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('css-loader!sass-loader') },

      // Transpile Javascript with Babel
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015', 'react'], "comments": false} },

      // React support: transform JSX into JS
      { test: /.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015', 'react'], "comments": false}},

      // // Loader for fonts
      // { test: /\.woff2?($|\?)/, loader: "url?limit=10000&minetype=application/font-woff" },
      // { test: /\.ttf($|\?)/, loader: "url?limit=10000&minetype=application/octet-stream" },
      // { test: /\.eot($|\?)/, loader: "file" },
      // { test: /\.svg($|\?)/, loader: "url?limit=10000&minetype=image/svg+xml" },

      // // I want to uglify with mangling only app files, not thirdparty libs
      // { test: /.*\/app\/.*\.js$/, loader: "uglify-loader", exclude: /.spec.js/}
    ]
  },

  // Need to use some of your functions from a global namespace? Simply set output.library
  // within webpack.config.js:
  // output: {
  //   library: 'myClassName',
  // }
};