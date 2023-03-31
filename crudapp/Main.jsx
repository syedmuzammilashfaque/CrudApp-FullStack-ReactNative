import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from "./src/screens/Splash";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import Camera from "./src/screens/Camera";
import Footer from './src/components/Footer';
import ChangePassword from "./src/screens/ChangePassword";
import ForgetPassword from "./src/screens/ForgetPassword";
import ResetPassword from "./src/screens/ResetPassword";
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './redux/action';
import Verify from './src/screens/Verify';
import Loader from "./src/components/Loader";

const Stack = createNativeStackNavigator();

const Main = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUser());
    }, [dispatch])

    const { isAuthenticated, loading } = useSelector(state => state.auth);


    return (
        loading ? <Loader /> :
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Splash">
                    <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                    <Stack.Screen name="Footer" component={Footer} options={{ headerShown: false }} />
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                    <Stack.Screen name="Verify" component={Verify} options={{ headerShown: true }} />
                    <Stack.Screen name="Camera" component={Camera} options={{ headerShown: false }} />
                    <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ headerShown: true }} />
                    <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ headerShown: true }} />
                    <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: true }} />
                </Stack.Navigator>
            </NavigationContainer>
    )
};

export default Main;