import { gql } from "@apollo/client";

export const CONVERT_IMAGE = gql`
    mutation image2pdf($surl: String!) {
        postImg(surl: $surl) {
            file
        }
    }
`