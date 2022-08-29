const express = require("express");
const {
  createCareer,
  fetchCareer,
  deleteCareer,
  updateCareers,
  fetchSingleCareer,
  getCareerBySearch,
} = require("../controllers/CareerControllers.js");
const auth = require("../middlewares/auth.js");

const router = express.Router();

router.post("/", createCareer);
router.get("/", fetchCareer);
router.get("/search", getCareerBySearch);
router.get("/:id", fetchSingleCareer);
router.patch("/:id", auth, updateCareers);
router.delete("/:id", auth, deleteCareer);
module.exports = router;
