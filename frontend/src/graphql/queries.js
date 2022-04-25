import { gql } from "@apollo/client";

export const GET_USERS_QUERY = gql`
  {
    users {
      nodes {
        id
        name
        phone
        email
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateOneUser($name: String!, $phone: String!, $email: String!) {
    createOneUser(
      input: { user: { name: $name, phone: $phone, email: $email } }
    ) {
      id
      name
      phone
      email
    }
  }
`;
