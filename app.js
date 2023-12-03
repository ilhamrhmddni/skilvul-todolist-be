const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const db = require('./config/db');
const allRoute = require('./routes');

db.then(() => {
	console.log('Berhasil Connect Database');
}).catch(() => {
	console.log('Tidak Berhasil Connect Database');
});

app.use(express.json());
app.use(allRoute);

app.listen(PORT, () => {
	console.log('Server Berjalan di PORT : ' + PORT);
});
