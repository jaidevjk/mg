const Articles = require("../models/ArticleModels.js");
const mongoose = require("mongoose");

exports.createArticle = async (req, res) => {
  const testimonials = req.body;

  const newArticles = new Articles(testimonials);
  try {
    await newArticles.save();
    res.status(201).json(newArticles);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in creating new Article");
  }
};

exports.fetchArticle = async (req, res) => {
  const testimonial = await Articles.find();
  try {
    res.status(200).send(testimonial);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Article");
  }
};

exports.deleteArticle = async (req, res) => {
  const id = req.params.id;
  try {
    await Articles.findByIdAndRemove(id);
    res.send("User Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
};

exports.updateArticle = async (req, res) => {
  const id = req.params.id;
  const updateArticle = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  try {
    await Articles.findByIdAndUpdate(id, updateArticle, {
      new: true,
    });
    res.json(updateArticle);
  } catch (error) {
    console.log(error);
    res.status(400).send("Some thing went wrong in updating post");
  }
};

exports.fetchSingleArticle = async (req, res) => {
  const post = req.params.id;
  const getPost = await Articles.findById(post);

  try {
    res.status(200).send(getPost);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Product");
  }
};
