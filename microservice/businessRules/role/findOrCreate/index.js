"use strict";
const fbkt = require('fbkt');
const db = require('../../../db/index');

module.exports = (callInfo)=> {
  return fbkt().FbktPipe({
    name: 'findOneRole',
    filename: __filename,
    expectedParams: {},
    pipelineParams: {},
    pipelineSteps: {
      'findOneRole': function (callInfo) {
        return db.role.findOrCreate(callInfo.params);
      }
    }
  }, callInfo);
};