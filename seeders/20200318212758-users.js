"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

/**
 * - importing the User model here to seed data
 * - that way createdAt and updatedAt are added for us
 */

const User = require("../models").user;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * using User.upsert & Promise.all to create users
     *
     * why:
     *
     * - allows us to run "npx sequelize-cli db:seed:all" multiple times
     * - without having to drop the database
     * - it also allows us to harcode the email and id we want
     * - we can now use these ids to seed related data in other seed files
     *
     * how .upsert works
     * - if a user with this email and id doesn't exist: create it
     * - if a user with this email and id does exist: update that user
     * - since we want to create multiple users this way we use Promise.all
     *
     * if you still get a: "ERROR: Validation error", while running this seed
     * - you might have a user with a different id that you're trying to give the same email
     * - you might have a user with a different email that you're trying to assign the same id
     *
     * how to solve the above error:
     *
     * - make sure the combination of id and email in this file are unique
     * - get rid of any duplicates by dropping the db, creating it again, migrating and seeding
     *
     * You can do this using:
     * npx sequelize-cli db:drop
     * npm run initdev (creates db, migrates & seeds)
     *
     */
    const users = await Promise.all([
      User.upsert({
        id: 1,
        firstName: "Curtis",
        lastName: 'Clement',
        email: "curtis@email.com",
        password: bcrypt.hashSync("curtis1234", SALT_ROUNDS),
        phoneNumber: '31123456789',
        gender: 'M',
        selfRating: 4
      }),
      User.upsert({
        id: 2,
        firstName: 'Elwin',
        lastName: 'Dirske',
        email: "elwin@email.com",
        password: bcrypt.hashSync("test1234", SALT_ROUNDS),
        phoneNumber: '31123456789',
        gender: 'M',
        selfRating: 4
      }),
      User.upsert({
        id: 3,
        firstName: 'Andrew',
        lastName: 'McCue',
        email: "andrew@email.com",
        password: bcrypt.hashSync("andrew1234", SALT_ROUNDS),
        phoneNumber: '31123456789',
        gender: 'M',
        selfRating: 4
      }),
      User.upsert({
        id: 4,
        firstName: 'Andi',
        lastName: 'Ganzy',
        email: "andi@email.com",
        password: bcrypt.hashSync("andi1234", SALT_ROUNDS),
        phoneNumber: '31123456789',
        gender: 'F',
        role: 'member',
        selfRating: 5
      }),
      User.upsert({
        id: 5,
        firstName: 'Jenny',
        lastName: 'Fielder',
        email: "jenny@email.com",
        password: bcrypt.hashSync("jenny1234", SALT_ROUNDS),
        phoneNumber: '31123456789',
        gender: 'F',
        selfRating: 4
      }),
      User.upsert({
        id: 6,
        firstName: 'Marina',
        lastName: 'Bellocchino',
        email: "marina@email.com",
        password: bcrypt.hashSync("marina1234", SALT_ROUNDS),
        phoneNumber: '31123456789',
        gender: 'F',
        selfRating: 3
      }),
      User.upsert({
        id: 7,
        firstName: 'Remy',
        lastName: 'Felinski',
        email: "remy@email.com",
        password: bcrypt.hashSync("remy1234", SALT_ROUNDS),
        phoneNumber: '31123456789',
        gender: 'M',
        selfRating: 3
      }),
      User.upsert({
        id: 8,
        firstName: 'Casper',
        lastName: 'Schmitt',
        email: "casper@email.com",
        password: bcrypt.hashSync("casper1234", SALT_ROUNDS),
        phoneNumber: '31123456789',
        gender: 'M',
        selfRating: 5
      }),
      User.upsert({
        id: 9,
        firstName: 'Wieke',
        lastName: 'Beukema',
        email: "weike@email.com",
        password: bcrypt.hashSync("wieke1234", SALT_ROUNDS),
        phoneNumber: '31123456789',
        gender: 'F',
        selfRating: 4
      }),
      User.upsert({
        id: 10,
        firstName: 'Tjeerd',
        lastName: 'Ates',
        email: "tjeerd@email.com",
        password: bcrypt.hashSync("tjeerd1234", SALT_ROUNDS),
        phoneNumber: '31123456789',
        gender: 'M',
        selfRating: 5
      }),
    ]);

    console.log(`SEEDED: ${users.length} users`);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
