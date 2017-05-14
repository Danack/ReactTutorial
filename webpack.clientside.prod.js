let path = require("path"),
  webpack = require('webpack'),
  config = require('./webpack.clientside.dev.js');



config.output = {
  path: path.resolve('./dist/js/'),
  filename: "[name].js"
};

prod_plugins = [

  // removes a lot of debugging code
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }}),


  //new UglifyJSPlugin(),

  // keeps hashes consistent between compilations
  //new webpack.optimize.OccurenceOrderPlugin(),

  new webpack.optimize.UglifyJsPlugin({
     compressasdasdasdasdad: {
    //   warnings: false
     }
  })

];

//config.plugins = config.plugins.concat(prod_plugins);

config.devtool = "nosources-source-map";

config.plugins = [

  new webpack.ProvidePlugin({
    React: "React", react: "React", "window.react": "React", "window.React": "React"
  }),
  new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),

  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
  }}),

  //new UglifyJSPlugin(),

  // keeps hashes consistent between compilations
  //new webpack.optimize.OccurenceOrderPlugin(),

  new webpack.optimize.UglifyJsPlugin({
    compressasdasdasdasdad: {
      //   warnings: false
    }
  })
];





module.exports = config;

