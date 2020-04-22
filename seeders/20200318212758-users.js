"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

const User = require("../models").user;

console.log("User", User);

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user = await Promise.all([
      User.upsert({
        firstName: "Curtis",
        lastName: "Clement",
        email: "curtis@email.com",
        password: bcrypt.hashSync("curtis1234", SALT_ROUNDS),
        phoneNumber: "31123456789",
        gender: "M",
        selfRating: 4,
      }),
      User.upsert({
        firstName: "Elwin",
        lastName: "Dirske",
        email: "elwin@email.com",
        password: bcrypt.hashSync("test1234", SALT_ROUNDS),
        phoneNumber: "31123456789",
        gender: "M",
        selfRating: 4,
      }),
      User.upsert({
        firstName: "Andrew",
        lastName: "McCue",
        email: "andrew@email.com",
        password: bcrypt.hashSync("andrew1234", SALT_ROUNDS),
        phoneNumber: "31123456789",
        gender: "M",
        selfRating: 4,
      }),
      User.upsert({
        firstName: "Andi",
        lastName: "Ganz",
        email: "andi@email.com",
        password: bcrypt.hashSync("andi1234", SALT_ROUNDS),
        phoneNumber: "31123456789",
        gender: "F",
        role: "member",
        selfRating: 5,
      }),
      User.upsert({
        firstName: "Jenny",
        lastName: "Fielder",
        email: "jenny@email.com",
        password: bcrypt.hashSync("jenny1234", SALT_ROUNDS),
        phoneNumber: "31123456789",
        gender: "F",
        selfRating: 4,
      }),
      User.upsert({
        firstName: "Marina",
        lastName: "Bellocchino",
        email: "marina@email.com",
        password: bcrypt.hashSync("marina1234", SALT_ROUNDS),
        phoneNumber: "31123456789",
        gender: "F",
        selfRating: 3,
      }),
      User.upsert({
        firstName: "Remy",
        lastName: "Felinski",
        email: "remy@email.com",
        password: bcrypt.hashSync("remy1234", SALT_ROUNDS),
        phoneNumber: "31123456789",
        gender: "M",
        selfRating: 3,
      }),
      User.upsert({
        firstName: "Casper",
        lastName: "Schmitt",
        email: "casper@email.com",
        password: bcrypt.hashSync("casper1234", SALT_ROUNDS),
        phoneNumber: "31123456789",
        gender: "M",
        selfRating: 5,
      }),
      User.upsert({
        firstName: "Wieke",
        lastName: "Beukema",
        email: "weike@email.com",
        password: bcrypt.hashSync("wieke1234", SALT_ROUNDS),
        phoneNumber: "31123456789",
        gender: "F",
        selfRating: 4,
      }),
      User.upsert({
        firstName: "Tjeerd",
        lastName: "Ates",
        email: "tjeerd@email.com",
        password: bcrypt.hashSync("tjeerd1234", SALT_ROUNDS),
        phoneNumber: "31123456789",
        gender: "M",
        selfRating: 5,
      }),
    ]);

    // console.log(`SEEDED: ${users.length} user`);
  },
  // module.exports = {
  //   up: (queryInterface, Sequelize) => {
  //     return queryInterface.bulkInsert(
  //       "user",
  //       [
  //         {
  //           firstName: "Casper",
  //           lastName: "Schmitt",
  //           email: "casper@email.com",
  //           password: bcrypt.hashSync("casper1234", SALT_ROUNDS),
  //           phoneNumber: "31123456789",
  //           gender: "M",
  //           selfRating: 5,
  //           createdAt: new Date(),
  //           updatedAt: new Date(),
  //         },
  //         {
  //           firstName: "asd",
  //           lastName: "asd",
  //           email: "asd@email.com",
  //           password: bcrypt.hashSync("casper1234", SALT_ROUNDS),
  //           phoneNumber: "12312312",
  //           gender: "M",
  //           selfRating: 5,
  //           createdAt: new Date(),
  //           updatedAt: new Date(),
  //         },
  //       ],
  //       {}
  //     );
  //   },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};

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
