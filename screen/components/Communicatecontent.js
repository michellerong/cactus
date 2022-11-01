import React from "react";
import { Image, View, StyleSheet, ScrollView, TextInput, Text } from "react-native";
const Communicatecontent = () => {
  return (
    <ScrollView style={styles.bgcolor}>
      <Text style={styles.textstyle2}>
        查看更多仙人掌
      </Text>
      <View style={styles.circlecontainer}>
        <Image source={require('../image/circlerabbit.png')} style={styles.circle} />
        <Image source={require('../image/circlepoor.png')} style={styles.circle} />
        <Image source={require('../image/circleking.png')} style={styles.circle} />
        <Image source={require('../image/circlebear.png')} style={styles.circle} />

      </View>
      <Image source={require('../image/nightcactus.png')} style={styles.nightcactus} />
      <View style={styles.messagebuttoncontainer}>
        <Image source={require('../image/messagebutton.png')} style={styles.messagebutton} />
      </View>
      <View style={styles.messageboardcontainer}>
        <View style={styles.boardbg}>
          <View style={styles.messagebg}>
            <Image source={require('../image/user1.png')} style={styles.user} />
            <View style={styles.messagetext}>
              <Text style={styles.messagetitle}>小伊</Text>
              <Text style={styles.messagecontent}>好可愛的仙人掌!!!</Text>
            </View>
          </View>
          <View style={styles.messagebg}>
            <Image source={require('../image/user2.png')} style={styles.user} />
            <View style={styles.messagetext}>
              <Text style={styles.messagetitle}>阿酷</Text>
              <Text style={styles.messagecontent}>好有互動感~~</Text>
            </View>
          </View>
          <View style={styles.messagebg}>
            <Image source={require('../image/user3.png')} style={styles.user} />
            <View style={styles.messagetext}>
              <Text style={styles.messagetitle}>榮榮</Text>
              <Text style={styles.messagecontent}>好可愛的仙人掌!!!</Text>
            </View>
          </View>
          <View style={styles.yellowline} >
            <Image source={require('../image/yellowline.png')} />
          </View>
          <View style={styles.createcontainer}>
            <TextInput placeholder=" 新增留言..." style={styles.createmessage}></TextInput>
            <Image source={require('../image/createbutton.png')} style={styles.createbutton} />
          </View>
        </View>
      </View>
    </ScrollView>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAF2',
    alignItems: 'left',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  textstyle: {
    fontSize: 20,
  },

  iconstyle1: {
    width: 77,
    height: 77,
  },
  bgcolor: {
    backgroundColor: '#FFFAF2',
  },
  textstyle2: {
    color: "#705A31",
    fontSize: "16px",
    fontWeight: "bold",
    paddingLeft: 10,
    paddingTop: 10,
  },
  circle: {
    width: 80,
    height: 80,
  },
  circlecontainer: {
    flex: 1,
    alignItems: 'left',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  messageboardcontainer: {
    flex: 1,
  },
  nightcactus: {
    width: 390,
    height: 471,
    marginTop: 11,
  },
  messagebutton: {
    width: 154,
    height: 48,
    marginTop: 19.38,
  },
  messagebuttoncontainer: {
    alignItems: 'center',
  },
  boardbg: {
    marginLeft: 30,
    marginTop: 22,
    backgroundColor: "#F8ECC1",
    width: 326,
    height: 420,
    borderRadius: 17,

  },
  messagebg: {
    width: 289,
    height: 73,
    backgroundColor: "#FFFAF2",
    borderRadius: 13,
    marginLeft: 16,
    marginTop: 28,

    flexDirection: 'row',

  },
  messagetext: {

  },
  messagetitle: {
    color: "#705A31",
    paddingLeft: 23,
    paddingTop: 13,
    fontSize: 12,
    fontWeight: "bold",
  },
  messagecontent: {
    color: "#705A31",
    fontSize: 13,
    paddingLeft: 23,
    paddingTop: 10,
  },
  user: {
    width: 58,
    height: 58,
    marginLeft: 18,
    marginTop: 8,

  },
  usertext: {
    marginLeft: 99,
    marginTop: 13,
  },
  yellowline: {
    marginTop: 23,
    marginTleft: 19,
    alignItems: 'center',
  },
  createmessage: {
    width: 254,
    height: 48,
    backgroundColor: "#F5F5F5",
    borderRadius: 13,
    marginLeft: 16,
    marginTop: 19,
  },
  createcontainer: {
    flexDirection: "row",
  },
  createbutton: {
    width: 26,
    height: 26,
    marginLeft: 9,
    marginTop: 30,
  },
});

export default Communicatecontent;