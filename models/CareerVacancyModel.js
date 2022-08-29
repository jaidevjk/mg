const mongoose = require("mongoose");

const { Schema } = mongoose;

const careerVacancySchema = Schema({
  state: { type: String, required: true },
  position: { type: String, required: true },
  department: { type: String, required: true },
  num: { type: String, required: true },
  othersDep: { type: String },
  qualification: { type: String },
  adminEmail: { type: String, required: true },
});

const CareersVacancy = mongoose.model("CareersVacancy", careerVacancySchema);

module.exports = CareersVacancy;
