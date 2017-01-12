"use strict";
const fbkt = require('fbkt');
const registerPermissionService = require('./registerPermissionService');

function startPermissionService (callInfo) {
  return fbkt().FbktPipe({
    name: 'startPermissionService',
    filename: __filename,
    exitProcessOnError: false,
    expectedParams: {},
    pipelineParams: {},
    pipelineSteps: {
      "registerPermissionService": registerPermissionService
    }
  }, {});
};


module.exports = () => {
  return startPermissionService();
};