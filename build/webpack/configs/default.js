const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const node_env = NODE_ENV.toLowerCase();

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
    filename : '[name].[hash].js'
  },
  target  : 'web',
  plugins : [
    new webpack.DefinePlugin({
      'process.env' : {
        'NODE_ENV' : JSON.stringify(node_env)
      },
      '__PROD__' : node_env === 'production',
      '__DEV__'  : node_env === 'development'
    }),
    new HtmlWebpackPlugin({
      template : resolve('app/index.html'),
      hash : true
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', '[name].[hash].js'),
    new webpack.optimize.DedupePlugin()
  ],
  resolve : {
    extensions : ['', '.js', '.jsx'],
    alias : {
      config     : resolve('app/config'),
      directives : resolve('app/directives'),
      factories  : resolve('app/factories'),
      filters    : resolve('app/filters'),
      providers  : resolve('app/providers'),
      services   : resolve('app/services')
    }
  },
  module : {
    preLoaders : [{
      test : /\.js$/,
      exclude : /node_modules/,
      loader : 'jshint'
    }],
    loaders : [{
      test : /\.js?$/,
      loaders : ['babel'],
      include : resolve('app')
    }, {
      test : /\.scss?$/,
      loaders : [
        'style-loader',
        'css-loader',
        'autoprefixer?browsers=last 2 version',
        'sass-loader'
      ],
      include : resolve('app')
    }, {
      test : /\.jade?$/,
      loaders : ['jade'],
      include : resolve('app')
    },
    // Bootstrap-specific Loaders
    {
      test : /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loaders : ['url?limit=10000&mimetype=application/font-woff']
    },
    {
      test : /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loaders : ['url?limit=10000&mimetype=application/octet-stream']
    },
    {
      test : /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loaders : ['file']
    },
    {
      test : /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loaders : ['url?limit=10000&mimetype=image/svg+xml']
    }]
  },
  jshint : {
    emitErrors : false,
    failOnHint : false,
    reporter   : require('jshint-loader-stylish')()
  }
};
