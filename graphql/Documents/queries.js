// const ALL_DOCUMENTS = gql`
//   query DocumentsUser ($user: String!){
//     documents_user(user: $user) {
//       storage,
//       name,
//       type
//     }
//   }
// `

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