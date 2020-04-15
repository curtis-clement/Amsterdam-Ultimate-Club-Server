'use strict';
module.exports = (sequelize, DataTypes) => {
  const teams = sequelize.define('team', {
    name: DataTypes.STRING
  }, {});
  teams.associate = function(models) {
    // associations can be defined here
  };
  return teams;
};