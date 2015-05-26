/* jshint ignore:start */
// A marvel.auth.js file is required in ~/app/config. Please refer to
// the README for more information on what to export from it.
// Once it's been created, please uncomment the line below so this
// module can import your authentication keys.
// -------------------------------------------------
// import AUTH_KEYS from '../../config/marvel.auth';
// -------------------------------------------------
const AUTH_KEYS = 'AUTH_KEY_FROM_MARVEL_AUTH';
const API_PARAM = 'apikey';

export default () => {
  if (AUTH_KEYS && AUTH_KEYS.get('public')) {
    return {
      'request' : (config) => {
        config.params = config.params || {};
        config.params[API_PARAM] = AUTH_KEYS.get('public');
        return config;
      }
    };
  } else {
    console.warn([
      'Could not find Marvel API keys. Please make sure these are available',
      'within ~/app/config/marvel.auth.js -- See the application README for',
      'more details on registering and configuring the Marvel API.'
    ].join(' '));
    return {};
  }
};
/* jshint ignore:end */