import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'

import imgtopdf from './assets/Images/PDF-to-JPG.png'
import pdftoimg from './assets/Images/PDF-to-PNG.png'
import documents from './assets/Images/documents.png'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Images from './screens/Images'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://192.168.10.14:5000/graphql'
  })
})

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
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

          <TouchableOpacity>
            <Image
              source={imgtopdf}
              style={styles.image}
            />
          </TouchableOpacity>
          
          <Text>Convertir PDF a PNG</Text>
    
          <TouchableOpacity
            onPress={() => {
              Images.auxGetDocumentsUser
              navigation.navigate('Images')}}>
            <Image
              source={pdftoimg}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text>Convertir PNG a PDF</Text>
        </View>
      );
}

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='Images' component={Images}/>
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </ApolloProvider>
    
  )
}

export default App

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
