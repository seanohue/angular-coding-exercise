import angular from 'angular';
import MarvelApiInterceptor from './interceptor';
const MARVEL_API = 'http://gateway.marvel.com/v1/public';

// ------------------------------------
// Marvel Service Definition
// ------------------------------------
class MarvelService {
  constructor ($http) {
    this._$http = $http;
  }

  get (resource, config) {
    return this.dispatch('GET', resource, config);
  }

  ping () {
    return this.get('characters');
  }

  dispatch (requestType, resource, config) {
    const endpoint = [MARVEL_API, resource].join('/');

    return this._$http[requestType.toLowerCase()](endpoint, config);
  }
}
MarvelService.$inject = ['$http'];

// ------------------------------------
/* @ngInject */
function config ($httpProvider) {
  $httpProvider.interceptors.push(MarvelApiInterceptor);
}

export default angular.module('gstv.services.marvel', [])
  .service('MarvelService', MarvelService)
  .config(config);
