import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../redux/action';

const ResetPassword = ({ navigation }) => {

    const { message, error } = useSelector(state => state.message)
    const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);

    const [otp, setOtp] = useState();
    const [newPassword, setNewPassword] = useState();
    const dispatch = useDispatch()

    const changePasswordHandler = async () => {
        await dispatch(resetPassword(otp, newPassword));
        navigation.navigate("Login");
    }

    useEffect(() => {
        if (message) {
            alert(message);
            dispatch({ type: "clearMessage" })
        }
        if (error) {
            alert(error);
            dispatch({ type: "clearError" })
        }
    }, [alert, message, dispatch, error])


    return (

        <View style={styles.mainContainer}>

            <View style={styles.formContainer}>

                <View style={styles.inputBoxContainer}>
                    <Ionicon name="send" size={20} />
                    <TextInput style={styles.inputBox} placeholder="Enter Your OTP"
                        value={otp}
                        onChangeText={setOtp}
                        keyboardType="number-pad"
                    />
                </View>


                <View style={styles.inputBoxContainer}>
                    <FontAwesome name="lock" size={20} />
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Enter New Password"
                        secureTextEntry={isNewPasswordVisible ? false : true}
                        value={newPassword}
                        onChangeText={setNewPassword}
                    />
                    <TouchableOpacity
                        onPress={() => setIsNewPasswordVisible(!isNewPasswordVisible)}>
                        <FontAwesome
                            name={isNewPasswordVisible ? 'eye-slash' : 'eye'}
                            size={20}
                        />
                    </TouchableOpacity>
                </View>

                <Button
                    disabled={!otp || !newPassword}
                    style={styles.btn}
                    onPress={changePasswordHandler}
                    color="#fff"
                >
                    Reset Password
                </Button>

            </View>

        </View>
    )
}

export default ResetPassword;

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: "center",
    },

    formContainer: {
        width: "90%",
        textAlign: "center",
        justifyContent: 'center',
        alignItems: "center",
    },


    inputBoxContainer: {
        backgroundColor: '#DEE9F7',
        marginVertical: 15,
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

    btn: {
        width: "90%",
        backgroundColor: '#3C5898',
        color: "#fff",
        alignItems: 'center',
        marginVertical: 20,
        paddingVertical: 7,
        borderRadius: 4,
        elevation: 5,
    },

})