import angular from 'angular';
import template from './template.jade';
import './style.scss';

function gsWelcomeController () {
  const dm = this;

}

function gsWelcome () {
  return {
    scope : {
      title : '@'
    },
    template : template,
    controller : gsWelcomeController,
    controllerAs : 'dm',
    bindToController : true
  };
}

export default angular.module('gstv.directives.welcome', [])
  .directive('gsWelcome', gsWelcome);
