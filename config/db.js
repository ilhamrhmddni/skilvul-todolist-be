require('dotenv').config();

const mongoose = require('mongoose');
const db_url = process.env.DB_URL;
const db = mongoose.connect(db_url);

module.exports = db;
