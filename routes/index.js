const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');
const todoRouter = require('./todo-router');
const authRouter = require('./auth-router');
const userRouter = require('./user-router');

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

router.use('/auth', authRouter);
router.use('/todos', verifyToken, todoRouter);
router.use('/user', verifyToken, userRouter);

module.exports = router;
