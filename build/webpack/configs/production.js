const config  = require('./default');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = exports = {
  plugins : config.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      output : {
        'comments'  : false
      },
      compress : {
        'unused'    : true,
        'dead_code' : true
      }
    }),
    new ExtractTextPlugin('[name].[contenthash].css')
  ]),
  loaders : config.module.loaders.map(loader => {

    // compile css to a separate file
    if (/\.scss/.test(loader.test)) {
      loader.loader = ExtractTextPlugin.extract(
        loader.loaders[0], loader.loaders.slice(1).join('!')
      );
    }
    // run ng-annotate
    else if (/\.js/.test(loader.test)) {
      loader.loaders.unshift('ng-annotate');
    }

    return loader;
  })
};
