'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tugas extends Model {
    static associate(models) {
      // definisikan asosiasi di sini
      Tugas.belongsTo(models.Pengguna, { foreignKey: 'id_penerima' })
    }
  }
  Tugas.init({
    deskripsi_tugas: DataTypes.STRING,
    status_tugas: DataTypes.STRING,
    id_penerima: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tugas',
  });

  return Tugas;
};
