const patient = require('../../models/patients');

module.exports = {
  Query: {
    async get_patient_appointments() {
      try {
        const patients = await patient.find();
        return patients;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
