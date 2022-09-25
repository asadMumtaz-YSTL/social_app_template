import React, { useState } from "react";
import {
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    ScrollView,
    StatusBar,
    Image,
    Modal,
    View,
    Text,
} from 'react-native'
import { Colors } from "../../styles/colors";
import ViewMoreText from 'react-native-view-more-text';
import FastImage from "react-native-fast-image";
import { Posts as POST_DATA, } from '../ConstantData/PostData'

const { width, height } = Dimensions.get('window')

// Images
const heart = require('../../images/heart.png')
const heartActive = require('../../images/heartActive.png')
const sharee = require('../../images/share_.png')
const shareeActive = require('../../images/shareActive.png')

const Photos = ({ following, followers, likes, ...props }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const [menuVisible, setMenuVisible] = useState(false)
    const [openedMenu, setOpenedMenu] = useState(0)
    const [like, setLike] = useState(false)
    const [share, setShare] = useState(false)

    const renderViewMore = (onPress) => {
        return (
            <Text onPress={onPress} style={styles.seeMoreText}>
                {`See more`}
            </Text>
        )
    }
    const renderViewLess = (onPress) => {
        return (
            <Text onPress={onPress} style={styles.seeMoreText}>
                {`See less`}
            </Text>
        )
    }

    return (
        <View style={styles.post}>
            <StatusBar barStyle={modalVisible == false ? 'light-content' : 'dark-content'} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.postView}>

                    {POST_DATA.map((item) => {
                        return (
                            <View style={[styles.post_item]} key={item.post_id} >

                                {/* MENU */}
                                <TouchableOpacity
                                    style={{ position: 'absolute', right: 10, top: 10, padding: 5, zIndex: 3 }}
                                    onPress={() => {
                                        setMenuVisible(!menuVisible)
                                        setOpenedMenu(item.post_id)
                                    }}
                                >
                                    <FastImage source={require('../../images/Icon-Edit.png')} style={{ height: 20, }} resizeMode='contain' />
                                </TouchableOpacity>

                                {/* MENU VIEW */}
                                {(menuVisible && openedMenu == item.post_id)
                                    && <View key={item.post_id}
                                        style={[
                                            styles.imageShadow, {
                                                position: 'absolute', right: 20, top: 40,
                                                width: 200, zIndex: 4, paddingVertical: 3,
                                                backgroundColor: Colors.white,
                                                paddingHorizontal: 10,

                                            }
                                        ]}
                                    >
                                        <Text style={{ marginVertical: 4, }}>{`Edit Post`}</Text>
                                        <Text style={{ marginVertical: 4, }}>{`Edit Privacy`}</Text>
                                        <Text style={{ marginVertical: 4, }}>{`Save Post`}</Text>
                                    </View>
                                }

                                <View style={styles.userDetailView}>
                                    {/* USER PROFILE PHOTO */}
                                    <View style={[styles.imageShadow]}>
                                        <Image
                                            source={item.profilePic}
                                            style={[styles.profilePic, styles.imageShadow]}
                                            resizeMode='cover'
                                        />
                                    </View>

                                    {/* USER NAME & TIME */}
                                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                                        <Text style={[styles.textShadow, styles.userName]}>{item.userName}</Text>
                                        <Text style={styles.time}>{item.time}</Text>
                                    </View>
                                </View>

                                {/* POST TEXT */}
                                <View style={styles.description_view}>
                                    <ViewMoreText numberOfLines={2}
                                        renderViewMore={renderViewMore}
                                        renderViewLess={renderViewLess}
                                    >
                                        <Text style={styles.postText}>{item.postText}</Text>
                                    </ViewMoreText>
                                </View>

                                {/* POST IMAGES */}
                                <View style={styles.postImageView}>
                                    {
                                        item.noOfimages == 3
                                            ? <>
                                                <View style={styles.imageRow}>
                                                    {item.post_images.map((items, index) => {
                                                        if (index == 0 || index == 1) {
                                                            return <TouchableOpacity key={index} activeOpacity={0.9} onPress={() => { setModalImage(items); setModalVisible(true); }} >
                                                                <FastImage source={items} style={[styles.image, { width: width / 2, }]} resizeMode='cover' />
                                                            </TouchableOpacity>
                                                        }
                                                    })}
                                                </View>

                                                {item.post_images.map((items, index) => {
                                                    if (index == 2) {
                                                        return <TouchableOpacity key={index} activeOpacity={0.9} onPress={() => { setModalImage(items); setModalVisible(true); }} >
                                                            <FastImage source={items} style={styles.image} resizeMode='cover' />
                                                        </TouchableOpacity>
                                                    }
                                                })}
                                            </>
                                            : item.post_images.map((items, index) => {
                                                return (
                                                    <TouchableOpacity key={index} activeOpacity={0.9} onPress={() => { setModalImage(items); setModalVisible(true); }} >
                                                        <FastImage source={items} style={styles.image} resizeMode='cover' />
                                                    </TouchableOpacity>
                                                )
                                            })
                                    }
                                </View>

                                {/* LIKES COMMENTS SHARE  */}
                                <View style={styles.postFooter}>

                                    <TouchableOpacity activeOpacity={0.8} onPress={() => { setLike(!like) }}>
                                        <FastImage source={like == true ? heartActive : heart} style={[styles.icon]} resizeMode='cover' />
                                        <Text style={{ marginTop: 5, color: '#00000099', }}>
                                            <Text style={{ fontWeight: '700', color: '#000000', }}>{item.noOfLikes}</Text>
                                            {` Likes`}
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity activeOpacity={0.8}>
                                        <FastImage source={require('../../images/comment.png')} style={[styles.icon]} resizeMode='contain' />
                                        <Text style={{ marginTop: 5, color: '#00000099', }}>
                                            <Text style={{ fontWeight: '700', color: '#000000', }}>{item.noOfComments}</Text>
                                            {` Comments`}
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity activeOpacity={0.8} onPress={() => { setShare(!share) }}>
                                        <FastImage source={share == true ? shareeActive : sharee} style={[styles.icon, { width: 39, height: 35, marginTop: -5 }]} resizeMode='contain' />
                                        <Text style={{ marginTop: 5, color: '#00000099', }}>
                                            <Text style={{ fontWeight: '700', color: '#000000', }}>{item.noOfShare}</Text>
                                            {` Share`}
                                        </Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        )
                    })}

                </View>
            </ScrollView >

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
                            <TouchableOpacity style={styles.closeBtn}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}>
                                <FastImage source={require('../../images/closeicon.png')} style={styles.closeBtnImage} />
                            </TouchableOpacity>

                            <FastImage source={modalImage} style={{ width: width, height: '100%' }} resizeMode='contain' />

                        </View>
                    </View>
                </Modal>
            </View>

        </View >
    )
}

