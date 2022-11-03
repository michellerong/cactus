import React from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import Header from "../components/Header";
import Logincontent from "../components/Logincontent";

const Login = () => {
    return(
      
      <View style={styles.container}>
      <Header title="登入"/>
      
      <Logincontent />
      </View>
       
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFAF2",
    },
  });
  
  export default Login;