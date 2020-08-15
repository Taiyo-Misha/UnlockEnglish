import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../component/Login/Login';
import ForgotPassword from '../component/ForgotPassword/ForgotPassword';
import DashBoard from '../component/DashBoard/DashBoard';

const Stack=createStackNavigator();

export default class Router extends React.Component{
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator headerMode="none" screenOptions={{gestureEnabled:false}} >
                    <Stack.Screen name="Screen_DashBoard" component={DashBoard} />
                    <Stack.Screen name="Screen_Login" component={Login} />
                    <Stack.Screen name="Screen_ForgotPassword" component={ForgotPassword} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}