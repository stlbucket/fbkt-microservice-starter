'use strict';
const fbkt = require('fbkt');
const registerPermissionService = require('./registerPermissionService/index');
const stubDataServices = require('./stubDataServices/index');

function startPermissionService (callInfo) {
  return fbkt().FbktPipe({
    name: 'startPermissionService',
    filename: __filename,
    exitProcessOnError: false,
    expectedParams: {},
    pipelineParams: {},
    pipelineSteps: {
      // 'registerPermissionService': registerPermissionService,
      'stubDataServices': (callInfo) => {
        if (process.env.NODE_ENV === 'dev') {
          return stubDataServices(callInfo);
        }
      }
    }
  }, {});
};


module.exports = () => {
  return startPermissionService();
};