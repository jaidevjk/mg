const express = require("express");
const {
  createTestimonial,
  fetchTestimonial,
  deleteTestimonial,
  updateTestimonials,
  fetchSingleTestimonial,
} = require("../controllers/TestimonialControllers.js");
const auth = require("../middlewares/auth.js");

const router = express.Router();

router.post("/", auth, createTestimonial);
router.get("/", fetchTestimonial);
router.get("/:id", auth, fetchSingleTestimonial);
router.patch("/:id", auth, updateTestimonials);
router.delete("/:id", auth, deleteTestimonial);
module.exports = router;
