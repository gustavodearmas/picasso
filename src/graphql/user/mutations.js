import { gql } from "@apollo/client";

const CREATE_USER = gql`
  mutation CreateUser(
    $nameUser: String!
    $lastName: String!
    $identification: String!
    $email: String!
    $movil: String!
    $phone: String!
    $birthDay: Date!
    $nationality: String
    $cityBirth: String
    $emergencyContact: String
    $issuance: Enum_Issuance
    $address: String
    $locality: Enum_Locality
    $strata: Float
    $afp: Enum_AFP
    $arl: Enum_ARL
    $eps: Enum_EPS
    $rh: Enum_RH
    $upz: String
    $role: Enum_Rol
    $statusUser: Enum_StatusUsers
    $nameGuardian: String
    $lastNameGuardian: String
    $phoneGuardian: String
    $identificationGuardian: String
    $emailGuardian: String
    $addressGuardian: String
  ) {
    createUser(
      nameUser: $nameUser
      lastName: $lastName
      identification: $identification
      email: $email
      movil: $movil
      phone: $phone
      birthDay: $birthDay
      nationality: $nationality
      cityBirth: $cityBirth
      emergencyContact: $emergencyContact
      issuance: $issuance
      address: $address
      locality: $locality
      strata: $strata
      afp: $afp
      arl: $arl
      eps: $eps
      rh: $rh
      upz: $upz
      role: $role
      statusUser: $statusUser
      nameGuardian: $nameGuardian
      lastNameGuardian: $lastNameGuardian
      phoneGuardian: $phoneGuardian
      identificationGuardian: $identificationGuardian
      emailGuardian: $emailGuardian
      addressGuardian: $addressGuardian
    ) {
      nameUser
      lastName
    }
  }
`;

const EDIT_USER = gql`
  mutation EditUser(
    $_id: String!
    $nameUser: String
    $addressGuardian: String
    $emailGuardian: String
    $phoneGuardian: String
    $identificationGuardian: String
    $lastNameGuardian: String
    $nameGuardian: String
    $statusUser: Enum_StatusUsers
    $role: Enum_Rol
    $upz: String
    $eps: Enum_EPS
    $rh: Enum_RH
    $arl: Enum_ARL
    $afp: Enum_AFP
    $strata: Float
    $address: String
    $locality: Enum_Locality
    $cityBirth: String
    $photo: String
    $emergencyContact: String
    $issuance: Enum_Issuance
    $birthDay: Date
    $nationality: String
    $phone: String
    $movil: String
    $email: String
    $identification: String
    $lastName: String
  ) {
    editUser(
      _id: $_id
      nameUser: $nameUser
      addressGuardian: $addressGuardian
      emailGuardian: $emailGuardian
      phoneGuardian: $phoneGuardian
      identificationGuardian: $identificationGuardian
      lastNameGuardian: $lastNameGuardian
      nameGuardian: $nameGuardian
      statusUser: $statusUser
      role: $role
      upz: $upz
      eps: $eps
      rh: $rh
      arl: $arl
      afp: $afp
      strata: $strata
      address: $address
      locality: $locality
      cityBirth: $cityBirth
      photo: $photo
      emergencyContact: $emergencyContact
      issuance: $issuance
      birthDay: $birthDay
      nationality: $nationality
      phone: $phone
      movil: $movil
      email: $email
      identification: $identification
      lastName: $lastName
    ) {
      nameUser
    }
  }
`;

export { CREATE_USER, EDIT_USER };
