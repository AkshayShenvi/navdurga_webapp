const { gql } = require("apollo-server");

module.exports = gql`
  type Details {
    f_name: String!
    l_name: String!
  }
  type Appointments {
    s_time: String
    e_time: String
  }
  type Patient_appointments {
    details: Details

    appointments: [Appointments]
  }

  input appointmentInputDetails {
    f_name: String!
    l_name: String!
    s_time: String!
    e_time: String!
  }

  type Token {
    token: String!
  }
  type Query {
    get_patient_appointments(s_time: String!,e_time: String!): [Patient_appointments]
  }
  type Mutation {
    addAppointment(appointmentinputs: appointmentInputDetails): Token!
  }
`;
