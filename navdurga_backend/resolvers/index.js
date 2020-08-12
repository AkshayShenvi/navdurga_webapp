const patientResolvers = require("./patient/patients");

module.exports = {
  Query: {
    ...patientResolvers.Query,
  },
  Mutation: {

  },
};
