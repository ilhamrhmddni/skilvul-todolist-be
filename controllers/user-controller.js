const bcrypt = require('bcrypt');
const { User, Tugas } = require('../models');

module.exports = {
    ambilSemuaPengguna: async (req, res) => {
        const pengguna = await User.findAll({ include: Tugas });

        res.json({
            message: "Berhasil mendapatkan data pengguna",
            data: pengguna
        });
    },

    ambilPenggunaById: async (req, res) => {
        const idPengguna = req.params.id;

        try {
            // Temukan pengguna berdasarkan ID
            const pengguna = await User.findByPk(idPengguna, { include: Tugas });

            if (!pengguna) {
                return res.status(404).json({
                    message: 'Pengguna tidak ditemukan'
                });
            }

            res.status(200).json({
                message: 'Berhasil mendapatkan pengguna',
                data: pengguna
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Terjadi kesalahan server'
            });
        }
    },

    buatPengguna: async (req, res) => {
        let data = req.body;

        try {
            // hash password
            const hashPassword = bcrypt.hashSync(data.password, 10);
            data.password = hashPassword;

            // input data
            await User.create(data);

            // send response
            res.status(201).json({
                message: "Berhasil menambahkan pengguna"
            });

        } catch {
            res.json({
                message: "Gagal menambahkan pengguna"
            });
        }
    },

    perbaruiPengguna: async (req, res) => {
        const idPengguna = req.params.id;
        const data = req.body;

        try {
            // Temukan pengguna berdasarkan ID
            const pengguna = await User.findByPk(idPengguna);

            if (!pengguna) {
                return res.status(404).json({
                    message: 'Pengguna tidak ditemukan'
                });
            }

            // hash password
            const hashPassword = bcrypt.hashSync(data.password, 10);
            data.password = hashPassword;

            // Ubah data pengguna
            await pengguna.update(data);

            res.json({
                message: 'Pengguna berhasil diubah',
                data: pengguna
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Terjadi kesalahan server'
            });
        }
    },

    hapusPengguna: async (req, res) => {
        const idPengguna = req.params.id;

        try {
            // Temukan pengguna berdasarkan ID
            const pengguna = await User.findByPk(idPengguna);

            if (!pengguna) {
                return res.status(404).json({
                    message: 'Pengguna tidak ditemukan'
                });
            }

            // Hapus pengguna
            await pengguna.destroy();

            res.json({
                message: 'Pengguna berhasil dihapus',
                data: pengguna
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Terjadi kesalahan server'
            });
        }
    }
};
