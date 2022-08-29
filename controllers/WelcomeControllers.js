const Welcome = require("../models/WelcomeModels.js");

exports.createWelcome = async (req, res) => {
  const testimonials = req.body;

  const newWelcome = new Welcome(testimonials);
  try {
    await newWelcome.save();
    res.status(201).json(newWelcome);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in creating new Article");
  }
};

exports.deleteWelcome = async (req, res) => {
  const id = req.params.id;
  console.log("delete");
  try {
    await Welcome.findByIdAndRemove(id);
    res.send("User Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
};

exports.getWelcome = async (req, res) => {
  const posts = await Welcome.find();
  try {
    res.status(200).send(posts);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Testimonial");
  }
};
