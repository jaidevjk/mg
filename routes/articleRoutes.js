const express = require("express");
const {
  createArticle,
  fetchArticle,
  deleteArticle,
  updateArticle,
  fetchSingleArticle,
} = require("../controllers/ArticleControllers.js");
const auth = require("../middlewares/auth.js");

const router = express.Router();

router.post("/", auth, createArticle);
router.get("/", fetchArticle);
router.get("/:id", auth, fetchSingleArticle);
router.patch("/:id", auth, updateArticle);
router.delete("/:id", auth, deleteArticle);
module.exports = router;
