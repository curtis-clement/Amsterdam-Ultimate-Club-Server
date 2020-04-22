'use strict';

module.exports = (sequelize, DataTypes) => {
  const team = sequelize.define(
    'team', 
    {
    name: DataTypes.STRING
  });

  team.associate = function(models) {
    team.belongsToMany(models.user, 
      {
        through: 'joinTeam',
        foreignKey: 'teamId'
      });
  };
  return team;
};