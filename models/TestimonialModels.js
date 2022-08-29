const mongoose = require("mongoose");

const { Schema } = mongoose;

const testimonialSchema = Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
});

const Testimonials = mongoose.model("testimonial", testimonialSchema);

module.exports = Testimonials;
