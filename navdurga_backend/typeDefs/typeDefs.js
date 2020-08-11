const { gql } = require('apollo-server');

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
  type Query {
    get_patient_appointments: [Patient_appointments]
  }
`;
