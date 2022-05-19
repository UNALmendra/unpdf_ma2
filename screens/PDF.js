import { Text, Linking } from "react-native"
import { useState } from "react"

const storageUrl = "https://storage.googleapis.com/unpdf_st/"


export const PDF = ({pdf}) => {

    const [file, setFile] = useState('')

    const [getPdfFile, { data, loading, error}] = useMutation(CONVERT_IMAGE)

    const showPdf = pdf => {
        getPdfFile({ variables: {surl: pdf}})
    }

    return (
        <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL({pdf})}>
        </Text>
    )
}