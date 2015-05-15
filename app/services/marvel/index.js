const MARVEL_ENDPOINT = 'http://gateway.marvel.com/v1/public';

class MarvelService {
  constructor ($http) {
    this._$http = $http;
  }

  get (resource) {
    return this.dispatch('GET', resource);
  }

  ping () {
    return this.get('characters');
  }

  dispatch (requestType, resource) {
    const endpoint = [MARVEL_ENDPOINT, resource].join('/');

    return this._$http[requestType.toLowerCase()](endpoint);
  }
}
MarvelService.$inject = ['$http'];

export default angular.module('gstv.services.marvel', [])
  .service('MarvelService', MarvelService);
