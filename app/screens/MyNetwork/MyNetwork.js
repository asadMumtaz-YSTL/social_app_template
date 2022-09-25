import React, { useState } from 'react'
import {
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Text,
    View,
} from 'react-native';

import BottomTab from '../../navigations/BottomTabNavigation';
import { Colors } from '../../styles/colors';
import Follower from '../components/Followers'
import Following from '../components/Following'

const MyNetwork = () => {
    const [isFollower, setFollowr] = useState(true)

    return (
        <SafeAreaView style={styles.vieBox}>
            <StatusBar barStyle={'dark-content'} />

            <View style={styles.headingView}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => { setFollowr(true) }}
                    style={[styles.link, { borderColor: isFollower ? Colors.appBGColor : '#e0e0e0' }]}
                >
                    <Text style={[styles.linkText, { color: isFollower ? Colors.appBGColor : Colors.black }]}>{`Followers`}</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} onPress={() => { setFollowr(false) }}
                    style={[styles.link, { borderColor: !isFollower ? Colors.appBGColor : '#e0e0e0' }]}
                >
                    <Text style={[styles.linkText, { color: !isFollower ? Colors.appBGColor : Colors.black }]}>{`Following`}</Text>
                </TouchableOpacity>
            </View>

            <>
                {isFollower
                    ? <Follower />
                    : <Following />
                }
            </>

            <BottomTab index={4} />

        </SafeAreaView >
    )
}

export default MyNetwork

const styles = StyleSheet.create({
    vieBox: {
        backgroundColor: '#f2f2f2',
        flex: 1
    },
    headingView: {
        justifyContent: 'space-between',
        backgroundColor: '#e0e0e0',
        paddingHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 20,
        width: '90%',
        height: 40,
    },
    link: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 0.9,
        width: '48%',
        height: 30,
    },
    linkText: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 18,
    }
});