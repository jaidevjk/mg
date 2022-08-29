const mongoose = require("mongoose");

const { Schema } = mongoose;

const loginSchema = Schema({
  email: { type: String },
  latitude: { type: Number },
  longitude: { type: Number },
  date: { type: String },
});

const Logins = mongoose.model("login", loginSchema);

module.exports = Logins;
