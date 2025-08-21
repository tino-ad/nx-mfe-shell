const { withModuleFederation } = require('@nx/angular/module-federation');
const mfConfig = require('./module-federation.config');

module.exports = withModuleFederation({
  ...mfConfig,
});