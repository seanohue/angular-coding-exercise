import angular from 'angular';
import template from './template.jade';

function CharacterCard () {
  return {
    restrict: 'E',
    scope: {
      character: '=ngModel'
    },
    template : template
  };
}

export default angular.module('gstv.directives.characterCard', [])
  .directive('characterCard', CharacterCard);

