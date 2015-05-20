// NOTE: this file should be used instead of a regex in the karma config,
// as this this setup test changes won't have to re-run the entire suite.
var testsContext = require.context('.', true, /\.spec\.js$/);
testsContext.keys().forEach(context => require(context));

// TODO: this is supposed to work... need a polyfill?
// testsContext.keys().forEach(context);
