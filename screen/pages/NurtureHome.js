import React from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import Header from "../components/Header";
import Nurture from "../components/Nurture";

const NurtureHome = () => {
  return(
    
    <View style={styles.container}>
    <Header title="仙人掌培育室"/>
    
    <Nurture />
    </View>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAF2",
  },
});

export default NurtureHome;