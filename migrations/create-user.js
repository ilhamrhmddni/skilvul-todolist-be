'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pengguna', {
      id_pengguna: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      kata_sandi: {
        allowNull: false,
        type: Sequelize.STRING
      },
      alamat: {
        allowNull: false,
        type: Sequelize.STRING
      },
      waktu_dibuat: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      waktu_diperbarui: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pengguna');
  }
};
