import React, { useState } from 'react'
import { StyleSheet, View, Dimensions, Text, TouchableOpacity, Alert, Modal } from 'react-native'
import FastImage from "react-native-fast-image";
import { Colors } from '../../../styles/colors';
const { width, height } = Dimensions.get('window')

const Header = ({ navigation, ...props }) => {

    const [modalVisible, setModalVisible] = useState(false);


    return (
        <View style={styles.header}>

            <View style={styles.back}>
                <TouchableOpacity onPress={() => { }} activeOpacity={0.99} style={styles.backLink}>
                    {/* <FastImage style={styles.backIcon} resizeMode='cover' source={require('../../../images/back.png')} /> */}
                </TouchableOpacity>
            </View>

            <View style={styles.action}>
                <TouchableOpacity onPress={() => { setModalVisible(!modalVisible); }} activeOpacity={0.9} style={styles.actionLink} >
                    <FastImage style={styles.option} resizeMode='cover' source={require('../../../images/edit.png')} />
                </TouchableOpacity>
            </View>

            <Modal
                animationType="slide"
                // transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={{marginTop:45}}>
                    <View style={styles.modalView}>
                        {/* CLOSE BTN */}
                        <TouchableOpacity
                            style={{ position: 'absolute', right: 20, top: 5, zIndex: 2, borderRadius: 16, overflow: 'hidden' }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}>
                            <FastImage source={require('../../../images/closeicon.png')} style={{ width: 30, height: 30, backgroundColor: Colors.white, padding: 5 }} />
                        </TouchableOpacity>

                        {/* <FastImage source={modalImage} style={{ width: width, height: '100%' }} resizeMode='contain' /> */}
                        <Text>UPLOAD NEW PROFILE PHOTO</Text>
                        <Text>UPLOAD NEW PROFILE PHOTO</Text>
                        <Text>UPLOAD NEW PROFILE PHOTO</Text>
                        <Text>UPLOAD NEW PROFILE PHOTO</Text>

                    </View>
                </View>
            </Modal>

        </View>
    );
}

export default Header

const styles = StyleSheet.create({
    header: {
        justifyContent: 'space-between',
        justifyContent: 'center',
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        width: width,
        height: 60,
    },
    back: {
        flex: 1,
    },
    backLink: {
        height: 40,
        padding: 5,
        width: 30,
    },
    backIcon: {
        height: 30,
        width: 30,
    },
    action: {
        justifyContent: 'flex-end',
    },
    actionLink: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        padding: 5,
        width: 30,
    },
    option: {
        height: 35,
        width: 35,
    },
})