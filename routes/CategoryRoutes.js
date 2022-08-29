const express = require("express");
const auth = require("../middlewares/auth.js");

const {
  createCategory,
  fetchCategory,
} = require("../controllers/productsCategories.js");
const router = express.Router();

router.post("/", auth, createCategory);
router.get("/", fetchCategory);

module.exports = router;
