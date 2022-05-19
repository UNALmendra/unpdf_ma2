import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Button } from 'react-native';

//Permite navegar entre pantallas
import { NavigationContainer, useNavigation } from '@react-navigation/native'

import logo from './assets/Images/unpdf_white.png'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import sign_up from './screens/Sign_up';
import log_in from './screens/Log_in';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
        <View style={styles.container}>
            
          <Image 
            source={logo}
            style={styles.image}
          />

          <View style={styles.containerButtons}>
            <TouchableOpacity style={styles.screenContainer} 
              onPress={() => navigation.navigate('Log_in')}>
              <Text>Log in</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.screenContainer}
              onPress={() => navigation.navigate('Sign_up')}>
              <Text>Sign up</Text>
            </TouchableOpacity>
          </View>    
        </View>
      );
}


const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='login' component={log_in}/>
          <Stack.Screen name='signup' component={sign_up}/>
        </Stack.Navigator>
        <StatusBar style="auto" />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B4D3F6',
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  screenContainer: {
    
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 13,
    paddingHorizontal: 50,
  },
  Text: {
    textAlign: 'center',
    marginVertical: 8,
    color:"green",
    fontWeight: "bold",
  },
  image: {
    height: 200,
    width: 200,
    paddingTop: 10,

  },
  ImageBackground: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    alignItems: "center",
  },
});
