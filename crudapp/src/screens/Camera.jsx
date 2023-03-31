import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, Text } from "react-native";
import { RNCamera } from 'react-native-camera';
import Icon from "react-native-vector-icons/MaterialIcons";
import Ionicon from 'react-native-vector-icons/Ionicons';
import { launchImageLibrary } from 'react-native-image-picker';


const Camera = ({ navigation, route }) => {

    const [type, setType] = useState(RNCamera.Constants.Type.back);
    const [flash, setFlash] = useState(RNCamera.Constants.FlashMode.off);
    const [camera, setCamera] = useState(null);


    let options = {
        saveToPhotos: true,
        mediaType: "photo",
    };


    const openImageGallery = async () => {
        const data = await launchImageLibrary({ options });

        if (route.params.updateProfile) return navigation.navigate("Profile", { image: data.assets[0].uri })
        else
            return navigation.navigate("Register", { image: data.assets[0].uri })
    };


    const takePicture = async () => {
        const data = await camera.takePictureAsync()
        if (route.params.updateProfile) return navigation.navigate("Profile", { image: data.uri })
        else
            return navigation.navigate("Register", { image: data.uri })
    };



    const handleClose = () => {
        if (route.params.updateProfile) return navigation.navigate("Profile")
        else
            return navigation.navigate("Register");
    };

    return (
        <>

            <StatusBar backgroundColor="#000" barStyle="dark-content" />


            <View style={styles.mainContainer}>


                <View style={styles.topContainer}>

                    <Ionicon name="close" size={25} color="#fff"
                        onPress={handleClose}
                        style={styles.closeIcon}
                    />

                    <Ionicon name={flash === RNCamera.Constants.FlashMode.off ? "flash-off" : "flash"} size={25} color="#fff"
                        style={styles.flashIcon}
                        onPress={() =>
                            setFlash(
                                flash === RNCamera.Constants.FlashMode.off ? RNCamera.Constants.FlashMode.on : RNCamera.Constants.FlashMode.off
                            )
                        }
                    />
                </View>


                <RNCamera
                    ref={(e) => setCamera(e)}
                    style={styles.cameraContainer}
                    type={type}
                    flashMode={flash}
                    androidCameraPermissionOptions={{
                        title: 'Task Management',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                />

                <View style={styles.bottomContainer}>

                    <Icon name="image" size={30} color="#fff"
                        onPress={openImageGallery}
                    />


                    <Icon name="camera" size={50} color="#fff" onPress={takePicture} />

                    <Icon
                        name="flip-camera-android"
                        size={30}
                        color="#fff"
                        onPress={() =>
                            setType(
                                type === RNCamera.Constants.Type.back ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back
                            )
                        }
                    />

                </View>
            </View>
        </>
    )

};

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },

    topContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 0.3,
    },


    closeIcon: {
        marginVertical: 12,
        marginHorizontal: 10,
    },

    flashIcon: {
        marginVertical: 12,
        marginHorizontal: 10,
    },

    cameraContainer: {
        flex: 1,
        aspectRatio: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    bottomContainer: {
        flex: 0,
        flexDirection: 'row',
        paddingVertical: 20,
        justifyContent: 'space-around',
    },

});

export default Camera;