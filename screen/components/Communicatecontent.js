import React, { useState } from "react";
import { Image, View, StyleSheet, ScrollView, TextInput, Text, TouchableOpacity, Modal, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Communicatecontent = () => {
  const [modalVisible, setModalVisible] = useState(false);
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


      <Modal animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
        <View><View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>X</Text>
              </Pressable>
              <Text style={styles.modalText}>柾兔泰泰</Text>
              <Image source={require('../image/yellowline.png')} style={styles.yellowlinestyle} />
              <Text style={styles.modalText2}>參與過的活動</Text>
              <View style={styles.messagebg2}>
                <Image source={require('../image/purin.png')} style={styles.user2} />
                <View style={styles.messagetext}>
                    <Text style={styles.messagetitle2}>活動名稱</Text>
                    <Text style={styles.messagecontent2}>參與日期．</Text>
                </View>
                <Text style={styles.activityplace}>活動地點</Text>
            </View>
            <View style={styles.messagebg2}>
                <Image source={require('../image/purin.png')} style={styles.user2} />
                <View style={styles.messagetext}>
                    <Text style={styles.messagetitle2}>活動名稱</Text>
                    <Text style={styles.messagecontent2}>參與日期．</Text>
                </View>
                <Text style={styles.activityplace}>活動地點</Text>
            </View>
            <View style={styles.messagebg2}>
                <Image source={require('../image/purin.png')} style={styles.user2} />
                <View style={styles.messagetext}>
                    <Text style={styles.messagetitle2}>活動名稱</Text>
                    <Text style={styles.messagecontent2}>參與日期．</Text>
                </View>
                <Text style={styles.activityplace}>活動地點</Text>
            </View>
            <Text style={styles.modalText3}>養成心得</Text>
              <View style={styles.rabbitbackground}>
                <Text style={styles.rabbitText}>參加了好多活動才終於把曉兔養大，能成為仙中之王真是感動嗚嗚。</Text>
              </View>
              
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>

              </TouchableOpacity>

            </View>
          </View>
        </View>
        
      </Modal>



      <TouchableOpacity

        onPress={() => setModalVisible(true)}
      >
        <Image source={require('../image/nightcactus.png')} style={styles.nightcactus} />
      </TouchableOpacity>
     
      <View style={styles.messageboardcontainer}>

        <View style={styles.boardbg}>
          <Text style={styles.messageboardtitle}>留言板</Text>
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 130
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
 
  boardbg: {
    marginLeft: 30,
    marginTop: 22,
    backgroundColor: "#F8ECC1",
    width: 326,
    height: 480,
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
  messagebg2: {
    width: 289,
    height: 73,
    backgroundColor: "#F8ECC1",
    borderRadius: 13,
    flexDirection: 'row',
    marginTop:12,

  },
  messagetext: {

  },
  messageboardtitle: {
    color: "#705A31",
    fontSize: 20,
    paddingTop: 28,
    paddingLeft: 125,
  },
  messagetitle: {
    color: "#705A31",
    paddingLeft: 23,
    paddingTop: 13,
    fontSize: 12,
    fontWeight: "bold",
  },
  messagetitle2: {
    color: "#705A31",
    paddingLeft: 23,
    paddingTop: 13,
    fontSize: 13,
    fontWeight: "bold",
  },
  messagecontent: {
    color: "#705A31",
    fontSize: 13,
    paddingLeft: 23,
    paddingTop: 10,
  },
  messagecontent2: {
    color: "#705A31",
    fontSize: 13,
    paddingLeft: 23,
    paddingTop: 8,
  },
  user: {
    width: 58,
    height: 58,
    marginLeft: 18,
    marginTop: 8,

  },
  user2: {
    width: 58,
    height: 58,
    marginTop: 7,
    marginBottom:7,
    marginLeft:7,

  },
  usertext: {
    marginLeft: 99,
    marginTop: 13,
  },
  yellowline: {
    width:322,
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
  },//Modal
  modalView: {
    margin: 10,
    backgroundColor: "#FFFAF2",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalView2: {
    margin: 10,
    backgroundColor: "#F8ECC1",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    marginLeft: 250,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#62935F",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize:20,
    color:"#62935F",
  },
  modalText2: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 16,
    color:"#705A31",
    fontWeight:"bold",
  },
  modalText3: {
    marginTop:10,
    textAlign: "center",
    fontSize: 16,
    color:"#705A31",
    fontWeight:"bold",
  },
  rabbitText: {
    width:230,
    height:66,
    color: "#705A31",
    
  },
  rabbitbackground: {
    width: 286,
    height: 100,
    alignItems:'center',
    justifyContent: "center",
    backgroundColor: "#F8ECC1",
    borderRadius: 7,
    marginTop:12,
  },
  seedbackground: {
    width: 286,
    height: 100,
    marginTop: 8,
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 7,
  },
  
  yellowlinestyle: {
    width: 286,
    height: 1,
    marginTop: 10,
    marginBottom: 16,
  },
  messageboardbutton: {
    marginLeft: 10,
    width: 135,
    height: 48,
    marginTop: 20,

  },
  seedbutton: {
    width: 146,
    height: 48,
    marginTop: 20,

  },
  modalleft: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  activityplace: {
    color: "#705A31",
    fontSize: 13,
    paddingTop: 40,
  },
});

export default Communicatecontent;