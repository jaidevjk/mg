const express = require("express");
const {
  createWelcome,
  deleteWelcome,
  getWelcome,
} = require("../controllers/WelcomeControllers.js");
const auth = require("../middlewares/auth.js");
const router = express.Router();

router.post("/", auth, createWelcome);
router.delete("/:id", auth, deleteWelcome);
router.get("/", getWelcome);

module.exports = router;
