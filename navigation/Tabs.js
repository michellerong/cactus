
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useColorMode } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screens
// import Events from '../screens/pages/Events';
//import AlbumList from '../screens/components/AlbumList';
import NurtureHome from '../screen/pages/NurtureHome';
import Nurture from '../screen/components/Nurture';
import Modal from '../screen/components/Modal';
import Messageboard from '../screen/components/Messageboard';

//Screen names
// const Main = "Home";
// const Album = "Details";
// const settings = "settings";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTabBarButton =({children, onPress}) => (
  <TouchableOpacity
  style={{
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
    ...styles.shadow
  }}
  onPress={onPress}
  >
    <View style={{
      width: 70,
      height: 70,
      borderRadius:35,
      backgroundColor: '#F6CA2C'
      
    }}>
      {children}
    </View>
  </TouchableOpacity>
);




const Tabs = () => {
  return (
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
          showLabel: false,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {backgroundColor: '#CBE4C3'},
        }}
      >

        {/* Route */}
        {/* <Tab.Screen name='Events' component={Events} options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            //刪掉<View style={{alignItems:'center' , justifyContent:'center' , top:10 }}>
              <Image
                source={require('../assets/favicon.png')}
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
                />
                <Text style={{color: focused ? '#e32f45' : '#748c94',fontSize:12 }}>
                  HOME
                </Text>
            </View>
          )
        }}/> */}



        {/* 圓形 */}
        <Tab.Screen name="NurtureHome" component={NurtureHome} options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
              <Image
                source={require('../assets/rabbit.png')}
                resizeMode='contain'
                style={{
                  width:30,
                  height:30,
                  tintColor: '#fff',
                }}
                />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          )
  
        }}/>




        {/* <Tab.Screen name="Album" component={AlbumList} options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems:'center' , justifyContent:'center' , top:10 }}>
              <Image
                source={require('../assets/favicon.png')}
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
                />
                <Text style={{color: focused ? '#e32f45' : '#748c94',fontSize:12 }}>
                Album
                </Text>
            </View>
          )
        }}/> */}


      </Tab.Navigator>
  );
}

const ModalStack = ({ navigation }) => {
  const { colorMode } = useColorMode();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Nurture"
        component={Nurture}
        options={{
          title: "Nurture",
          headerStyle: {
            backgroundColor: colorMode == 'light' ? 'white' : 'black',
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            Platform.OS == 'ios' ?
              <></> :
              <MaterialCommunityIcons
                name={'menu'}
                color={colorMode == 'light' ? 'black' : 'white'}
                size={20}
                onPress={() => navigation.openDrawer()}
                style={{ marginRight: 20 }}
              />
          ),
        }}
      />
      <Stack.Screen
        name="Modal"
        component={Modal}
        options={{
          title: "Modal",
          headerStyle: {
            backgroundColor: colorMode == 'light' ? 'white' : 'black',
          },
          headerTintColor: colorMode == 'light' ? 'black' : 'white',
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
      {/* <Stack.Screen
        name="AccountSetting"
        component={AccountSettingScreen}
        options={{
          title: "Account",
          headerStyle: {
            backgroundColor: colorMode == 'light' ? 'white' : 'black',
          },
          headerTintColor: colorMode == 'light' ? 'black' : 'white',
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
        }}
      /> */}

    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow:{
    shadowColor: '#7F5DF0',
    shadowOffset:{
      width:0,
      height:15,
    },
    shadowOpacity:0.25,
    shadowRadius:3.5,
    elevation:5
  }
});

export default {Tabs,ModalStack};