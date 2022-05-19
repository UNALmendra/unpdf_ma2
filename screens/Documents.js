import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native'


const storageUrl = "https://storage.googleapis.com/unpdf_st/"



export const Documents = ({documents, navigation}) =>{

    return (
        documents.map(doc => {
            if (doc.type == "jpg" || doc.type == "png"){
                return <TouchableOpacity key={doc.storage} onPress={()=>{
                    navigation.navigate('PDF')
                }}>
                            <Image
                            style={styles.image}
                            source={{uri: storageUrl+doc.storage}}/>
                            <Text style={styles.text}>{doc.name}</Text>
                        </TouchableOpacity>
                
            }
        })
    )
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