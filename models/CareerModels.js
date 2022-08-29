const mongoose = require("mongoose");

const { Schema } = mongoose;

const careerSchema = Schema({
  state: { type: String, required: true },
  position: { type: String, required: true },
  department: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  resume: { type: String },
  message: { type: String },
  appliedOn: { type: Date, default: Date.now },
  date: { type: Date, default: Date.now },
});

const Careers = mongoose.model("Career", careerSchema);

module.exports = Careers;
