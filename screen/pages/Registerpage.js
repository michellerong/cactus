import React from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import Header from "../components/Header";
import Registercontent from "../components/Registercontent";
const Register = () => {
    return(
      
      <View style={styles.container}>
      <Header title="註冊"/>
      
      <Registercontent />
      </View>
       
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFAF2",
    },
  });
  
  export default Register;