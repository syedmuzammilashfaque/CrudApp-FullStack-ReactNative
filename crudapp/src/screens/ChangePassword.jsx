import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { useDispatch } from 'react-redux';
import { updatePassword } from "../../redux/action";

const ChangePassword = ({ navigation }) => {

    const [isOldPasswordVisible, setIsOldPasswordVisible] = useState(false);
    const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const dispatch = useDispatch();

    const changePasswordHandler = () => {
        dispatch(updatePassword(oldPassword, newPassword))
    };


    return (
        <>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />

            <View style={styles.mainContainer}>
                <View style={styles.formContainer}>

                    <View style={styles.inputBoxContainer}>
                        <FontAwesome name="lock" size={20} />
                        <TextInput
                            style={styles.inputBox}
                            placeholder="Enter Old Password"
                            secureTextEntry={isOldPasswordVisible ? false : true}
                            value={oldPassword}
                            onChangeText={setOldPassword}
                        />
                        <TouchableOpacity
                            onPress={() => setIsOldPasswordVisible(!isOldPasswordVisible)}>
                            <FontAwesome
                                name={isOldPasswordVisible ? 'eye-slash' : 'eye'}
                                size={20}
                            />
                        </TouchableOpacity>
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
                        disabled={!oldPassword || !newPassword}
                        style={styles.changePassBtn}
                        onPress={changePasswordHandler}
                    >
                        <Text style={{ color: "#fff" }}>Change Password</Text>
                    </Button>

                </View>
            </View>
        </>
    )
}
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

    changePassBtn: {
        width: "90%",
        backgroundColor: '#3C5898',
        color: "#fff",
        alignItems: 'center',
        marginVertical: 20,
        paddingVertical: 7,
        borderRadius: 4,
        elevation: 5,
    },


});

export default ChangePassword;
