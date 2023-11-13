const express = require('express');
const app = express();
const db = require('./models/index.js');
const User = require('./models/Pengguna.js')
const rootRoutes = require('./routes/index.js');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(rootRoutes);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log("server running on port : " + PORT);
    });
});