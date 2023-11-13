'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pengguna extends Model {
    static associate(models) {
      // definisikan asosiasi di sini
      Pengguna.hasMany(models.Tugas, { foreignKey: 'id_penerima' });
    }
  }
  Pengguna.init({
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    kata_sandi: DataTypes.STRING,
    alamat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pengguna',
  });

  return Pengguna;
};
