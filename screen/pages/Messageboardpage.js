import React from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import Header from "../components/Header";
import Messageboard from "../components/Messageboard";
const Messageboardpage = () => {
    return(
      
      <View style={styles.container}>
      <Header title="曉兔留言板"/>
      
      <Messageboard />
      </View>
       
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFAF2",
    },
  });
  
  export default Messageboardpage;
