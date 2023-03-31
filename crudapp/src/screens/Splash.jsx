import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';


const Splash = ({ navigation }) => {

    const { isAuthenticated } = useSelector(state => state.auth);

    useEffect(() => {
        setTimeout(() => {
            if (!isAuthenticated) {
                navigation.navigate("Login")
            } else {
                navigation.navigate("Footer")
            }
        }, 3500)
    })

    return (
        <>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />

            <View style={styles.mainContainer}>
                <Image style={styles.logo} source={require("../../assets/splash.png")} />

                <Text style={styles.heading}>
                    Add Your Task
                </Text>

                <Text style={styles.paragraph}>
                    Best To-Do List App to Enhance Your Productivity
                </Text>
            </View>
        </>
    )
};

const styles = StyleSheet.create({

    mainContainer: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    logo: {
        marginVertical: 20,
        height: 300,
        width: 300,
    },

    heading: {
        marginVertical: 20,
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: 5,
        fontFamily: 'Helvetica',
        textAlign: 'center'
    },

    paragraph: {
        marginVertical: 30,
        color: '#000',
        fontSize: 16,
        letterSpacing: 5,
        fontFamily: 'Helvetica',
        textAlign: 'center'
    },

});

export default Splash;