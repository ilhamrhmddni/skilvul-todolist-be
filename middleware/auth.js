const jwt = require('jsonwebtoken');

// Menggunakan nilai dari variabel lingkungan atau nilai default jika tidak ada
const SECRET_KEY = process.env.JWT_SECRET || "your_default_secret_key";

const verifyToken = (req, res, next) => {
    const header = req.headers.authorization;

    if (!header) {
        return res.status(401).json({
            message: "Header tidak terdefinisi"
        });
    }

    const token = header.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            message: "Token tidak valid"
        });
    }

    try {
        // Verifikasi token dan ekstrak informasi pengguna
        const payload = jwt.verify(token, SECRET_KEY);

        // Set informasi pengguna di objek permintaan (request)
        req.payload = payload;

        // Lanjutkan ke middleware atau penanganan rute berikutnya
        next();
    } catch (error) {
        console.error(error);

        // Tampilkan pesan kesalahan yang lebih spesifik
        let errorMessage = "Terjadi kesalahan saat memverifikasi token";
        if (error.name === 'TokenExpiredError') {
            errorMessage = "Token telah kadaluarsa";
        }

        return res.status(403).json({
            message: errorMessage,
            error: error.message
        });
    }
};

module.exports = verifyToken;
