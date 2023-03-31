import React, { useState, useEffect } from 'react';
import { StatusBar, SafeAreaView, Platform, ScrollView, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import Task from "../components/Task";
import Icon from "react-native-vector-icons/Entypo";
import { Dialog, Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { addTask, loadUser } from "../../redux/action";

const Home = () => {


    const { user } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const { message, error } = useSelector(state => state.message);

    const [openDialog, setOpenDialog] = useState(false);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    const hideDialog = () => {
        setOpenDialog(!openDialog)
    }


    const addTaskHandler = async () => {

        await dispatch(addTask(title, description))
        dispatch(loadUser());
        hideDialog();
    }


    useEffect(() => {
        if (error) {
            alert(error);
            dispatch({ type: "clearError" });
            dispatch({ type: "clearError" });
        }
        if (message) {
            alert(message)
            dispatch({ type: "clearMessage" });
        }
    }, [alert, error, message, dispatch])


    return (

        <>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />

            <View style={styles.mainContainer}>
                <ScrollView>
                    <SafeAreaView>

                        <Text style={styles.mainHeading}>All Tasks</Text>

                        {user && user.tasks.map((item) => (
                            <Task key={item._id}
                                title={item.title} description={item.description} status={item.completed}
                                taskId={item._id}
                            />
                        ))}

                        <TouchableOpacity style={styles.addBtn}
                            onPress={hideDialog}
                        >
                            <Icon name="add-to-list" size={20} color="#000" />
                        </TouchableOpacity>

                    </SafeAreaView>
                </ScrollView>
            </View>

            <Dialog style={styles.mainDialog} visible={openDialog} onDismiss={hideDialog}>
                <Dialog.Title style={{ color: "#3C5898", textAlign: "center", }}>
                    ADD A TASK
                </Dialog.Title>

                <Dialog.Content>
                    <Text style={styles.inputTxt}>Title</Text>
                    <TextInput style={styles.dialogInput}
                        value={title}
                        onChangeText={setTitle}
                        placeholder="Add Title"
                    />
                    <Text style={styles.inputTxt}>Description</Text>

                    <TextInput style={styles.dialogInput}
                        value={description}
                        onChangeText={setDescription}
                        placeholder="Add Description"
                    />

                    <View style={styles.dialogBoxView}>

                        <TouchableOpacity
                            onPress={hideDialog}
                        >
                            <Text>CANCEL</Text>
                        </TouchableOpacity>

                        <Button style={styles.addTaskBtn} color="#fff"
                            onPress={addTaskHandler}
                            disabled={!title || !description}
                        >
                            ADD
                        </Button>

                    </View>

                </Dialog.Content>

            </Dialog>

        </>
    )
}

const styles = StyleSheet.create({

    mainContainer: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },

    mainHeading: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: "center",
        paddingLeft: 10,
        paddingVertical: 5,
        color: "#3C5898",
    },

    addBtn: {
        textAlign: "center",
        backgroundColor: "#fff",
        width: 150,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        alignSelf: "center",
        marginVertical: 20,
        elevation: 5,
    },



    mainDialog: {
        backgroundColor: '#fff',
        borderRadius: 15,
        boxShadow: "5px 5px 10px #babecc, -5px -5px 10px #f2f3f5",
        elevation: 5,
    },


    dialogBoxView: {
        flexDirection: "row",
        alignItems: "center",
    },

    dialogInput: {
        padding: 10,
        paddingLeft: 15,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#babecc',
        marginVertical: 15,
        fontSize: 15,
    },

    inputTxt: {
        fontWeight: 'bold',
        color: "#3C5898",
    },


    addTaskBtn: {
        backgroundColor: '#3C5898',
        color: "#fff",
        marginLeft: 10,
    },


});


export default Home;