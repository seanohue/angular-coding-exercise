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
function gsHeroController (MarvelService,$state) {
  const dm = this;
  dm.state = {};
  dm.character = {};
  dm.service = MarvelService;

  dm.init = function () {
    var selection = dm.service.getSelectedChar();
    setTimeout(dm.makeRequest(selection), 1000); 
  };

  dm.portrait = function () {
    var url = [
        dm.character.thumbnail.path,
        '/portrait_uncanny.',
        dm.character.thumbnail.extension
      ].join('');
      console.log(url);
    return url;
  };

  dm.describe = function () {
    if (dm.character.description === ''){
      return [
        dm.character.name,
        " enjoys long walks on the beach,",
        " kicking butt with super powers,",
        " and craft beer."
        ].join('');
    }
    return dm.character.description;
  };

  dm.makeRequest = function (charID) {
    dm.state.connection = {};
    console.log('attempting to get information...');
    dm.service.getCharacterById(charID)
      .then(function (data) {
        console.log(data);
        dm.character = data.data.data.results[0];
        console.log(dm.character);
       })
      .then(() => dm.state.connection.success = true)
      .catch(() => dm.state.connection.error = true)
      .finally(() => dm.state.connection.complete = true)      
  };

  dm.back = function () {
    $state.go('welcome');
  };

  dm.makeSampleRequest = function () {
    dm.state.connection = {};

    // ping a known-good endpoint
    dm.service.getCharacters()
    console.log('Controller query = '+dm.search);
  };

  dm.noAppearances = function () {
    console.log(dm.character.series.items.length() === 0);
    return (dm.character.series.items.length() === 0);
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
