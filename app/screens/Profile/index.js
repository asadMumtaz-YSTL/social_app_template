import React, { useEffect, useState } from 'react';
import {
    NativeModules,
    ScrollView,
    StyleSheet,
    StatusBar,
    View,
} from 'react-native';
import { Colors } from '../../styles/colors';

import Header from './components/ProfileHeader';
import ProfileImage from './components/ProfileImage';
import Chat_Follow_Share from './components/Chat_Follow_Share';
import UserName from './components/UserName'
import Network_Like_Count from './components/Network_Like_Count'
import MayYouKnow from './components/MayYouKnow';
import Photos from '../components/Photos';
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

                    <UserName name='Malik Asad Mumtaz' userName='asadmumtaz92' />

                    <Chat_Follow_Share />

                    <Network_Like_Count following='123' followers='5.56 K' likes='4.2 M' />

                    <View style={styles.divider} />
                    <MayYouKnow />
                    <View style={styles.divider} />

                    <Photos />

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