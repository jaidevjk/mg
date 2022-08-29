const express = require("express");
const {
  createSearch,
  fetchSearch,
} = require("../controllers/SearchControllers.js");
const router = express.Router();

router.post("/", createSearch);
router.get("/", fetchSearch);
module.exports = router;
