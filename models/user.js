"use strict";

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    selfRating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  user.associate = function (models) {
    user.belongsToMany(models.team, {
      through: "joinTeam",
      foreignKey: "userId",
    });
  };
  return user;
};
