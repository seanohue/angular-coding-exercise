// ------------------------------------
// Developer Note
// ------------------------------------
// This file uses a special feature from Webpack's require statement
// in order to perform a deep search for all files that end in
// ".spec.js" in the ~/app. So if you want to add a new test, simply
// create a file named "<your-component>.spec.js" and it will automatically
// be included when the test suite is run.
// ------------------------------------
const context = require.context('.', true, /.+\.spec\.js?$/);

context.keys().forEach(context);

export default context;
