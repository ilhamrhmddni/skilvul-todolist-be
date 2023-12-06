const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');
const todoRouter = require('./todo-router');
const authRouter = require('./auth-router');
const userRouter = require('./user-router');

<<<<<<< HEAD
// const userRoute = require('./user-route');
// const authRoute = require('./auth-route');
// const todoRoute = require('./todo-route');

route.get('/', (req, res) => {
	res.json('Ini Route');
});

// route.use('/auth', authRoute);
// route.use('/user', userRoute);
// route.use('/todo', todoRoute);
=======
router.get('/', (req, res) => {
    res.json({
        pesan: "Selamat datang di server",
        versi: "1.0",
        dokumentasi: "Tautan ke dokumentasi Anda"
    });
});

// Middleware untuk menangani kesalahan
router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        pesan: 'Terjadi kesalahan server',
        error: err.message
    });
});
>>>>>>> parent of 6fbf689 (migrasi > mongodb)

router.use('/auth', authRouter);
router.use('/todos', verifyToken, todoRouter);
router.use('/user', verifyToken, userRouter);

module.exports = router;
