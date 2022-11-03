import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Frontcontent from "../components/Frontcontent";

const Frontpage = () => {
    return(
      <View style={styles.container}>
      <StatusBar />
      <Frontcontent />
      </View>  
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFAF2",
    },
  });
  
  export default Frontpage;