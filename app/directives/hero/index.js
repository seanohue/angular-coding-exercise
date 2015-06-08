// ------------------------------------
// Developer Note
// ------------------------------------
// Hey again, just a quick note about this directive...
// the whole point of this is to give you some sort of
// indication that the boilerplate application is working
// as expected. Don't hesitate to completely rip this
// apart or discard it as necessary, it exists only
// as a startup splash screen.
// ------------------------------------
import angular from 'angular';
import template from './hero.jade';
import { name as MarvelServiceModule } from 'services/marvel';
import { name as StatusBarModule } from 'directives/status-bar';
import './hero.scss';

/* @ngInject */
function gsHeroController (MarvelService) {
  const dm = this;
  dm.state = {};
  dm.character = {};


  dm.init = function () {
   dm.makeRequest(MarvelService._charID);
   console.log(character);
  };

  dm.portrait = function () {
    var url = [
        dm.character.thumbnail.path,
        'portrait_uncanny',
        dm.character.thumbnail.extension
      ].join('');
      console.log(url);
    return url;
  }

  dm.makeRequest = function (charID) {
    MarvelService.getCharacterById(charID)
      .success (function (data) {
        dm.character = data.data.results[0];
        console.log(data);
      })
  };

  dm.noResults = function () {
    console.log(dm.characters.length + '' + dm.searched);
    console.log((dm.characters.length === 0) && dm.searched)
    return (dm.characters.length === 0) && dm.searched;
  };



  

  dm.init();
}



function gsHero () {
  return {
    scope : {
      title : '@'
    },
    template : template,
    controller : gsHeroController,
    controllerAs : 'dm',
    bindToController : true
  };
}

export default angular.module('gstv.directives.hero', [
  MarvelServiceModule,
  StatusBarModule
])
  .directive('gsHero', gsHero);
