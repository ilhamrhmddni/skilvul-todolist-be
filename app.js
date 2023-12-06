const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// const db = require('./config/db');
const allRoute = require('./routes');

// db.on('error', console.error.bind(console, 'Connection error:'));
// db.once('open', () => {
// 	console.log('Connected to MongoDB');
// });

app.use(express.json());
app.use(allRoute);

app.listen(PORT, () => {
	console.log('Server Berjalan di PORT : ' + PORT);
});
