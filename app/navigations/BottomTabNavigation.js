import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions, } from 'react-native'

const { width, height } = Dimensions.get('window')

// IMAGES
const link = '../images/Tabs'

const home = require(`${link}/home.png`)
const homeActive = require(`${link}/homeActive.png`)
const user = require(`${link}/user.png`)
const userActive = require(`${link}/userActive.png`)
const addPost = require(`${link}/addPost_B.png`)
const logout = require(`${link}/logout.png`)
const myNetwork = require(`${link}/myNetwork.png`)
const myNetworkActive = require(`${link}/myNetworkActive.png`)

import { useNavigation } from '@react-navigation/native';
import { Colors } from '../styles/colors'

const BottomTab = ({ index }) => {

    const navigation = useNavigation();

    const dataa = [
        {
            index: 1,
            image: home,
            activeImage: homeActive,
            title: 'Home',
            naviga: 'home'
        },
        {
            index: 2,
            image: user,
            activeImage: userActive,
            title: 'Profile',
            naviga: 'profile'
        },
        {
            index: 3,
            image: addPost,
            activeImage: addPost,
            title: 'Post',
            naviga: 'AddPost'
        },
        {
            index: 4,
            image: myNetwork,
            activeImage: myNetworkActive,
            title: 'My Network',
            naviga: 'myNetwork'
        },
        {
            index: 5,
            image: logout,
            activeImage: logout,
            title: 'Logout',
            naviga: 'login'
        },
    ]

    const renderItem = (item) => {
        return (
            <TouchableOpacity
                key={item.index}
                activeOpacity={0.7}
                style={[styles.tab, { borderTopColor: index == item.index ? Colors.appBGColor : '#eee' }]}
                onPress={() => {
                    navigation.navigate(item.naviga);
                }}
            >
                <Image
                    source={item.index == index ? item.activeImage : item.image}
                    style={styles.image}
                    resizeMode='contain'
                />
                <Text style={[styles.text, { color: index == item.index ? Colors.appBGColor : Colors.black }]}>{item.title}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.tabView}>

            {dataa.map((item) => {
                return renderItem(item)
            })}

        </View>
    )
}

const styles = StyleSheet.create({
    tabView: {
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        flexDirection: 'row',
        position: 'absolute',
        paddingHorizontal: 7,
        width: width,
        height: 73,
        bottom: 0,
    },
    tab: {
        alignItems: 'center',
        borderTopWidth: 3,
        height: 60,
        flex: 1,
    },
    image: {
        alignSelf: 'center',
        marginTop: 6,
        height: 30,
        width: 30,
    },
    text: {
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 11,
        marginTop: 2,
    }
})

export default BottomTab