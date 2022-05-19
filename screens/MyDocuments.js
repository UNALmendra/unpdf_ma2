import React, {useState, useCallback} from "react"
import * as DocumentPicker from 'expo-document-picker';
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native"
import upload from '../assets/Images/upload.png'
import styles from '../styles/appStyles'
import { gql, useQuery } from '@apollo/client'
import DocumentList from "./DocumentList"

const ALL_DOCUMENTS = gql`
  query {
    documents_user(user: "1") {
      storage,
      name,
      type
    }
  }
`


const MyDocuments = () => {
  
    const [fileResponse, setFileResponse] = useState([]);

    const handleDocumentSelection = useCallback(async () => {
        try {
          const response = await DocumentPicker.getDocumentAsync();
          console.log(response)
          setFileResponse(response);
        } catch (err) {
          console.warn(err);
        }
      }, []);

    const {data, error, loading} = useQuery(ALL_DOCUMENTS)

    return(
        <View style={{
            flex: 1,
            alignItems: 'center'
          }}>
          <Text style={styles.title}> Mis Documentos</Text>
          <TouchableOpacity
            onPress={handleDocumentSelection}>
            <Image
              source={upload}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.subtitle}>Lista de Documentos</Text>
            {loading 
                ? <Text>Loading...</Text>
                : <ScrollView><DocumentList documents={data.documents_user}/></ScrollView>
            }
        </View>
    );
}

export default MyDocuments;
