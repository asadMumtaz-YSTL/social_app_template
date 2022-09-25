import React from 'react'
import { StyleSheet, TouchableOpacity, Alert } from 'react-native'
import FastImage from "react-native-fast-image";
import { Colors } from '../../../styles/colors';

const ProfileImage = () => {
    return (
        <TouchableOpacity style={[styles.profileImage, styles.shadow]} activeOpacity={0.99}
            onPress={() => {
                Alert.alert('msg', 'You Want To Change Profile Photo!');
            }}
        >
            <FastImage source={require('../../../images/panda_love.png')} style={styles.image} resizeMode='contain' />
        </TouchableOpacity>
    );
}

export default ProfileImage

const styles = StyleSheet.create({
    profileImage: {
        borderColor: Colors.white,
        alignItems: 'center',
        position: 'absolute',
        alignSelf: 'center',
        borderRadius: 65,
        marginTop: -60,
        height: 130,
        width: 130,
        zIndex: 3,
    },
    image: {
        borderColor: Colors.white,
        overflow: 'hidden',
        borderRadius: 65,
        borderWidth: 4,
        height: 130,
        width: 130,
    },
    shadow: {
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowOffset: {
            width: -1,
            height: 0,
        },
        shadowRadius: 5,
        elevation: 5,
    },
})