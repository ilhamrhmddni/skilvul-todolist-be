'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tugas', {
      id_tugas: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      deskripsi_tugas: {
        allowNull: false,
        type: Sequelize.STRING
      },
      status_tugas: {
        allowNull: false,
        defaultValue: "aktif",
        type: Sequelize.STRING 
      },
      id_penerima: {
        allowNull: false,
        references: {
          model: 'Pengguna', 
          key: 'id_pengguna', 
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        type: Sequelize.INTEGER
      },
      waktu_dibuat: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') 
      },
      waktu_diperbarui: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') 
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tugas');
  }
};
