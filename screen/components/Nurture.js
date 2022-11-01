/*此為仙人掌培育室內容 */
import React, { useState } from "react";
import { Image, View, StyleSheet, ScrollView, Modal, TouchableOpacity, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Nurture = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.bgcolor}>
      <View style={styles.finishview}>
        <Image source={require('../image/finish.png')} style={styles.finish} />
      </View>
      <View style={styles.container} >

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>X</Text>
              </Pressable>
              <Text style={styles.modalText}>曉兔</Text>
              <Image source={require('../image/littlerabbit.png')} style={styles.rabbiticonstyle} />
              <Image source={require('../image/yellowline.png')} style={styles.yellowlinestyle} />
              <Text style={styles.modalText}>成長成功仙人掌！</Text>
              <View style={styles.rabbitbackground}>
                <Text style={styles.rabbitText}>兔一是從兔兔掌的種子成長的，是個活潑好動的孩子呢（不，他長大了）~</Text>
              </View>
              <View style={styles.modalleft}>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <Image source={require('../image/messageboard.png')} style={styles.messageboardbutton} />

                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <Image source={require('../image/modifyData.png')} style={styles.messageboardbutton} />

                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>

              </TouchableOpacity>

            </View>
          </View>
        </Modal>
        <TouchableOpacity

          onPress={() => setModalVisible(true)}
        >
          <Image source={require('../image/rabbit.png')} style={styles.iconstyle1} />
        </TouchableOpacity>

        {/* </ModalPoup> */}


        <Image source={require('../image/rabbit.png')} style={styles.iconstyle1} />
        <Image source={require('../image/rabbit.png')} style={styles.iconstyle1} />

      </View>
      <View style={styles.brownlineview}>
        <Image source={require('../image/brown_line.png')} style={styles.brownlinestyle} />
      </View>
      <View style={styles.container}>
        <Image source={require('../image/bear.png')} style={styles.iconstyle1} />
        <Image source={require('../image/bear.png')} style={styles.iconstyle1} />
        <Image source={require('../image/bear.png')} style={styles.iconstyle1} />
      </View>
      <View style={styles.brownlineview}>
        <Image source={require('../image/brown_line.png')} style={styles.brownlinestyle} />
      </View>
      <View style={styles.container}>
        <Image source={require('../image/king.png')} style={styles.iconstyle1} />
        <Image source={require('../image/king.png')} style={styles.iconstyle1} />
        <Image source={require('../image/king.png')} style={styles.iconstyle1} />
      </View>
      <View style={styles.brownlineview}>
        <Image source={require('../image/brown_line.png')} style={styles.brownlinestyle} />
      </View>
      <View style={styles.finishview}>
        <Image source={require('../image/keep.png')} style={styles.iconstyle3} />
      </View>
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible2}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible2(!modalVisible2);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView2}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible2(!modalVisible2)}
              >
                <Text style={styles.textStyle}>X</Text>
              </Pressable>
              <Text style={styles.modalText}>被子</Text>
              <Image source={require('../image/bigseed1.png')} style={styles.rabbiticonstyle} />
              <Image source={require('../image/brightyellowline.png')} style={styles.yellowlinestyle} />
              <Text style={styles.modalText}>種子介紹</Text>
              <View style={styles.seedbackground}>
                <Text style={styles.rabbitText}>被子為鯊人掌的種子，任何等級都能輕鬆培育！</Text>
              </View>
              <View style={styles.modalleft}>

                {/* <TouchableOpacity onPress={() => setModalVisible2(false)}> */}
                <TouchableOpacity
                  onPress={() => { setModalVisible2(false); navigation.navigate('Observepage'); }}>
                  <Image
                    source={require('../image/nurtureseed.png')}
                    style={styles.seedbutton}
                  />
                  {/* </TouchableOpacity> */}
                </TouchableOpacity>

              </View>
              <TouchableOpacity onPress={() => setModalVisible2(!modalVisible2)}>
              </TouchableOpacity>

            </View>
          </View>

        </Modal>
        <TouchableOpacity

          onPress={() => setModalVisible2(true)}
        >

          <Image source={require('../image/seed1.png')} style={styles.seed} />

        </TouchableOpacity>

        <Image source={require('../image/seed2.png')} style={styles.seed} />
        <Image source={require('../image/seed3.png')} style={styles.seed} />
      </View>
      <View style={styles.brownlineview1}>
        <Image source={require('../image/brown_line.png')} style={styles.brownlinestyle} />
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
  iconstyle2: {
    width: 110,
    height: 36,
  },
  iconstyle3: {
    width: 110,
    height: 71,
  },
  seed: {
    width: 53,
    height: 63,
  },
  brownlinestyle: {
    width: 390,
    height: 19,
  },

  brownlineview: {
    marginTop: -8,
  },
  brownlineview1: {
    marginTop: -7,
  },
  bgcolor: {
    backgroundColor: '#FFFAF2',
  },
  finish: {
    width: 110,
    height: 73,
  },
  finishview: {
    alignItems: 'center'
  },
  paddingbottom: {
    margin: 0,
  },
  //Modal
  modalView: {
    margin: 10,
    backgroundColor: "white",
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
  },
  rabbitText: {

    textAlign: "left",
  },
  rabbitbackground: {
    width: 286,
    height: 100,
    justifyContent: "center",
    backgroundColor: "#F8ECC1",
    borderRadius: 7,
  },
  seedbackground: {
    width: 286,
    height: 100,
    marginTop: 8,
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 7,
  },
  rabbiticonstyle: {
    width: 160,
    height: 160,
  },
  yellowlinestyle: {
    width: 286,
    height: 1,
    marginTop: 25,
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
});

export default Nurture;