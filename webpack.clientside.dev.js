let path = require("path"),
  webpack = require('webpack'),
  autoprefixer = require('autoprefixer-core');

let CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  context: __dirname,

  //devtool: "eval-cheap-module-source-map",
  devtool: "source-map",

  entry: {
    index: './src/app.js',
    vendor: ['react', 'react-dom'],
  },

  output: {
    path: path.resolve('./www/js/'),
    filename: "[name].js"
  },

  plugins: [
    // new webpack.ProvidePlugin({
    //   React: "React", react: "React", "window.react": "React", "window.React": "React"
    // }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // new webpack.optimize.DedupePlugin(), //dedupe similar code
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      comments: false,
      sourceMap: false,
      minimize: true
    }),
    new webpack.optimize.AggressiveMergingPlugin(), //Merge chunks
    // new CompressionPlugin({
    //   asset: "[path].gz[query]",
    //   algorithm: "gzip",
    //   test: /\.js$|\.css$|\.html$/,
    //   threshold: 10240,
    //   minRatio: 0.8
    // }),
  ],


  module: {
    rules: [
      // SASS support: transform from SCSS into CSS
      { test: /\.scss$/, exclude: /node_modules/, loader: 'style!css!postcss!sass?sourceMap' },

      // Transpile Javascript with Babel
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015', 'react'], "comments": false} },

      // React support: transform JSX into JS
      { test: /.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015', 'react'], "comments": false}},

      // // Loader for fonts
      // { test: /\.woff2?($|\?)/, loader: "url?limit=10000&minetype=application/font-woff" },
      // { test: /\.ttf($|\?)/, loader: "url?limit=10000&minetype=application/octet-stream" },
      // { test: /\.eot($|\?)/, loader: "file" },
      // { test: /\.svg($|\?)/, loader: "url?limit=10000&minetype=image/svg+xml" },

      { test: /\.(sass|scss)$/, use: ['style-loader', 'css-loader', 'sass-loader', ] }
    ]
  },

  // Need to use some of your functions from a global namespace? Simply set output.library
  // within webpack.config.js:
  // output: {
  //   library: 'myClassName',
  // }
};