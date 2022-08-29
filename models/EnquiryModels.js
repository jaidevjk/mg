const mongoose = require("mongoose");

const { Schema } = mongoose;

const enquirySchema = Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
  state: { type: String },
  address: { type: String },
  date: { type: Date, default: Date.now },
});

const Enquiry = mongoose.model("enquiries", enquirySchema);

module.exports = Enquiry;
