import React from "react";
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import FastImage from "react-native-fast-image";
import { Colors } from "../../styles/colors";
import { FollowerData } from '../ConstantData/FollowersData'

const Followers = (props) => {

    return (
        <View style={styles.contanier}>

            <ScrollView showsVerticalScrollIndicator={false}>
                {FollowerData.map((item) => {
                    return (
                        <View key={item.id} style={[styles.follower_item, { marginRight: FollowerData.length == item.id ? 15 : 1 }]}>
                            <View style={[styles.imageShadow, { borderWidth: 0.2, borderRadius: 25 }]}>
                                <FastImage source={item.profilePic} style={styles.image} />
                            </View>

                            <Text style={styles.name}>{item.userName}</Text>
                        </View>
                    )
                })}
            </ScrollView>

        </View>
    )
}

export default Followers

const styles = StyleSheet.create({
    contanier: {
        paddingTop: 15,
        flex: 1,
    },
    follower_item: {
        borderBottomColor: Colors.gray,
        flexDirection: 'row',
        borderBottomWidth: 1,
        alignSelf: 'center',
        marginVertical: 7,
        paddingBottom: 10,
        width: '90%',
    },
    image: {
        borderRadius: 25,
        height: 50,
        width: 50,
    },
    name: {
        color: Colors.black,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: '500',
        fontWeight: '700',
        marginLeft: 15,
        fontSize: 16,
    },
    imageShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.6,
        shadowRadius: 4,
        elevation: 5
    },
    textShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5
    },
})