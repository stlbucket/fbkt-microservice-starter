const appConfig = require('../index');

const R = require('ramda');

module.exports = R.merge(appConfig, {
  appRouteFilter: '*',
  restErrorMode: 'OPEN',
  defaultEntityControllerAuth: 'none',
  discoveryServiceUrl: 'http://localhost:20832'
});
