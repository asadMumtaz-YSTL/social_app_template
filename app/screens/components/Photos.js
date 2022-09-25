import React, { useState } from "react";
import { StyleSheet, StatusBar, View, Text, TouchableOpacity, Dimensions, Modal, ActivityIndicator } from 'react-native'
import FastImage from "react-native-fast-image";
import { Colors } from "../../styles/colors";
import { PHOTO_DATA } from '../ConstantData/PhotoData'

const { width, height } = Dimensions.get('window')

const Photos = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const load = <ActivityIndicator size='' />

    return (
        <View style={styles.contanier}>

            <StatusBar barStyle={modalVisible == false ? 'light-content' : 'dark-content'} />

            <View style={styles.header}>
                <Text style={styles.headingText}>Photos</Text>
            </View>

            <View style={styles.photos}>
                {PHOTO_DATA.map((item) => {
                    return (
                        <TouchableOpacity activeOpacity={0.9}
                            style={[styles.photo_item, styles.shadow]} key={item.id}
                            onPress={() => {
                                setModalImage(item.image)
                                setModalVisible(true)
                            }}
                        >
                            <FastImage onLoad={() => {
                                load
                            }} source={item.image} style={styles.image} resizeMode='cover' />
                        </TouchableOpacity>
                    )
                })}
            </View>

            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    // transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            {/* CLOSE BTN */}
                            <TouchableOpacity
                                style={{ position: 'absolute', right: 20, top: 20, zIndex: 2, borderRadius: 16, overflow: 'hidden' }}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}>
                                <FastImage source={require('../../images/closeicon.png')} style={{ width: 30, height: 30, backgroundColor: Colors.white, padding: 5 }} />
                            </TouchableOpacity>

                            <FastImage source={modalImage} style={{ width: width, height: '100%' }} resizeMode='contain' />

                        </View>
                    </View>
                </Modal>
            </View>

        </View>
    )
}

export default Photos

const styles = StyleSheet.create({
    contanier: {
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
    photos: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 8,
        alignItems: 'center',
        overflow: 'hidden',
        flexWrap: 'wrap',
    },
    photo_item: { 
        marginBottom: 15,
    },
    image: {
        borderRadius: 6,
        height: ((Dimensions.get('window').width) / 2 - 25) * 1.5,
        width: (Dimensions.get('window').width) / 2 - 13,
        // opacity: 0.9,
    },
    shadow: {
        shadowColor: '#000',
        shadowOpacity: 0.50,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowRadius: 2,
        elevation: 2,
    },

    // FOR IMAGE MODAL
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 44,
        flex: 1,
    },
    modalView: {
        backgroundColor: "white",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            height: 2,
            width: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        elevation: 2,
        padding: 10,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        textAlign: "center",
        fontWeight: "bold",
        color: "white",
    },
    modalText: {
        textAlign: "center",
        marginBottom: 15,
    },
})