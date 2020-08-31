import 'react-native-gesture-handler';
import React from 'react';
import {
    StyleSheet,
    StatusBar,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import Router from './Router';
import StudyDiary from '../component/StudyDiary/StudyDiary';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Foundation from 'react-native-vector-icons/Foundation';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ScoreBook from '../component/ScoreBook/ScoreBook';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        return (
                            <Foundation
                                name="home"
                                size={37}
                                color={color}
                                style={{ paddingTop: 15 }}
                            />
                        );
                    } else if (route.name === 'Score') {
                        return (
                            <FontAwesome
                                name="user-circle"
                                size={30}
                                color={color}
                                style={{ paddingTop: 15 }}
                            />
                        );
                    } else if (route.name === 'Bell') {
                        return (
                            <FontAwesome
                                name="bell"
                                size={32}
                                color={color}
                                style={{ paddingTop: 15 }}
                            />
                        );
                    } else if (route.name === 'Menu') {
                        return (
                            <Entypo
                                name="menu"
                                size={36}
                                color={color}
                                style={{ paddingTop: 15 }}
                            />
                        );
                    }
                },
            })}
            tabBarOptions={{
                activeTintColor: '#3E4A90',
                inactiveTintColor: '#A2A2A2',
                style: {
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    backgroundColor: '#F2F2F2',
                },
            }}>
            <Tab.Screen
                name="Home"
                component={ScoreBook}
                options={{
                    tabBarLabel: '',
                }}
            />
            <Tab.Screen
                name="Score"
                component={StudyDiary}
                options={{
                    tabBarLabel: '',
                }}
            />
            <Tab.Screen
                name="Profile"
                component={StudyDiary}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <View>
                            <TouchableOpacity
                                style={{
                                    position: 'absolute',
                                    bottom: -20,

                                    justifyContent: 'center',
                                    alignSelf: 'center',
                                    height: 60,
                                    width: 60,
                                    borderRadius: 30,
                                }}>
                                <Image
                                    style={{
                                        height: 60,
                                        width: 60,
                                        borderRadius: 30,
                                    }}
                                    //source={require('../assets/img/anh.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Bell"
                component={StudyDiary}
                options={{
                    tabBarLabel: '',
                }}
            />

            <Tab.Screen
                name="Menu"
                component={StudyDiary}
                options={{
                    tabBarLabel: '',
                }}
            />
        </Tab.Navigator>
    );
}
function App() {
    console.log("run this")
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App