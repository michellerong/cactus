import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import Messageboard from './Messageboard';
import CactusCommunicate from '../pages/CactusCommunicate';
import Observepage from '../pages/Observepage';
import Loginpage from '../pages/Loginpage';
import Registerpage from '../pages/Registerpage';

const RootStack = createStackNavigator(
    {
        Messageboard:Messageboard,
        CactusCommunicate:CactusCommunicate,
        Observepage:Observepage,
        Loginpage:Loginpage,
        Registerpage:Registerpage,
    },
);

const AppContainer = createAppContainer(RootStack);

export default class Root extends React.Component{
    render(){
        return <AppContainer />;
    }
}