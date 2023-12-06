const express = require('express');
const route = express.Router();

// const userRoute = require('./user-route');
// const authRoute = require('./auth-route');
// const todoRoute = require('./todo-route');

route.get('/', (req, res) => {
	res.json('Ini Route');
});

// route.use('/auth', authRoute);
// route.use('/user', userRoute);
// route.use('/todo', todoRoute);

module.exports = route;
