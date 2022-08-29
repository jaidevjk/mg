const mongoose = require("mongoose");

const { Schema } = mongoose;

const articleSchema = Schema({
  month: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const Articles = mongoose.model("articles", articleSchema);

module.exports = Articles;
