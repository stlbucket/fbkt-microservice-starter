"use strict";
const should = require('should');
const sinon = require('sinon');
const uuid   = require('node-uuid')
const expect = require('chai').expect;
const fbkt   = require('fbkt');
const db = require('../../../db/index');

const pipeDef = require('./index');

describe(__filename, function () {
  let allRoles = [
    {
      name: 'SysAdmin'
    },
    {
      name: 'Ambassador'
    },
    {
      name: 'Spa Provider'
    },
    {
      name: 'Personal Trainer'
    }
  ];
  let sandbox;

  beforeEach(function () {
    sandbox = sinon.sandbox.create();

    sandbox.stub(db.role, 'findOne', (params) => {
      const foundRole = allRoles.find(role => role.name === params.where.name);
      return Promise.resolve(foundRole);
    });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('find one role', function (done) {
    const testId = uuid.v4();
    const user   = {login: "who@cares.com"};
    const params = {
      where: {
        name: 'SysAdmin'
      }
    };

    const pipe = pipeDef();

    pipe.execute({
      user: user,
      params: params
    })
      .then((result)=> {
        fbkt().clog('FUNCTION BUCKET WORKSPACE', pipe.ws, true);
        expect(result).to.be.an('object');
        expect(result.name).to.equal(params.where.name);
        done();
      })
      .catch(error=> {
        fbkt().clog('UNEXPECTED ERROR', error);
        done(error);
      });

  });


});