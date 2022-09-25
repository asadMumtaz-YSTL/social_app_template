
// link     https://www.youtube.com/watch?v=-geFlTAIUAk&ab_channel=CodingwithArtem  // for SPLASH SCREEN
// link     https://reactnative.dev/docs/navigation

import React, { useEffect, useState } from 'react';
import { StyleSheet, } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import login from './app/screens/Login';
import home from './app/screens/Home';
import profile from './app/screens/Profile';
import myNetwork from './app/screens/MyNetwork/MyNetwork';

import SplashScreen from 'react-native-splash-screen'
import { Colors } from './app/styles/colors';

const App = () => {
    useEffect(() => {
        // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        // SplashScreen.hide();
    }, [])

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
                }}
                initialRouteName={"home"}
                >
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

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
});


export default App