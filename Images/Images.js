import { useMutation } from '@apollo/client'
import { useNavigation } from '@react-navigation/native'
import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import { Loading } from '../Loading/Loading'
import { CONVERT_IMAGE } from './graphql-mutations'


const storageUrl = "https://storage.googleapis.com/unpdf_st/"

let flag = true

export const Images = ({documents, navigation}) =>{

    navigation = useNavigation()

    let file = {
        name: '',
        type: 'pdf',
        user: '1'
    }

    const [ConvertToPDF, {data, loading, error}] = useMutation(CONVERT_IMAGE)


    if (error) return <Text style={{color: 'red'}}>{error.message}</Text>

    if (loading) return <Loading></Loading>
    
    if (flag) return( 
    
        documents.map(doc => {
            if (doc.type == "jpg" || doc.type == "png"){
                return <TouchableOpacity key={doc.storage}
                        onPress={() => {
                                    ConvertToPDF({variables: {surl: storageUrl+doc.storage}})
                                    file.name = doc.name
                                    flag = false
                                }
                            }>
                            <Image
                            style={styles.image}
                            source={{uri: storageUrl+doc.storage}}/>
                            <Text style={styles.text}>{doc.name}</Text>
                        </TouchableOpacity>
                
            }
        })
    )

    return <Text>
        Loading...
        {flag = true}
        {navigation.navigate('PDF', {file: data.postImg.file, name: file.name, type: file.type, user: file.user})}
    </Text>


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center', 
    },
    text: {
        marginTop: 5,
        fontWeight: "bold",
        textAlign : "center"
    },
    image: {
        height: 200,
        width: 300,
        margin: 30
    },
})