import { useMutation } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import { NEW_DOCUMENT } from "../Documents/graphql-mutation";
import { Text, View, ToastAndroid } from "react-native";
import {Loading} from '../Loading/Loading'


const storageUrl = "https://storage.googleapis.com/unpdf_st/"

export default function ShowPDF({route, navigation}) {

    navigation = useNavigation()

    const file = route.params

    const [showPdf, {data, loading, error}] = useMutation(NEW_DOCUMENT, {onCompleted: () => {
        ToastAndroid.show('Imagen convertida exitosamente!!!', ToastAndroid.LONG)
        console.log( storageUrl + data.postNewDocument.storage)
        navigation.navigate('Home')
    }})

    showPdf({variables: {name: file.name, file: file.file, type: file.type, user: file.user}})


    if (error) return <Text style={{color:'red'}}>{error.message}</Text>

    if (loading) return <Loading></Loading>

}