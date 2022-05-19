import { Text, Linking } from "react-native"

const storageUrl = "https://storage.googleapis.com/unpdf_st/"

export const PDF = ({pdf}) => {
    return (
        <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL({pdf})}>
        </Text>
    )
}