require('dotenv').config();

const mongoose = require('mongoose');
const db_url = process.env.DB_URL;

mongoose.connect(db_url);

const db = mongoose.connection;

module.exports = db;
