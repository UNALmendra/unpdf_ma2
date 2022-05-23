import { gql } from "@apollo/client";

export const NEW_DOCUMENT = gql`
    mutation postNewDocument($name: String!, $file: String!, $type: String!, $user: String!) {
        postNewDocument(document:{
        name: $name,
        file: $file,
        type: $type,
        user: $user}) {
            storage
        }
    }
`