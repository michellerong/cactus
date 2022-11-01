import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Header from "../components/Header";
import Observeroom from "../components/Observeroom";

const Observepage = () => {
    return(
      <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header title="觀察室"/>
      <Observeroom />
      </SafeAreaView>  
    );
  }
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFAF2",
    },
  });
  
  export default Observepage;