// TODO: this shouldn't be necessary... figure out why all non-test
// imports aren't being compiled by webpack (or are they?).
// require('babel/polyfill');

// Require all ".spec.js" files.
var context = require.context('.', true, /.+\.spec\.js?$/);
context.keys().forEach(context);
module.exports = context;
