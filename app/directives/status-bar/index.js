import angular from 'angular';
import template from './status-bar.jade';
import './status-bar.scss';

function gsStatusBarController () {
  // noop
}

function gsStatusBar () {
  return {
    scope : {
      status : '=ngModel'
    },
    template : template,
    controller : gsStatusBarController,
    controllerAs : 'dm',
    bindToController : true
  };
}

export default angular.module('gstv.directives.statusBar', [])
  .directive('gsStatusBar', gsStatusBar);
