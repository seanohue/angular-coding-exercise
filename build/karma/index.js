const path = require('path');
const webpack   = require('webpack');
const APP_ENTRY = 'app/test.js';
const WEBPACK_CONFIG = require('../webpack/make')('development');

module.exports = config => {
  config.set({
    files : [
      'app/index.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app/test.js'
    ],
    frameworks : ['chai', 'mocha'],
    preprocessors: {
      'app/**/*.js' : ['webpack']
    },
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      type : 'html',
      dir  : 'dist/coverage/'
    },
    browsers: ['PhantomJS'],
    singleRun : true,
    webpack : {
      resolve : WEBPACK_CONFIG.resolve,
      module : {
        loaders: WEBPACK_CONFIG.module.loaders
      }
    },
    webpackMiddleware : {
      noInfo : true
    },
    plugins: [
      require('karma-webpack'),
      require('karma-mocha'),
      require('karma-chai'),
      require('karma-coverage'),
      require('karma-phantomjs-launcher'),
      require('karma-spec-reporter')
    ]
  });
};
