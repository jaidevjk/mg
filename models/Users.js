const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
