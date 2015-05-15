import AUTH_KEYS from '../../config/marvel.auth';
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
