
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// Screens
// import Events from '../screens/pages/Events';
//import AlbumList from '../screens/components/AlbumList';
 import NurtureHome from '../screen/pages/NurtureHome';

//Screen names
// const Main = "Home";
// const Album = "Details";
// const settings = "settings";

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
        tabBarOptions={{
          showLabel: false,
          style: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: '#ffffff',
            borderRadius: 15,
            height: 90,
            ...styles.shadow
          }
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

export default Tabs;