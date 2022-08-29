const mongoose = require("mongoose");

const { Schema } = mongoose;

const subscribersSchema = Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  date: { type: Date, default: Date.now },
});

const Subscriber = mongoose.model("subscribers", subscribersSchema);

module.exports = Subscriber;
