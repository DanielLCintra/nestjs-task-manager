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

export const UPDATE_USER = gql`
  mutation UpdateOneUser(
    $id: ID!
    $name: String!
    $phone: String!
    $email: String!
  ) {
    updateOneUser(
      input: { id: $id, update: { name: $name, phone: $phone, email: $email } }
    ) {
      id
      name
      phone
      email
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteOneUser($id: ID!) {
    deleteOneUser(input: { id: $id }) {
      id
    }
  }
`;
