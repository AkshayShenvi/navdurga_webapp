const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const patientSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  last_used: { type: Date, required: true },
});

module.exports = mongoose.model("patients", patientSchema);
