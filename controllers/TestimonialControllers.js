const Testimonials = require("../models/TestimonialModels.js");
const mongoose = require("mongoose");

exports.createTestimonial = async (req, res) => {
  const testimonials = req.body;

  const newTestimonials = new Testimonials(testimonials);
  try {
    await newTestimonials.save();
    res.status(201).json(newTestimonials);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in creating new Testimonial");
  }
};

exports.fetchTestimonial = async (req, res) => {
  const testimonial = await Testimonials.find();
  try {
    res.status(200).send(testimonial);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Testimonial");
  }
};

exports.deleteTestimonial = async (req, res) => {
  const id = req.params.id;
  try {
    await Testimonials.findByIdAndRemove(id);
    res.send("User Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
};

exports.updateTestimonials = async (req, res) => {
  const id = req.params.id;
  const updateTestimonial = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  try {
    await Testimonials.findByIdAndUpdate(id, updateTestimonial, {
      new: true,
    });
    res.json(updateTestimonial);
  } catch (error) {
    console.log(error);
    res.status(400).send("Some thing went wrong in updating post");
  }
};

exports.fetchSingleTestimonial = async (req, res) => {
  const post = req.params.id;
  const getPost = await Testimonials.findById(post);

  try {
    res.status(200).send(getPost);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Product");
  }
};
