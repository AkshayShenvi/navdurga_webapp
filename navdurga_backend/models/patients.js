const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointment_id = mongoose.Schema.Types.ObjectId;

const patientSchema = new Schema({
  details: {
    f_name: { type: String, required: true },
    l_name: { type: String, required: true },
    g_name: { type: String },
    ph_no: { type: String },
    email: { type: String },
    age: { type: Number },
    gender: { type: String },
    address: { type: String },
    dob: { type: Date },
    pob: { type: String },
    blood_gr: { type: String },
    ref_by: { type: String },
  },

  appointments: [
    {
      _app_id: appointment_id,
      s_time: { type: Date, required: true },
      e_time: { type: Date, required: true },
      treatment_done: Array,
    },
  ],
  treatment_plan: [
    {
      _app_id: appointment_id,
      plan: Array,
    },
  ],
  repots: {},
});

module.exports = mongoose.model('patients', patientSchema);
