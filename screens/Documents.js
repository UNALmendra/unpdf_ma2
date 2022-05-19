import React from "react"
import { Text, View, TouchableOpacity, Image } from "react-native"
import upload from '../assets/Images/upload.png'
import styles from '../styles/appStyles'

const Documents = () => {
    return(
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <TouchableOpacity>
            <Image
              source={upload}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
    );
}

export default Documents;
