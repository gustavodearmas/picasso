import { gql } from '@apollo/client';

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

export {GET_USERS}