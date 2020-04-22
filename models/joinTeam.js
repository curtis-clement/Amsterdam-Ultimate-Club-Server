'use strict';

module.exports = (sequelize, DataTypes) => {
  const joinTeam = sequelize.define('joinTeam', {
    teamId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  joinTeam.associate = function(models) {
    joinTeam.belongsTo(models.team);
    joinTeam.belongsTo(models.user);
  };
  return joinTeam;
};