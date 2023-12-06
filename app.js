const express = require('express');
const app = express();
const rootRoutes = require('./routes');

const PORT = process.env.PORT || 3000;

app.get(express.json());
app.use(rootRoutes);

app.listen(PORT, () => {
	console.log('Berhasil Terhubung ke Server');
});
