"use strict";
const expect = require('chai').expect;
const uuid   = require('node-uuid');
const fbkt   = require('fbkt');

const target = require('./index');

describe(__filename, function () {

  it('get all security groups', done => {
    const roles = target.getAllRoles();
    expect(roles).to.be.an('array');
    expect(roles.length).to.be.ok;
    done();
  });

  it('add a role', done => {
    const testRole = { name: uuid.v4()};
    const role = target.addRole(testRole);
    expect(role.name).to.equal(testRole.name);

    const foundRole = target.findRole(testRole.name);
    expect(foundRole.name).to.equal(testRole.name);

    target.removeRole(testRole.name);

    const notFoundRole = target.findRole(testRole.name);
    expect(notFoundRole).to.not.be.ok;

    done();
  });

  it('get all users', done => {
    const users = target.getAllRoles();
    expect(users).to.be.an('array');
    expect(users.length).to.be.ok;
    done();
  });

  it('add a user', done => {
    const testUser = {
      firstName: 'UNIT',
      lastName: 'TEST',
      email: `${uuid.v4()}@villatest.com`
    };
    const user      = target.addUser(testUser);
    expect(user.email).to.equal(testUser.email);

    const foundUser = target.findUser(testUser.email);
    expect(foundUser.email).to.equal(testUser.email);

    target.removeUser(testUser.email);

    const notFoundUser = target.findUser(testUser.email);
    expect(notFoundUser).to.not.be.ok;

    done();
  });

  it('assign user to role', done => {
    const testUser = {
      firstName: 'UNIT',
      lastName: 'TEST',
      email: `${uuid.v4()}@villatest.com`
    };
    const testRole = {name: uuid.v4()};
    const user     = target.addUser(testUser);
    expect(user.email).to.equal(testUser.email);

    const role = target.addRole(testRole);
    expect(role.name).to.equal(testRole.name);

    const assignedUserToRole = target.assignUserToRole(user, role);
    expect(assignedUserToRole).to.equal(true);

    const foundUser = target.findUser(testUser.email);
    expect(foundUser.email).to.equal(testUser.email);
    const foundRole = foundUser.roles.find(userRole => userRole.name === role.name);
    expect(foundRole).to.be.ok;

    done();
  });

});