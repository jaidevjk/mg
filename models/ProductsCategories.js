const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductsCategorySchema = new Schema({
  Fertilizers: [{ type: String }],
  Growth: [{ type: String }],
  Adjuvants: [{ type: String }],
  Bio: [{ type: String }],
  Pesticides: [{ type: String }],
  Seeds: [{ type: String }],
  Sprayers: [{ type: String }],
});

const ProductsCategories = mongoose.model(
  "ProductCategories",
  ProductsCategorySchema
);

module.exports = ProductsCategories;
