import 'react-native-gesture-handler';
import React from "react";
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
// import Header from "./screen/components/Header";
// import Nurture from "./screen/components/Nurture";
//  import Rootstack from "./screen/components/Rootstack";
import { NavigationContainer } from '@react-navigation/native';
// import { SafeAreaProvider } from 'react-native-safe-area-context';


import Tabs from "./navigation/Tabs";
import Stack from "./navigation/Stack";
const App = () =>  {
  return (
    
    <NavigationContainer>
    <Tabs />
    {/* <Stack /> */}
    </NavigationContainer>
    
   
    // <ScrollView style={styles.bgcolor}>
    //   <Image source={require('./assets/finish.png')} style={styles.finish}  />
      
    // <View style={styles.container}>
    //   {/* <Text style={styles.textstyle}>Open up App.js to start working on your app!</Text> */}
    //   {/* <StatusBar style="auto" /> */}
      
    //   <Image source={require('./assets/rabbit.png')} style={styles.iconstyle1}  />
    //   <Image source={require('./assets/rabbit.png')} style={styles.iconstyle1}  />
    //   <Image source={require('./assets/rabbit.png')} style={styles.iconstyle1}  />
      
    // </View>
    
    // <Image source={require('./assets/brown_line.png')} style={styles.brownlinestyle}  />
    // <View style={styles.container}>
    // <Image source={require('./assets/bear.png')} style={styles.iconstyle1}  />
    // <Image source={require('./assets/bear.png')} style={styles.iconstyle1}  />
    // <Image source={require('./assets/bear.png')} style={styles.iconstyle1}  />
    // </View>
    // <Image source={require('./assets/brown_line.png')} style={styles.brownlinestyle}  />
    // <View style={styles.container}>
    // <Image source={require('./assets/king.png')} style={styles.iconstyle1}  />
    
    // </View>
    // </ScrollView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFAF2',
//     alignItems: 'left',
//     flexDirection:'row',
//     justifyContent: 'space-between',
//     flexWrap:'wrap',
//   },

//   textstyle:{
//     fontSize:20,
//   },

//   iconstyle1:{
//     width:77,
//     height:77,
//   },
//   iconstyle2:{
//     width:110,
//     height:36,
//   },
//   brownlinestyle:{
//     width:390,
//     height:19,
//   },
//   bgcolor:{
//     backgroundColor: '#FFFAF2',
//   },
//   finish:{
//     width:110,
//     height:36,
//   },
//   paddingbottom:{
//     marginBottom:100,
//   },
// });
export default App;