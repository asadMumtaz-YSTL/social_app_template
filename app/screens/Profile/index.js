import React, { useEffect, useState } from 'react';
import {
    NativeModules,
    ScrollView,
    StyleSheet,
    StatusBar,
    View,
} from 'react-native';
import { Colors } from '../../styles/colors';

import Header from './components/Header';
import ProfileImage from './components/ProfileImage';
import Connstion from './components/Connection';
import UserName from './components/UseeName'
import Follow_Likes_Details from './components/Follow_Likes_Count'
import Followers_Details from './components/Followers';
import PHOTOS from '../components/Photos';
import BottomTab from '../../navigations/BottomTabNavigation';

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = StatusBarManager.HEIGHT;

const Profile = (props) => {

    return (
        <View style={styles.container}>

            <StatusBar
                animated={false}
                backgroundColor="#6d5ff8"
                networkActivityIndicatorVisible={true}
                showHideTransition='fade'
            // hidden
            />

            <View style={styles.header}>
                <Header />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <ProfileImage image='' item='' />

                    <UserName />

                    <Connstion />

                    <Follow_Likes_Details following='123' followers='5.56 K' likes='4.2 M' />

                    <View style={styles.divider} />

                    <Followers_Details />

                    <View style={styles.divider} />

                    <PHOTOS />

                </View>
            </ScrollView>

            <BottomTab index={2} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.appBGColor,
        flex: 1,
    },
    header: {
        marginTop: 40,
    },
    content: {
        backgroundColor: Colors.white,
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        paddingBottom: 50,
        paddingTop: 90,
        marginTop: 60,
        // flex: 1,
    },
    divider: {
        backgroundColor: '#eeeef1',
        height: 20,
    },
});

export default Profile