"use strict";
const fbkt = require('fbkt');
const sinon = require('sinon');
const db = require('../../db/index');

const dataStore = require('./dataStore/index');
let sandbox;

module.exports = (callInfo)=> {
  return fbkt().FbktPipe({
    name: 'stubDataServices',
    filename: __filename,
    expectedParams: {},
    pipelineParams: {},
    pipelineSteps: {
      'createSandbox': callInfo => {
        sandbox = sinon.sandbox.create();
      },
      'stubRoleFindAll': callInfo => {
        sandbox.stub(db.role, 'findAll', () => {
          return Promise.resolve(dataStore.getAllRoles());
        });
      },
      'stubRoleFindOne': callInfo => {
        sandbox.stub(db.role, 'findOne', (params) => {
          return Promise.resolve(dataStore.findRole(params.where.name));
        });
      },
      'stubRoleFindOrCreate': callInfo => {
        sandbox.stub(db.role, 'findOrCreate', (params) => {
          console.log('FIND OR CREATE', params);
          let role = dataStore.findRole(params.where.name);
          if (!role) {
            role = dataStore.addRole({ name: params.where.name });
          }
          return Promise.resolve(role);
        });
      }
    }
  }, callInfo);
};