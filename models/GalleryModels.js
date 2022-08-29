const mongoose = require("mongoose");

const { Schema } = mongoose;

const gallery = Schema({
  image: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String },
});

const Gallery = mongoose.model("gallery", gallery);

module.exports = Gallery;
