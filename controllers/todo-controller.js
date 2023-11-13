const { Tugas } = require("../models");

module.exports = {
    ambilSemuaTugas: async (req, res) => {
        const idPengguna = req.payload.id; // Ambil ID pengguna dari token
        const tugas = await Tugas.findAll({
            where: {
                user_id: idPengguna
            }
        });

        res.status(200).json({
            message: "Berhasil mengambil data tugas",
            data: tugas
        });
    },

    ambilTugasById: async (req, res) => {
        const idTugas = req.params.id;

        try {
            // Temukan tugas berdasarkan ID
            const tugas = await Tugas.findByPk(idTugas);

            if (!tugas) {
                return res.status(404).json({
                    message: 'Tugas tidak ditemukan'
                });
            }

            res.status(200).json({
                message: 'Berhasil mengambil tugas',
                data: tugas
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Terjadi kesalahan server'
            });
        }
    },

    buatTugas: async (req, res) => {
        const idPengguna = req.payload.id; // Ambil ID pengguna dari token
        let data = req.body;
        data.user_id = idPengguna;

        try {
            // Input data
            if (data.value) {
                await Tugas.create(data);

                // Kirim respons
                res.status(201).json({
                    message: "Berhasil menambahkan tugas"
                });
            } else {
                res.json({
                    message: "Gagal menambahkan tugas karena nilai tidak ada",
                });
            }

        } catch (error) {
            res.json({
                message: "Gagal menambahkan tugas",
                error: error.message
            });
        }
    },

    perbaruiTugas: async (req, res) => {
        const idTugas = req.params.id;
        const data = req.body;

        try {
            // Temukan tugas berdasarkan ID
            const tugas = await Tugas.findByPk(idTugas);

            if (!tugas) {
                return res.status(404).json({
                    message: 'Tugas tidak ditemukan'
                });
            }

            // Perbarui data tugas
            await tugas.update(data);

            res.json({
                message: 'Tugas berhasil diperbarui',
                data: tugas
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Terjadi kesalahan server'
            });
        }
    },

    hapusTugas: async (req, res) => {
        const idTugas = req.params.id;

        try {
            // Temukan tugas berdasarkan ID
            const tugas = await Tugas.findByPk(idTugas);

            if (!tugas) {
                return res.status(404).json({
                    message: 'Tugas tidak ditemukan'
                });
            }

            // Hapus tugas
            await tugas.destroy();

            res.json({
                message: 'Tugas berhasil dihapus',
                data: tugas
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Terjadi kesalahan server'
            });
        }
    }
};
