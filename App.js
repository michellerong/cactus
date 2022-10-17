import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainContainer from './navigation/MainContainer';


export default function App() {
  return (
    <MainContainer/>
   // <View style={styles.container}>
   //   <Text><h1>Open up App.js to start working on your app!</h1></Text>
    //  <StatusBar style="auto" />
   // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  red:{
    color:"red"
  }
});
