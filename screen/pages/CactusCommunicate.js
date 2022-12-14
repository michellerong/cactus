import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Header from "../components/Header";
import Communicatecontent from "../components/Communicatecontent";
function CactusCommunicate(){
    return(
    <SafeAreaView style={styles.container}>
    <StatusBar />
    <Header title="仙人掌交流"/>
    <Communicatecontent />
    </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFAF2",
    },
  });
export default CactusCommunicate;