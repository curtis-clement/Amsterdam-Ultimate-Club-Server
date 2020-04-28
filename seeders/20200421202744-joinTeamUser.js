"use strict";

const joinTeam = require("../models").joinTeam;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("joinTeams", [
      {
        teamId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        teamId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        teamId: 1,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        teamId: 1,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        teamId: 1,
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        teamId: 1,
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        teamId: 1,
        userId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        teamId: 1,
        userId: 8,
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
        teamId: 1,
        userId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        teamId: 2,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        teamId: 2,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        teamId: 2,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        teamId: 2,
        userId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        teamId: 2,
        userId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        teamId: 2,
        userId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        teamId: 3,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        teamId: 3,
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        teamId: 3,
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        teamId: 3,
        userId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("joinTeams", null, {});
  },
};
