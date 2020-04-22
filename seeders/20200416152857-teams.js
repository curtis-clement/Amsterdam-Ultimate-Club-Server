"use strict";

const Team = require("../models").team;
console.log("Team", Team);

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const teams = await Promise.all([
      Team.upsert({
        name: "Open 1",
      }),
      Team.upsert({
        name: "Mixed 1",
      }),
      Team.upsert({
        name: "Women's 1",
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("teams", null, {});
  },
};
