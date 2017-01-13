'use strict';

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  });

  return User;
};
