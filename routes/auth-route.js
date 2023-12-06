const express = require('express');
const route = express.Router();

const { login, registrasi } = require('../controllers/auth-controller');

route.post('/login', login);
route.post('/registrasi', registrasi);

module.exports = route;
