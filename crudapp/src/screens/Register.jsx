import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { Avatar, Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/action';
import mime from 'mime';


const Register = ({ navigation, route }) => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [avatar, setAvatar] = useState("");

    const dispatch = useDispatch();

    const handleImage = () => {
        navigation.navigate("Camera", {
            updateProfile: false
        })
    };


    const registerHandler = () => {
        const myForm = new FormData();
        myForm.append("name", name);
        myForm.append("email", email);
        myForm.append("password", password);
        myForm.append("avatar", {
            uri: avatar,
            type: mime.getType(avatar),
            name: avatar.split("/").pop()
        })

        dispatch(register(myForm));
        alert("OTP sent your email please verify..!")
    }


    useEffect(() => {
        if (route.params) {
            if (route.params.image) {
                setAvatar(route.params.image)
            }
        }
    }, [route]);

    return (
        <>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />

            <View style={styles.mainContainer}>

                <View style={styles.formContainer}>

                    <View style={styles.formTopContainer}>

                        {
                            avatar ?
                                <Avatar.Image size={100}
                                    source={{ uri: avatar }}
                                    style={styles.avatar} />

                                : <Avatar.Image size={100}
                                    style={styles.avatar}
                                    source={require('../../assets/avatarImg.png')}
                                />

                        }
                        <TouchableOpacity onPress={handleImage}>
                            <Text style={{ marginTop: 5, color: "#3C5898", fontWeight: "bold", }}>Upload Photo</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.formBottomContainer}>

                        <View style={styles.formBottomSubContainer}>

                            <View style={styles.inputBoxContainer}>
                                <Ionicon name="person" size={20} />
                                <TextInput style={styles.inputBox} placeholder="Enter Your Name"
                                    value={name}
                                    onChangeText={setName}
                                />
                            </View>


                            <View style={styles.inputBoxContainer}>
                                <Ionicon name="mail" size={20} />
                                <TextInput style={styles.inputBox} placeholder="Enter Your Email"
                                    value={email}
                                    onChangeText={setEmail}
                                />
                            </View>


                            <View style={styles.inputBoxContainer}>
                                <FontAwesome name="lock" size={20} />
                                <TextInput
                                    style={styles.inputBox}
                                    placeholder="Enter Your Password"
                                    secureTextEntry={isPasswordVisible ? false : true}
                                    value={password}
                                    onChangeText={setPassword}
                                />
                                <TouchableOpacity
                                    onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                                    <FontAwesome
                                        name={isPasswordVisible ? 'eye-slash' : 'eye'}
                                        size={20}
                                    />
                                </TouchableOpacity>
                            </View>


                            <View style={styles.inputBoxContainer}>
                                <FontAwesome name="lock" size={20} />
                                <TextInput
                                    style={styles.inputBox}
                                    placeholder="Enter Your Confirm Password"
                                    secureTextEntry={isConfirmPasswordVisible ? false : true}
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword}
                                />
                                <TouchableOpacity
                                    onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}>
                                    <FontAwesome
                                        name={isConfirmPasswordVisible ? 'eye-slash' : 'eye'}
                                        size={20}
                                    />
                                </TouchableOpacity>
                            </View>


                            <Button
                                disabled={!email || !password || !confirmPassword || !name}
                                style={styles.registerButton}
                                onPress={registerHandler}
                            >
                                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 17 }}>
                                    SIGN UP
                                </Text>
                            </Button>

                            <Text style={{ textAlign: 'center', color: '#3C5898', }}>Or</Text>

                            <View>
                                <View style={{ flexDirection: 'row', marginVertical: 10 }}>

                                    <Text
                                        style={{
                                            color: '#3C5898',
                                        }}>
                                        Already have an account ? </Text>
                                    <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                                        <Text
                                            style={{
                                                marginLeft: 5,
                                                color: '#3C5898',
                                                fontWeight: 'bold',
                                            }}>
                                            Log in
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

            </View>

        </>
    );
}

const styles = StyleSheet.create({

    mainContainer: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    formContainer: {
        position: 'absolute',
        height: '100%',
        width: '100%',
    },

    formTopContainer: {
        flex: 1,
        textAlign: "center",
        justifyContent: 'center',
        alignItems: "center",
    },

    avatar: {
        backgroundColor: "#fff",
    },

    formBottomContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    formBottomSubContainer: {
        backgroundColor: '#fff',
        width: '95%',
        padding: 10,
        borderRadius: 15,
        elevation: 3,
        boxShadow: "5px 5px 10px #babecc, -5px -5px 10px #f2f3f5",
    },

    inputBoxContainer: {
        backgroundColor: '#DEE9F7',
        marginVertical: 10,
        borderRadius: 4,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1
    },

    inputBox: {
        marginHorizontal: 10,
        flex: 1,
    },

    registerButton: {
        backgroundColor: '#3C5898',
        color: "#fff",
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 10,
        elevation: 5,
    },

});


export default Register;