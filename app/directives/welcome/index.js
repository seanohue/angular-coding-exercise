import angular from 'angular';
import template from './template.jade';
import CharacterCard from '../character-card';
import MarvelService from '../../services/marvel';
import './style.scss';

/* @ngInject */
function gsWelcomeController (MarvelService) {
  const dm = this;

  dm.init = function () {
    console.info(`Welcome to the ${dm.title}!`);
    setTimeout(dm.pingMarvelService, 1000); // for dramatic effect

    //Get characters and set to dm
    MarvelService.getCharacters().then(
      resp => dm.characters = resp.data.data.results);
  };

  dm.pingMarvelService = function () {
    dm.connection = { complete : false };

    MarvelService.ping()
      .then(() => dm.connection.success = true)
      .catch(() => dm.connection.error = true)
      .finally(() => dm.connection.complete = true);
  };

  dm.clickCharacter = function (character) {
    dm.selected = character;
  }
  
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

export default angular.module('gstv.directives.welcome', [
  MarvelService.name,
  CharacterCard.name
])
  .directive('gsWelcome', gsWelcome);
