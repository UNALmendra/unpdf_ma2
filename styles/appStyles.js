import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  title: {
      marginTop: 20,
      fontSize: 40,
      fontWeight: "bold",
      textAlign : "center"
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30,
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

export default styles;
