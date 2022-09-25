import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Colors } from "../../../styles/colors";

const Follow_Likes_Count = ({ following, followers, likes, ...props }) => {
    return (
        <View style={styles.contanier}>

            <View style={styles.sectionView}>
                <TouchableOpacity style={styles.link} activeOpacity={0.8}>
                    <Text style={styles.number}>{following}</Text>
                    <Text style={styles.text}>Following</Text>
                </TouchableOpacity>
            </View>

            <View style={[styles.sectionView, styles.centerView]}>
                <TouchableOpacity style={styles.link} activeOpacity={0.8}>
                    <Text style={styles.number}>{followers}</Text>
                    <Text style={styles.text}>Followers</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.sectionView}>
                <TouchableOpacity style={styles.link} activeOpacity={0.8}>
                    <Text style={styles.number}>{likes}</Text>
                    <Text style={styles.text}>Like</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Follow_Likes_Count

const styles = StyleSheet.create({
    contanier: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 8,
        marginBottom: 40,
        marginTop: 50,
    },
    sectionView: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    centerView: {
        borderColor: Colors.appBGColor,
        borderRightWidth: 2,
        borderLeftWidth: 2,
    },
    link: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    number: {
        color: Colors.appBGColor,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 20,
    },
    text: {
        color: Colors.appBGColor,
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 18,
    },

})