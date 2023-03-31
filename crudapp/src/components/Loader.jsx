import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';


const Loader = () => {
    return (
        <View style={styles.mainContainer}>
            <ActivityIndicator animating={true} size={100} color="grey" />
        </View>
    )
}


const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },


})

export default Loader;