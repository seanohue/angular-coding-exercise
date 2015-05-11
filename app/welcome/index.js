import angular from 'angular';
import template from './template.jade';
import './style.scss';

function gsWelcomeController () {
  const dm = this;

  dm.init = function () {
    console.log(`Welcome to the ${dm.title}!`);
  };

  dm.init();
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
