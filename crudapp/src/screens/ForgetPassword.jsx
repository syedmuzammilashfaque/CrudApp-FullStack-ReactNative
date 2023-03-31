import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, Text, TextInput } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword } from '../../redux/action';

const ForgetPassword = ({ navigation }) => {

    const [email, setEmail] = useState("");

    const { loading } = useSelector(state => state.message);

    const dispatch = useDispatch();

    const forgetHandler = async () => {
        await dispatch(forgetPassword(email))
        navigation.navigate("ResetPassword")
    };

    return (
        <>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />

            <View style={styles.mainContainer}>
                <View style={styles.formContainer}>

                    <View style={styles.inputBoxContainer}>
                        <Ionicon name="mail" size={20} />
                        <TextInput style={styles.inputBox} placeholder="Enter Your Email"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    <Button
                        style={styles.btn}
                        onPress={forgetHandler}
                        disabled={loading}
                        loading={loading}
                    >
                        <Text style={{ color: "#fff" }}>Send Email</Text>
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


});

export default ForgetPassword;
