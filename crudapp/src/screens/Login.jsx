import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    StatusBar,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/action";


const Login = ({ navigation }) => {

    const { error } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const loginHandler = () => {
        dispatch(login(email, password))
    };


    useEffect(() => {

        if (error) {
            alert(error)
            dispatch({ type: "clearError" })
        }
    }, [error, dispatch, alert])



    return (
        <>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />

            <View style={styles.mainContainer}>

                <View style={styles.formContainer}>

                    <View style={styles.formTopContainer}>
                        <Image style={{ width: 200, height: 200, }} source={require("../../assets/signin.png")} />
                        <Text style={{ fontSize: 25, fontWeight: "bold", color: "#3C5898", }}>Log In</Text>
                    </View>

                    <View style={styles.formBottomContainer}>
                        <View style={styles.formBottomSubContainer}>

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

                            <Button
                                disabled={!email || !password}
                                style={styles.loginButton}
                                onPress={loginHandler}
                            >
                                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 17 }}>
                                    Login
                                </Text>
                            </Button>

                            <Text style={{ textAlign: 'center', color: '#3C5898', }}>Or</Text>

                            <View>
                                <View style={{ flexDirection: 'row', marginVertical: 10 }}>

                                    <Text
                                        style={{
                                            color: '#3C5898',
                                        }}>
                                        Don't have an account ? </Text>
                                    <TouchableOpacity onPress={() => { navigation.navigate('Register') }}>
                                        <Text
                                            style={{
                                                marginLeft: 5,
                                                color: '#3C5898',
                                                fontWeight: 'bold',
                                            }}>
                                            Signup
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword")}>
                                    <Text
                                        style={{
                                            marginLeft: 5,
                                            color: '#3C5898',
                                            fontWeight: 'bold',
                                        }}>
                                        Forget Your Password ?
                                    </Text>
                                </TouchableOpacity>
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
        justifyContent: 'center',
        alignItems: "center",
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
        boxShadow: "5px 5px 10px #babecc, -5px -5px 10px #f2f3f5",
        elevation: 5,
    },


    inputBoxContainer: {
        backgroundColor: '#DEE9F7',
        marginVertical: 10,
        borderRadius: 4,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        elevation: 3,
        boxShadow: "5px 5px 10px #babecc, -5px -5px 10px #f2f3f5",
    },

    inputBox: {
        marginHorizontal: 10,
        flex: 1,
    },

    loginButton: {
        backgroundColor: '#3C5898',
        color: "#fff",
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 10,
        elevation: 5,
    },

});


export default Login;