import angular from 'angular';
import template from './template.jade';

function gsCharacterCard () {
  return {
    restrict: 'E',
    template : template
  };
}

export default angular.module('gstv.directives.characterCard', [])
  .directive('gsCharacterCard', gsCharacterCard);
