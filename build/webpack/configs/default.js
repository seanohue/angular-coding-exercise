const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// path helpers
const root = path.resolve(__dirname, '../../../');
const resolve = function (localPath) {
  return path.resolve(root, localPath);
};

module.exports = exports = {
  entry : {
    app : [
      resolve('app/index')
    ],
    vendor : ['angular', 'angular-ui-router']
  },
  output : {
    path : resolve('dist'),
    filename : '[name].js'
  },
  target  : 'web',
  plugins : [
    new webpack.DefinePlugin({
      'process.env' : {
        'NODE_ENV' : JSON.stringify(env)
      },
      '__PROD__' : env === 'production',
      '__DEV__'  : env === 'development'
    }),
    new ExtractTextPlugin('[name].[contenthash].css'),
    new HtmlWebpackPlugin({
      template : resolve('app/index.html'),
      hash : true
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', '[name].js'),
    new webpack.optimize.DedupePlugin()
  ],
  resolve : {
    extensions : ['', '.js', '.jsx']
  },
  module : {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'jshint'
    }],
    loaders : [{
      test : [/\.js?$/],
      loaders : ['babel'],
      include : resolve('app')
    }, {
      test : [/\.scss?$/],
      loader : ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
      include : resolve('app')
    }, {
      test : [/\.jade?$/],
      loaders : ['jade'],
      include : resolve('app')
    }]
  },
  jshint: {
    emitErrors : false,
    failOnHint : false,
    reporter   : require('jshint-loader-stylish')()
  }
};
