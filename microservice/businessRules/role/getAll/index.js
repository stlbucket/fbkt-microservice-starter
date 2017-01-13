"use strict";
const fbkt = require('fbkt');
const db = require('../../../db/index');

module.exports = ()=> {
  return fbkt().FbktPipe({
    name: 'getAllRoles',
    filename: __filename,
    expectedParams: {},
    pipelineParams: {},
    pipelineSteps: {
      'getAllRoles': function (callInfo) {
        return db.role.findAll();
      }
    }
  }, {});
};