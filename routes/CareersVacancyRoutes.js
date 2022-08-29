const express = require("express");
const {
  createCareerVacancy,
  fetchCareerVacancy,
  deleteCareerVacancy,
  updateCareersVacancy,
  getCareerVacancyBySearch,
} = require("../controllers/CareerVacancyControllers.js");
const auth = require("../middlewares/auth.js");

const router = express.Router();

router.post("/", createCareerVacancy);
router.get("/", fetchCareerVacancy);
router.get("/search", getCareerVacancyBySearch);
router.patch("/:id", updateCareersVacancy);
router.delete("/:id", auth, deleteCareerVacancy);
module.exports = router;
