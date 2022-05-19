import React, {useState, useCallback} from "react"
import * as DocumentPicker from 'expo-document-picker';
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native"
import upload from '../assets/Images/upload.png'
import styles from '../styles/appStyles'
import { gql, useQuery, useMutation } from '@apollo/client'
import DocumentList from "./DocumentList"
import * as FileSystem from 'expo-file-system';

const ALL_DOCUMENTS = gql`
  query {
    documents_user(user: "1") {
      storage,
      name,
      type
    }
  }
`
let POST_DOCUMENT = gql``;

const MyDocuments = () => {

    
    const handleDocumentSelection = useCallback(async () => {
        try {
          const response = await DocumentPicker.getDocumentAsync({
            type: "application/pdf"
          });
          if(response.type === "success"){
            const base64 = await FileSystem.readAsStringAsync(response.uri, { encoding: 'base64' });
            POST_DOCUMENT = gql`
              mutation {
              postNewDocument(document: {
                name: "${response.name}",
                file: "${base64}",
                type: "pdf",
                user: "1"
                
              }) {
                storage
              }
            }
            `
            let [postDocument, dle] = useMutation(POST_DOCUMENT);
            postDocument()
          }
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
