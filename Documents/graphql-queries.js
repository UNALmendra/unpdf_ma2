import { gql } from "@apollo/client";

export const ALL_DOCUMENTS = gql`
  query {
    documents_user(user: "1") {
      storage,
      name,
      type
    }
  }
`