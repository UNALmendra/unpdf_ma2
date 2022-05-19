import React from "react"
import { Text, View, TouchableOpacity, Image } from "react-native"
import upload from '../assets/Images/upload.png'
import styles from '../styles/appStyles'

const MyDocuments = () => {
    return(
        <View style={{
            flex: 1,
            alignItems: 'center'
          }}>
          <Text style={styles.title}> Mis Documentos</Text>
          <TouchableOpacity>
            <Image
              source={upload}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text>Mis Documentos</Text>
        </View>
    );
}

export default MyDocuments;
