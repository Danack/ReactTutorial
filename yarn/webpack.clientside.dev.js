let path = require("path");
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let GoogleFontsPlugin = require("google-fonts-webpack-plugin");
let WebpackShellPlugin = require('./WebpackShellPlugin.js');

module.exports = {
  context: __dirname,

  //devtool: "eval-cheap-module-source-map",
  devtool: "source-map",

  entry: {
    app: '../public/js_src/app.js',
    vendor: ['react', 'react-dom'],
  },

  output: {
    path: path.resolve('./public/'),
    filename: "js/[name].js"
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'js/vendor.js' }),
    new ExtractTextPlugin({
      filename: 'styles/[name].css',
      disable: false,
      allChunks: true
    }),

    // This relies on https://google-webfonts-helper.herokuapp.com/fonts being available, probably
    new GoogleFontsPlugin({
        fonts: [
            { family: "Open Sans" },
            { family: "Roboto" }
        ],
        formats: [ "eot", "woff", "woff2", "ttf", "svg" ],

        // By default, the files built are public/fonts.css and font files are
        // in public/font e.g. public/font/OpenSans-Regular.ttf


        // With this setting:
        // filename: 'styles/fonts.css',
        // the files built are public/styles/fonts.css and font files are
        // in public/font e.g. public/font/OpenSans-Regular.ttf
        // however the CSS is to url("./font/OpenSans-Regular.ttf") so it tries to
        // load the fonts from /styles/font/OpenSans-Regular.woff


        // With this setting:
        // filename: 'styles/fonts.css',
        // path: '../font/',
        // The generated CSS point to the fonts with
        // url("./../font/Roboto-Regular.woff") which is approximate correct
        // However the fonts are built to outside of the public directory





    }),
    new WebpackShellPlugin({
        onBuildStart: ['echo "hello world"'],
        onBuildEnd: ['echo "goodbye world"']
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
    ]
  },

  // Need to use some of your functions from a global namespace? Simply set output.library
  // within webpack.config.js:
  // output: {
  //   library: 'myClassName',
  // }
};