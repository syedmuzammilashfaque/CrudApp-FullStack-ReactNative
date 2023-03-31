import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import { Checkbox } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { updateTask, deleteTask, loadUser } from '../../redux/action';

const Task = ({ title, description, status, taskId }) => {

    const dispatch = useDispatch();

    const [completed, setCompleted] = useState(status);

    const handleCheckbox = () => {
        setCompleted(!completed)
        dispatch(updateTask(taskId))
    };


    const deleteHandler = async () => {
        await dispatch(deleteTask(taskId));
        dispatch(loadUser());
    };



    return (
        <View style={styles.mainContainer}>

            <View style={styles.taskContainer}>
                <Text style={styles.titleText}>
                    {title}
                </Text>

                <Text style={styles.descriptionText}>
                    {description}
                </Text>
            </View>

            <Checkbox status={completed ? "checked" : "unchecked"} color="#3C5898"
                onPress={handleCheckbox} />

            <Icon style={styles.iconSet} name="delete" color="#3C5898" size={20}
                onPress={deleteHandler}
            />

        </View>
    )
};


const styles = StyleSheet.create({

    mainContainer: {
        marginHorizontal: 10,
        borderRadius: 4,
        marginVertical: 10,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: '#fff',
        elevation: 3,
        boxShadow: "5px 5px 10px #babecc, -5px -5px 10px #f2f3f5",
    },

    taskContainer: {
        width: "80%",
    },

    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 7,
        color: "#3C5898",
    },

    descriptionText: {
        fontSize: 15,
        marginVertical: 7,
        color: "#3C5898",
    },

    iconSet: {
        marginLeft: 7,
        elevation: 3,
        backgroundColor: "#fff",
        padding: 8,
        borderRadius: 100,
    },


});


export default Task;