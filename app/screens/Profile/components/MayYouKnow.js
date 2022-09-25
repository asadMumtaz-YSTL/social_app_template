import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import FastImage from "react-native-fast-image";
import { Colors } from "../../../styles/colors";
import { FollowerData } from '../../ConstantData/FollowersData'
import { useNavigation } from '@react-navigation/native';

const MayYouKnow = ({ following, followers, likes, ...props }) => {

    const navigation = useNavigation();

    return (
        <View style={styles.contanier}>
            <View style={styles.header}>
                <Text style={styles.headingText}>May you know!</Text>

                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => { navigation.navigate('myNetwork') }}
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

export default MayYouKnow

const styles = StyleSheet.create({
    contanier: {
        flexDirection: 'column',
        paddingVertical: 10,
    },
    header: {
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
    },
    headingText: {
        color: Colors.black,
        alignSelf: 'center',
        textAlign: 'center',
        letterSpacing: 0.4,
        fontWeight: '700',
        fontSize: 22,
    },
    seeAll: {
        color: Colors.appBGColor,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: '600',
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
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
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