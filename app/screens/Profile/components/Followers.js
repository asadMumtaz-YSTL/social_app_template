import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import FastImage from "react-native-fast-image";
import { Colors } from "../../../styles/colors";
import { FollowerData } from '../../ConstantData/FollowersData'

const Followers_Details = ({ following, followers, likes, navigation, ...props }) => {

    return (
        <View style={styles.contanier}>
            <View style={styles.header}>
                <Text style={styles.headingText}>Follower</Text>

                <TouchableOpacity
                    activeOpacity={0.8}
                // onPress={() => { navigation.navigate('myNetwork') }}
                >
                    <Text style={styles.seeAll}>See All</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.follower}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {/* <Follower /> */}
                    {FollowerData.map((item) => {
                        return (
                            <View style={[styles.follower_item, { marginRight: FollowerData.length == item.id ? 15 : 1 }]} key={item.id}>
                                <FastImage source={item.profilePic} style={styles.image} />
                                <Text style={styles.name}>{item.userName}</Text>
                            </View>
                        )

                    })}
                </ScrollView>
            </View>

        </View >
    )
}

export default Followers_Details

const styles = StyleSheet.create({
    contanier: {
        flexDirection: 'column',
        paddingVertical: 20,
    },
    header: {
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        height: 40
    },
    headingText: {
        color: Colors.black,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: '700',
        letterSpacing: 1,
        fontSize: 24,
    },
    seeAll: {
        color: Colors.appBGColor,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: '500',
        letterSpacing: 1,
        fontSize: 16,
    },
    follower: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
        marginVertical: 20,
        width: '100%',
    },
    follower_item: {
        marginLeft: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        borderRadius: 30,
        height: 60,
        width: 60,
    },
    name: {
        color: Colors.black,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: '500',
        marginTop: 10,
        fontSize: 14,
    },
})