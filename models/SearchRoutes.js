const mongoose = require("mongoose");

const { Schema } = mongoose;

const searchSchema = Schema({
  searchTerm: { type: String },
  link: { type: String },
});

const Search = mongoose.model("Search", searchSchema);

module.exports = Search;
