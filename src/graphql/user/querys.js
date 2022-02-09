import { gql } from "@apollo/client";

const GET_USERS = gql`
  query Users {
    Users {
      _id
      nameUser
      lastName
      statusUser
    }
  }
`;

const GET_USER_BY_ID = gql`
  query User($_id: String!) {
    User(_id: $_id) {
      _id
      nameUser
      lastName
      identification
      email
      movil
      phone
      nationality
      birthDay
      cityBirth
      photo
      emergencyContact
      issuance
      address
      locality
      strata
      afp
      arl
      eps
      rh
      upz
      role
      statusUser
      nameGuardian
      lastNameGuardian
      identificationGuardian
      phoneGuardian
      emailGuardian
      addressGuardian
    }
  }
`;

const GET_USERS_BY_ID = gql`
query UsersById($_id: [String]!) {
  UsersById(_id: $_id) {
    _id
    nameUser
    lastName
    identification
    email
    movil
    phone
    nationality
    birthDay
    cityBirth
    photo
    emergencyContact
    issuance
    address
    locality
    strata
    afp
    arl
    eps
    rh
    upz
    role
    statusUser
    nameGuardian
    lastNameGuardian
    identificationGuardian
    phoneGuardian
    emailGuardian
    addressGuardian
  }
}
`;

export { GET_USERS, GET_USER_BY_ID, GET_USERS_BY_ID };
