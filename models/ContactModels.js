const mongoose = require("mongoose");

const { Schema } = mongoose;

const contactSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: Number, required: true },
  message: { type: String },
  department: { type: String },
  state: { type: String },
  address: { type: String },
  date: { type: Date, default: Date.now },
});

const Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;
