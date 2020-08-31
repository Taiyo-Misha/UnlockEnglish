import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, StatusBar, View, TouchableOpacity, Image, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Foundation from 'react-native-vector-icons/Foundation';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Router from './src/router/Router';

import SplashScreen from './src/component/Splash/Splash'
import Login from './src/component/Login/Login';
import Confirm from './src/component/ForgotPassword/ConfirmPin'
import NewPassword from './src/component/ForgotPassword/NewPassword'

import HomePage from './src/component/Home/Home'
import Schedule from './src/component/Schedule/Schedule'
import ScheduleDetail from './src/component/Schedule/ScheduleDetail'
import ScoreBook from './src/component/ScoreBook/ScoreBook';
import StudyDiary from './src/component/StudyDiary/StudyDiary'
import List from './src/component/PleaseLeave/List';
import Addpl from './src/component/PleaseLeave/Addpl';
import Survey from './src/component/Survey/Survey';
import News from './src/component/News/News';
import NewsDetail from './src/component/NewsDetail/NewsDetail'

import Contact from './src/component/Contact/Contact';
import Report from './src/component/Report/Report';

import Account from './src/component/Account/Account';
import DetailAccount from './src/component/Account/DetailAccount';
import CheckOldPassword from './src/component/ChangePassword/CheckOldPassword';
import ChangeOldPassword from './src/component/ChangePassword/ChangeOldPassword'


import styles from './AppStyle'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const SystemStack = createStackNavigator();

function Home(){
  return (
    <HomeStack.Navigator initialRouteName="Screen_Home" > 
      <HomeStack.Screen name="Screen_Home" component={HomePage} options={{ headerShown: false }}/>
      <HomeStack.Screen name="Screen_Schedule" component={Schedule} options={{ headerShown: false }}/>
      <HomeStack.Screen name="Screen_ScheduleDetail" component={ScheduleDetail} options={{ headerShown: false }}/>
      <HomeStack.Screen name="Screen_ScoreBook" component={ScoreBook} options={{ headerShown: false }}/>
      <HomeStack.Screen name="Screen_StudyDiary" component={StudyDiary} options={{ headerShown: false }}/>
      <HomeStack.Screen name="Screen_PleaseLeave" component={List} options={{ headerShown: false }}/>
      <HomeStack.Screen name="Screen_AddPleaseLeave" component={Addpl} options={{ headerShown: false }}/>
      <HomeStack.Screen name="Screen_Survey" component={Survey} options={{ headerShown: false }}/>
      <HomeStack.Screen name="Screen_News" component={News} options={{ headerShown: false }}/>
      <HomeStack.Screen name="Screen_NewsDetail" component={NewsDetail} options={{ headerShown: false }}/>
    </HomeStack.Navigator>
  );
}

function Menu(){
  return (
    <SystemStack.Navigator initialRouteName="Screen_Account" > 
      <SystemStack.Screen name="Screen_Account" component={Account} options={{ headerShown: false }}/>
      <SystemStack.Screen name="Screen_DetailAccount" component={DetailAccount} options={{ headerShown: false }}/>
      <SystemStack.Screen name="Screen_CheckOldPassword" component={CheckOldPassword} options={{ headerShown: false }}/>
      <SystemStack.Screen name="Screen_ChangeOldPassword" component={ChangeOldPassword} options={{ headerShown: false }}/>
    </SystemStack.Navigator>
  );
}

function App_Screen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') 
            return ( <Foundation name="home" size={37} color={color}/> );
          else if (route.name === 'Contact') 
            return ( <FontAwesome name="user-circle" size={30} color={color}/> );
          else if (route.name === 'Bell') 
            return ( <FontAwesome name="bell" size={32} color={color}/> );
          else if (route.name === 'Menu') 
            return ( <Entypo name="menu" size={36} color={color}/> );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#3e4a90',
        inactiveTintColor: '#A2A2A2',
        style: {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          backgroundColor: '#F2F2F2',
        },
      }}>
      <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: '' }} />
      <Tab.Screen name="Contact" component={Contact} options={{ tabBarLabel: '' }} />
      <Tab.Screen name="Profile" component={ScoreBook}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <View>
              <TouchableOpacity style={styles.ProfileBtn}>
                <Image style={styles.ProfileBtnPic} source={require('./assets/img/anh.png')} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Tab.Screen name="Bell" component={Report} options={{ tabBarLabel: '' }} />
      <Tab.Screen name="Menu" component={Menu} options={{ tabBarLabel: '' }} />
    </Tab.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Screen_Splash" screenOptions={{ gestureEnabled: false }}>
        <Stack.Screen name="Screen_Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Screen_Login" component={Login} />
        <Stack.Screen name="Screen_Confirm" component={Confirm} />
        <Stack.Screen name="Screen_NewPassword" component={NewPassword} />
        <Stack.Screen name="Home" component={App_Screen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;