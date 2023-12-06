const express = require("express");
const router = express.Router();
const { ambilSemuaPengguna, ambilPenggunaById, buatPengguna, perbaruiPengguna, hapusPengguna } = require("../controllers/user-controller");

router.get("/", ambilSemuaPengguna);
router.get("/:id", ambilPenggunaById);
router.post("/", buatPengguna);
router.put("/:id", perbaruiPengguna);
router.delete("/:id", hapusPengguna);

module.exports = router;
