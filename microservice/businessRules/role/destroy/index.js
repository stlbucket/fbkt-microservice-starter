"use strict";
const fbkt = require('fbkt');
const db = require('../../../db/index');

module.exports = (callInfo)=> {
  return fbkt().FbktPipe({
    name: 'destroyRole',
    filename: __filename,
    expectedParams: {},
    pipelineParams: {},
    pipelineSteps: {
      'destroyRole': function (callInfo) {
        return db.role.destroy(callInfo.params);
      }
    }
  }, callInfo);
};