'use strict';

module.exports = function (sequelize, DataTypes) {
  var Role = sequelize.define('role', {
    name: DataTypes.STRING
  });

  return Role;
};