export default Photos

const styles = StyleSheet.create({
    post: {
        backgroundColor: '#f2f2f2',
    },
    postView: {
        justifyContent: 'space-between',
        paddingTop: 10,
    },
    post_item: {
        backgroundColor: Colors.white,
        marginBottom: 20,
        paddingTop: 3,
    },
    userDetailView: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
    },
    profilePic: {
        borderRadius: 22,
        height: 44,
        width: 44,
    },
    userName: {
        letterSpacing: 0.9,
        fontWeight: '700',
        lineHeight: 28,
        fontSize: 18,
    },
    time: {
        letterSpacing: 0.2,
        color: '#00000099',
        fontWeight: '700',
        fontSize: 11,
    },
    seeMoreText: {
        color: Colors.appBGColor,
        fontWeight: '800',
        textAlign: 'left',
        lineHeight: 20,
        lineHeight: 18,
        padding: 0,
    },
    description_view: {
        justifyContent: 'center',
        marginHorizontal: 10,
        marginTop: 10,
    },
    postText: {
        paddingHorizontal: 10,
        textAlign: 'justify',
        letterSpacing: 0.9,
        color: '#00000099',
        lineHeight: 20,
        fontSize: 14,
    },
    postImageView: {
        flexDirection: 'column',
        marginTop: 10,
    },
    imageRow: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: width,
    },
    image: {
        width: width,
        height: 250,
    },
    postFooter: {
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        flexDirection: 'row',
        paddingBottom: 8,
        marginTop: 10,
    },
    icon: {
        alignSelf: 'center',
        height: 30,
        width: 30,
    },

    // FOR IMAGE MODAL
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 44,
        flex: 1,
    },
    modalView: {
        backgroundColor: Colors.black,
        alignItems: "center",
    },
    closeBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        overflow: 'hidden',
        borderRadius: 17.5,
        right: 10,
        zIndex: 2,
        top: 15,
    },
    closeBtnImage: {
        // backgroundColor: Colors.white,
        height: 35,
        width: 35,
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