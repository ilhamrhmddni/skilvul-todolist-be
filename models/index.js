'use strict';

require('dotenv').config()

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const configDatabase = require(__dirname + '/../config/config.js')[env];
const database = {};

let sequelize;
if (configDatabase.use_env_variable) {
  sequelize = new Sequelize(process.env[configDatabase.use_env_variable], configDatabase);
} else {
  sequelize = new Sequelize(configDatabase.database, configDatabase.username, configDatabase.password, configDatabase);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    database[model.name] = model;
  });

Object.keys(database).forEach(modelName => {
  if (database[modelName].associate) {
    database[modelName].associate(database);
  }
});

database.sequelize = sequelize;
database.Sequelize = Sequelize;

module.exports = database;
