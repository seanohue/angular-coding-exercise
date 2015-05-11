const config  = require('./default');
const webpack = require('webpack');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = exports = {
  plugins : config.plugins.concat([
    new ngAnnotatePlugin({
      add: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      output : {
        'comments'  : false
      },
      compress : {
        'unused'    : true,
        'dead_code' : true
      }
    })
  ])
};
