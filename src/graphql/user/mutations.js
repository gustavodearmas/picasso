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
      AFP: $afp
      ARL: $arl
      EPS: $eps
      RH: $rh
      UPZ: $upz
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

export { CREATE_USER };