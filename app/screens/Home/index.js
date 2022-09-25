import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
} from 'react-native';

import Posts from '../components/Posts'
import BottomTab from '../../navigations/BottomTabNavigation';

const Home = (props) => {
    return (
        <SafeAreaView style={styles.vieBox}>
            <StatusBar barStyle={'light-content'} />

            <Posts />

            <BottomTab index={1} />
            
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    vieBox: {
        backgroundColor: '#f2f2f2',
        flex: 1,
    },
})

export default Home