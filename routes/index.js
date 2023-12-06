const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
	res.json('Bershasil Terhubung Ke Root Routes');
});

// route.use('/user', userRoutes);

module.exports = route;
