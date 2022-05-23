import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import pdftoimg from '../assets/images/PDF-to-PNG.png'
import documents from '../assets/images/documents.png'

export const HomeScreen = ({ navigation }) => {

    navigation = useNavigation()

    return (
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Documents')}>
              <Image
                source={documents}
                style={styles.image}
              />
            </TouchableOpacity>
            
            <Text>Mis Documentos</Text>
      
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Images')}}>
              <Image
                source={pdftoimg}
                style={styles.image}
              />
            </TouchableOpacity>
            <Text>Convertir Imagen a PDF</Text>
          </View>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
},

logo: {
    padding: 100,
},
image: {
    height: 200,
    width: 300,
},
ImageBackground: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    alignItems: "center",
},
});