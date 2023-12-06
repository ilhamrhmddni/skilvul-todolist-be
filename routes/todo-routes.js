const express = require("express");
const router = express.Router();
const { ambilSemuaTugas, ambilTugasById, buatTugas, perbaruiTugas, hapusTugas } = require("../controllers/todo-controller");

router.get("/", ambilSemuaTugas);
router.get("/:id", ambilTugasById);
router.post("/", buatTugas);
router.put("/:id", perbaruiTugas);
router.delete("/:id", hapusTugas);

module.exports = router;
