const express = require("express");
const {
  createEnquiry,
  fetchEnquiries,
  deleteEnquiries,
} = require("../controllers/EnquiryControllers.js");
const auth = require("../middlewares/auth.js");

const router = express.Router();

router.post("/", createEnquiry);
router.get("/", auth, fetchEnquiries);
router.delete("/:id", deleteEnquiries);
module.exports = router;
