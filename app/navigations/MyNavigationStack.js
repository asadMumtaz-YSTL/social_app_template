
// link     https://www.youtube.com/watch?v=-geFlTAIUAk&ab_channel=CodingwithArtem  // for SPLASH SCREEN
// link     https://reactnative.dev/docs/navigation

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import { Colors } from '../styles/colors';

import login from '../screens/Login/index';
import home from './../screens/Home/index';
import profile from './../screens/Profile/index';
import myNetwork from './app/screens/MyNetwork/MyNetwork';


const MyNavigationStack = () => {

    return (

        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    lazy: true,
                    headerStyle: {
                        backgroundColor: Colors.appBGColor,
                    },
                    headerTintColor: Colors.white,
                    contentStyle: { backgroundColor: Colors.white },
                }}>
                <Stack.Screen
                    name="login"
                    component={login}
                    options={{
                        title: '',
                        headerShown: true,
                    }}
                />
                <Stack.Screen
                    name="home"
                    component={home}
                    options={{
                        title: 'Home',
                        headerShown: true
                    }}
                />
                <Stack.Screen
                    name="profile"
                    component={profile}
                    options={{
                        title: '',
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="myNetwork"
                    component={myNetwork}
                    options={{
                        title: 'My Network',
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MyNavigationStack