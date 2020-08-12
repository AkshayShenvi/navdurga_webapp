const Patient = require("../../models/patients");

module.exports = {
  Query: {
    async get_patient_appointments() {
      try {
        const patients = await Patient.find();
        return patients;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    register_appointments(
      _,
      { appointmentinputs: { f_name, l_name, s_time, e_time } },
      context,
      info
    ) {
      // TODO: Validate User Data
      // TODO: Make Sure Appointment is free
      // TODO: check if user is new or old

      const newAppointment = new Patient({
        
      })
    },
  },
};
