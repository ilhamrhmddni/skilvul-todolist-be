const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();
const { Pengguna } = require('../models');

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await Pengguna.findOne({
            where: {
                email: email,
            },
        });

        if (!user) {
            return res.status(400).json({
                message: 'Akun tidak ditemukan',
            });
        }

        if (bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign({ id: user.id, email: email }, process.env.JWT_SECRET);
            return res.json({
                message: 'Login berhasil',
                token,
            });
        }

        res.json({
            message: 'Password salah',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Terjadi kesalahan server',
        });
    }
});

router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Cek apakah email sudah terdaftar
        const existingUser = await Pengguna.findOne({
            where: {
                email: email,
            },
        });

        if (existingUser) {
            // Jika email sudah terdaftar, kirim respon bahwa email sudah terdaftar
            return res.status(400).json({
                message: 'Email sudah terdaftar. Gunakan email lain.',
            });
        }

        // Email belum terdaftar, lakukan proses pendaftaran
        const saltRounds = 10;
        const hashPassword = bcrypt.hashSync(password, saltRounds);

        const createSuccess = await Pengguna.create({
            email: email,
            password: hashPassword,
            // tambahkan kolom lain sesuai kebutuhan
        });

        res.json({
            message: 'Registrasi berhasil',
            data: createSuccess,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Terjadi kesalahan server',
        });
    }
});

module.exports = router;
