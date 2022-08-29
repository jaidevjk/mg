const mongoose = require("mongoose");

const { Schema } = mongoose;

const welcomeBanner = Schema({
  image: { type: String, required: true },
});

const Welcome = mongoose.model("welcome", welcomeBanner);

module.exports = Welcome;
