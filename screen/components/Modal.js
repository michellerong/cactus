/*此檔案為彈跳式視窗+內容 */
import React, { useState, Component } from "react";
import { Button, Alert, Modal, StyleSheet, Text, Pressable, View, Image } from "react-native";

const NurtureModal = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
      <View style={styles.centeredView}>
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
              <Image source={require('../image/littlerabbit.png')} style={styles.iconstyle1}  />
              <Image source={require('../image/yellowline.png')} style={styles.yellowlinestyle}  />
              <Text style={styles.modalText}>成長成功仙人掌！</Text>
              <View style={styles.rabbitbackground}>
              <Text style={styles.rabbitText}>兔一是從兔兔掌的種子成長的，是個活潑好動的孩子呢（不，他長大了）~</Text>
              </View>
            </View>
            
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
          // this.props.navigation.navigate('Messageboard')
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
        
          <Button title="go to messageboard"
          onPress={()=>navigation.navigate('Messageboard')}/>
       
        
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20
    },
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
    button: {
      borderRadius: 10,
      padding: 10,
      elevation: 2,
      marginLeft:250,
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
        width:286,
        height:100,
        justifyContent: "center",
        backgroundColor: "#F8ECC1",
        borderRadius:7,
      },
    iconstyle1:{
        width:160,
        height:160,
      },
      yellowlinestyle:{
        width:286,
        height:1,
        marginTop:25,
        marginBottom:16,
      },
  });
  
  export default NurtureModal;