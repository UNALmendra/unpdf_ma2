import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Button } from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native'

import imgtopdf from './assets/Images/PDF-to-JPG.png'
import pdftoimg from './assets/Images/PDF-to-PNG.png'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
        <View style={styles.container}>
          <TouchableOpacity>
            <Image
              source={imgtopdf}
              style={styles.image}
            />
          </TouchableOpacity>
          
          <Text>Convertir PDF a PNG</Text>
    
          <TouchableOpacity
            onPress={() => navigation.navigate('Images')}>
            <Image
              source={pdftoimg}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text>Convertir PNG a PDF</Text>
          </View>
      );
}

const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

    </View>
  )
}

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='Images' component={ImageScreen}/>
        </Stack.Navigator>
        <StatusBar style="auto" />
    </NavigationContainer>
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
