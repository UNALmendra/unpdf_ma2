import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'

import logo from './assets/Images/unpdf_regular_alt.png'
import pdftoimg from './assets/Images/PDF-to-PNG.png'
import mydocuments from './assets/Images/documents.png'
import styles from './styles/appStyles';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Images from './screens/Images'
import MyDocuments from './screens/MyDocuments';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://192.168.1.18:5000/graphql'
  })
})

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
        <View style={styles.container}>
          <Image
            source={logo}
            style={styles.logo}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('MyDocuments')}>
            <Image
              source={mydocuments}
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

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='MyDocuments' component={MyDocuments}/>
          <Stack.Screen name='Images' component={Images}/>
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </ApolloProvider>
    
  )
}

export default App;
