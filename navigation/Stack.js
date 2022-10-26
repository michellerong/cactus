import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Messageboard from "../screen/components/Messageboard";
import Modal from "../screen/components/Modal";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App (){
    return(
        
            <Stack.Navigator>
                <Stack.Screen
                name="Messageboard"
                component={Messageboard}
                options={{title:"Welcome"}}
                />
                
            </Stack.Navigator>
        
    );
    
}