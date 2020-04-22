"use strict";

const joinTeam = require("../models").joinTeam;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("joinTeams", [
      {
        teamId: 1,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        teamId: 1,
        userId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        teamId: 1,
        userId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        teamId: 2,
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        teamId: 2,
        userId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("joinTeams", null, {});
  },
};
