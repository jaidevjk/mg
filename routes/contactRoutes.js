const express = require("express");
const {
  createContact,
  fetchContact,
  deleteContact,
} = require("../controllers/ContactControllers.js");
const auth = require("../middlewares/auth.js");

const router = express.Router();

router.post("/", createContact);
router.get("/", fetchContact);
router.delete("/:id", deleteContact);
module.exports = router;
