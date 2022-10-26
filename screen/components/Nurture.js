/*此為仙人掌培育室內容 */
import React from "react";
import {Image, View, StyleSheet, ScrollView, Pressable} from "react-native";
import {Dimensions} from 'react-native';

const Nurture = () => {
    return (
      <ScrollView style={styles.bgcolor}>
      <View style={styles.finishview}>
      <Image source={require('../image/finish.png')} style={styles.finish}  />
      </View>
    <View style={styles.container} >
      {/* <Text style={styles.textstyle}>Open up App.js to start working on your app!</Text> */}
      {/* <StatusBar style="auto" /> */}
      
      <Pressable><Image source={require('../image/rabbit.png')} style={styles.iconstyle1}  /></Pressable>
      <Image source={require('../image/rabbit.png')} style={styles.iconstyle1}  />
      <Image source={require('../image/rabbit.png')} style={styles.iconstyle1}  />
      
    </View>
    <View style={styles.brownlineview}>
      <Image source={require('../image/brown_line.png')} style={styles.brownlinestyle}  />
    </View>
    <View style={styles.container}>
      <Image source={require('../image/bear.png')} style={styles.iconstyle1}  />
      <Image source={require('../image/bear.png')} style={styles.iconstyle1}  />
      <Image source={require('../image/bear.png')} style={styles.iconstyle1}  />
    </View>
    <View style={styles.brownlineview}>
      <Image source={require('../image/brown_line.png')} style={styles.brownlinestyle}  />
    </View>
    <View style={styles.container}>
      <Image source={require('../image/king.png')} style={styles.iconstyle1}  />
    </View>
    <View style={styles.brownlineview}>
      <Image source={require('../image/brown_line.png')} style={styles.brownlinestyle}  />
    </View>
    <View style={styles.finishview}>
      <Image source={require('../image/keep.png')} style={styles.iconstyle3}  />
    </View>
    <View style={styles.container}>
      <Image source={require('../image/seed1.png')} style={styles.seed}  />
      <Image source={require('../image/seed2.png')} style={styles.seed}  />
      <Image source={require('../image/seed3.png')} style={styles.seed}  />
    </View>
    <View style={styles.brownlineview1}>
      <Image source={require('../image/brown_line.png')} style={styles.brownlinestyle}  />
    </View>
    </ScrollView>
    );

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAF2',
    alignItems: 'left',
    flexDirection:'row',
    justifyContent: 'space-around',
    flexWrap:'wrap',
    marginTop:20,
  },

  textstyle:{
    fontSize:20,
  },

  iconstyle1:{
    width:77,
    height:77,
  },
  iconstyle2:{
    width:110,
    height:36,
  },
  iconstyle3:{
    width:110,
    height:71,
  },
  seed:{
    width:53,
    height:63,
  },
  brownlinestyle:{
    width:390,
    height:19,
  },
  
  brownlineview:{
  marginTop:-8,
  },
  brownlineview1:{
    marginTop:-7,
    },
  bgcolor:{
    backgroundColor: '#FFFAF2',
  },
  finish:{
    width:110,
    height:73,
  },
  finishview:{
    alignItems:'center'
  },
  paddingbottom:{
    margin:0,
  },
  });
  
  export default Nurture;