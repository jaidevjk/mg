const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
  name: { type: String, required: true },
  available: { type: String },
  crop: { type: String },
  dosage: { type: String },
  benefits: { type: String },
  category: { type: String },
  composition: { type: String },
  image: { type: String, required: true },
  image1: { type: String },
  image2: { type: String },
  notes: { type: String },
  others: { type: String },
  activeIngredients: { type: String },
  modeOfAction: { type: String },
  precautions: { type: String },
  specialFeatures: { type: String },
  plantType: { type: String },
  duration: { type: String },
  flowering: { type: String },
  fruitShape: { type: String },
  fruitLength: { type: String },
  podLength: { type: String },
  rootLength: { type: String },
  fruitWeight: { type: String },
  crudWeight: { type: String },
  headWeight: { type: String },
  fruitColor: { type: String },
  fruitBearing: { type: String },
  harvesting: { type: String },
  packageOfPractices: { type: String },
  TimeOfErection: { type: String },
  description: { type: String },
  technicalSpecifications: { type: String },
});

const FertilizerProducts = mongoose.model("Fertilizers", ProductsSchema);

module.exports = FertilizerProducts;
