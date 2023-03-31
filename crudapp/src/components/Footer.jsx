import React from 'react';
import IconicIcons from "react-native-vector-icons/Ionicons";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from "../screens/Home";
import Profile from "../screens/Profile";

const Tab = createMaterialBottomTabNavigator();

const Footer = () => {

    return (

        <Tab.Navigator activeColor='#3C5898' barStyle={{ backgroundColor: "#fff" }} shifting={true}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: () => <IconContainer name="home" />
                }}
            />

            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon: () => <IconContainer name="person" />
                }} />
        </Tab.Navigator>
    )
}


const IconContainer = props => {
    return <IconicIcons name={props.name} size={20} color={"#3C5898"} />
};


export default Footer;


