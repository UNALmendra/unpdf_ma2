import { gql } from "@apollo/client";

export const CONVERT_IMAGE = gql`
    mutation postImg($surl: String!) {
        postImg(surl: $surl) {
            file
        }
    }
`
