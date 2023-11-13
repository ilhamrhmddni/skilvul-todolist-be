'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'john',
        email: 'john@example.com',
        password: bcrypt.hashSync("john123", 10),
        address: "123 Main Street",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'jane',
        email: 'jane@example.com',
        password: bcrypt.hashSync("jane123", 10),
        address: "456 Oak Avenue",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
