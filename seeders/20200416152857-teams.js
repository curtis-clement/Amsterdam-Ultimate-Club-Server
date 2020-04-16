'use strict';
const Team = require("../models").team;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await Promise.all([
      Team.upsert({
        name: 'Open 1'
      }),
      Team.upsert({
        name: 'Mixed 1'
      }),
      Team.upsert({
        name: "Women's 1"
      }),
    ]);
  },
    
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('teams', null, {});
  }
};
