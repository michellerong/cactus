import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
// Screens
import NurtureHome from '../screen/pages/NurtureHome';
import CactusCommunicate from '../screen/pages/CactusCommunicate';
import Observepage from '../screen/pages/Observepage';
import Messageboard from '../screen/components/Messageboard';

const Tab = createBottomTabNavigator();

const CustomTabBarButtonA = ({ children, onPress }) => (
  <TouchableOpacity
    style={{

      top: -30,
      alignItems: 'center',

      ...styles.shadow
    }}
    onPress={onPress}
  >

    <View style={{
      width: 58,
      height: 58,
      borderRadius: 40,
      backgroundColor: '#62935F',
      marginLeft: 46,
    }}>
      {children}
    </View>
  </TouchableOpacity>
);

const CustomTabBarButtonB = ({ children, onPress }) => (
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
      width: 76,
      height: 76,
      borderRadius: 40,
      backgroundColor: '#F6CA2C',
      marginLeft: 55,
    }}>
      {children}
    </View>
  </TouchableOpacity>
);


const CustomTabBarButtonC = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -30,
      ...styles.shadow
    }}
    onPress={onPress}
  >
    <View style={{
      width: 58,
      height: 58,
      borderRadius: 40,
      backgroundColor: '#62935F',
      marginLeft: 55,
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
        tabBarStyle: { backgroundColor: '#CBE4C3' },
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
      <Tab.Screen name="Messageboard" component={Messageboard} options={{
        headerShown: false,

        tabBarIcon: ({ focused }) => (
          <Image
            source={require('../screen/image/btn_left.png')}
            resizeMode='contain'
            style={{
              width: 32,
              height: 35.21,
              marginLeft: 2.5,
              marginTop: 5,
            }}
          />
        ),
        tabBarButton: (props) => (
          <CustomTabBarButtonA {...props} />
        )

      }} />

      <Tab.Screen name="NurtureHome" component={NurtureHome} options={{
        headerShown: false,

        tabBarIcon: ({ focused }) => (
          <Image
            source={require('../screen/image/btn_home.png')}
            resizeMode='contain'
            style={{
              width: 45,
              height: 54.45,
              marginLeft: 2.5,
              marginTop: 5,

            }}
          />
        ),
        tabBarButton: (props) => (
          <CustomTabBarButtonB {...props} />
        )

      }} />

      <Tab.Screen name="CactusCommunicate" component={CactusCommunicate} options={{
        headerShown: false,

        tabBarIcon: ({ focused }) => (
          <Image
            source={require('../screen/image/btn_right.png')}
            resizeMode='contain'
            style={{
              width: 31,
              height: 38.05,
              marginLeft: 2.5,
              marginTop: 5,

            }}
          />
        ),
        tabBarButton: (props) => (
          <CustomTabBarButtonC {...props} />
        )

      }} />


      <Tab.Screen name="Observepage" component={Observepage} options={{
        headerShown: false,

        tabBarIcon: ({ focused }) => (
          <Image
            source={require('../screen/image/btn_right.png')}
            resizeMode='contain'
            style={{
              width: 31,
              height: 38.05,
              marginLeft: 250,
              marginTop: 5,
            }}
          />
        ),
        tabBarButton: (props) => (
          <CustomTabBarButtonC {...props} />
        )

      }} />


    </Tab.Navigator>
  );
}

// const ModalStack = ({ navigation }) => {
//   const { colorMode } = useColorMode();

//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Nurture"
//         component={Nurture}
//         options={{
//           title: "Nurture",
//           headerStyle: {
//             backgroundColor: colorMode == 'light' ? 'white' : 'black',
//           },
//           headerTitleStyle: {
//             color: colorMode == 'light' ? 'black' : 'white',
//             fontWeight: '400',
//             fontSize: 20
//           },
//           headerLeft: () => (
//             Platform.OS == 'ios' ?
//               <></> :
//               <MaterialCommunityIcons
//                 name={'menu'}
//                 color={colorMode == 'light' ? 'black' : 'white'}
//                 size={20}
//                 onPress={() => navigation.openDrawer()}
//                 style={{ marginRight: 20 }}
//               />
//           ),
//         }}
//       />
//       <Stack.Screen
//         name="Modal"
//         component={Modal}
//         options={{
//           title: "Modal",
//           headerStyle: {
//             backgroundColor: colorMode == 'light' ? 'white' : 'black',
//           },
//           headerTintColor: colorMode == 'light' ? 'black' : 'white',
//           headerTitleStyle: {
//             color: colorMode == 'light' ? 'black' : 'white',
//             fontWeight: '400',
//             fontSize: 20
//           },
//         }}
//       />
//       {/* <Stack.Screen
//         name="AccountSetting"
//         component={AccountSettingScreen}
//         options={{
//           title: "Account",
//           headerStyle: {
//             backgroundColor: colorMode == 'light' ? 'white' : 'black',
//           },
//           headerTintColor: colorMode == 'light' ? 'black' : 'white',
//           headerTitleStyle: {
//             color: colorMode == 'light' ? 'black' : 'white',
//             fontWeight: '400',
//             fontSize: 20
//           },
//         }}
//       /> */}

//     </Stack.Navigator>
//   );
// }

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
});
// ,ModalStack
export default Tabs;