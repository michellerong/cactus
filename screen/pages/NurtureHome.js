import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Header from "../components/Header";
import Nurture from "../components/Nurture";

const NurtureHome = () => {
  return(
    <SafeAreaView style={styles.container}>
    <StatusBar />
    <Header title="仙人掌培育室"/>
    
    <Nurture />
    </SafeAreaView>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAF2",
  },
});

export default NurtureHome;