import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import FastImage from "react-native-fast-image";
import { Colors } from "../../../styles/colors";

const Chat_Follow_Share = () => {
    return (
        <View style={styles.connection}>

            <View style={styles.sectionView}>
                <TouchableOpacity style={styles.link} activeOpacity={0.8} >
                    <FastImage source={require('../../../images/chat.png')} style={styles.backIcon} />
                </TouchableOpacity>
            </View>

            <View style={styles.centerView}>
                <TouchableOpacity style={styles.followBtn} activeOpacity={0.8}>
                    <Text style={styles.followText}>FOLLOW</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.sectionView}>
                <TouchableOpacity style={styles.link} activeOpacity={0.8}>
                    <FastImage source={require('../../../images/share.png')} style={styles.editIcon} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Chat_Follow_Share

const styles = StyleSheet.create({
    connection: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 50,
    },
    sectionView: {
        justifyContent: 'center',
        flex: 2.5,
    },
    centerView: {
        flex: 5,
    },
    link: {
        backgroundColor: '#eeeef1',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 30,
        height: 50,
        width: 50,
    },
    backIcon: {
        height: 35,
        width: 35,
    },
    editIcon: {
        height: 30,
        width: 30,
    },
    followBtn: {
        backgroundColor: Colors.appBGColor,
        justifyContent: 'center',
        marginHorizontal: 15,
        borderRadius: 30,
        height: 50,
    },
    followText: {
        alignSelf: 'center',
        textAlign: 'center',
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: 20,
    },

})