"use strict";
const should = require('should');
const sinon = require('sinon');
const uuid   = require('node-uuid')
const expect = require('chai').expect;
const fbkt   = require('fbkt');
const db = require('../../../db');

const pipeDef = require('./index');

describe.only(__filename, function () {
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

    sandbox.stub(db.role, 'findAll', () => {
      return Promise.resolve(allRoles);
    });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('find all roles', function (done) {
    const testId = uuid.v4();
    const user   = {login: "who@cares.com"};
    const params = {};

    const pipe = pipeDef();

    pipe.execute({
      user: user,
      params: params
    })
      .then((result)=> {
        fbkt().clog('FUNCTION BUCKET WORKSPACE', pipe.ws, true);
        expect(result).to.be.an('array');
        expect(result.length).to.be.ok;
        done();
      })
      .catch(error=> {
        fbkt().clog('UNEXPECTED ERROR', error);
        done(error);
      });

  });


});