// ------------------------------------
// Welcome!
// ------------------------------------
// This is the entry point for the core application logic in the GSTV
// front-end Angular coding exercise. In an effort to keep this project
// as open-ended as possible, we're providing the basic foundational
// pieces needed to get up and running so you don't have to spend your
// time configuring the more trivial aspects of the project.
//
// As a result, a lot of design decisions are made with the intent of
// making as few assumptions as possible, thereby allowing you to extend
// the application as you see fit. This is your sandbox, we've provided
// some basic tools but want to see how far you can take it. If you have
// any questions about what exactly the build system encompasses, you
// can refer to the project's README.

// Note that this build system uses Webpack with Babel, meaning you can
// - if you want - write ES6 code. As a result, you may see ES6-style
// imports used in place of the more traditional CommonJS style. Webpack
// supports all major import syntaxes (CommonJS, AMD, and ES6), so use
// whatever you're most comfortable with.

// Now that introductions are done, go have fun with it; coding exercises
// can be tough, so we want to cut down as much of the boilerplate as
// possible.

// ------------------------------------
// Vendor Imports
// Here we define all core libraries that are needed across
// the application as a whole. This includes key framework
// pieces such as Angular and utilities like lodash or Ramda.
// ------------------------------------
import angular from 'angular';
import 'angular-ui-router';
import 'babel/polyfill';

// ------------------------------------
// Global Style Imports
// ------------------------------------
import './app.scss';

// ------------------------------------
// Core Component Imports
// ------------------------------------
// If ES6 import statements are unfamiliar, this is equivalent to:
// var gsWelcomeModule = require('./welcome').name;
// ------------------------------------
import { name as gsWelcomeModule } from './directives/welcome';

// ------------------------------------
// Application Definition
// ------------------------------------
/* @ngInject */
function config ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('welcome', {
      url : '/',
      template : '<gs-welcome title="GSTV FE Coding Exercise"></gs-welcome>'
    });
  $urlRouterProvider.otherwise('/');
}

angular.module('GSTVApp', [
  'ui.router',
  gsWelcomeModule
])
  .config(config);
