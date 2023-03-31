import axios from 'axios';
const serverUrl = `https://native-app-server.herokuapp.com/api`;


export const register = (formData) => async (dispatch) => {
    try {
        dispatch({ type: "registerRequest" });

        const { data } = await axios.post(
            `${serverUrl}/register`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        dispatch({ type: "registerSuccess", payload: data });
    } catch (error) {
        dispatch({ type: "registerFailure", payload: error.response.data });
    }
};



export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: "loginRequest" });

        const { data } = await axios.post(
            `${serverUrl}/login`,
            { email, password },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        dispatch({ type: "loginSuccess", payload: data });
    } catch (error) {
        dispatch({ type: "loginFailure", payload: error.response.data });
    }
};




export const verify = (otp) => async (dispatch) => {
    try {
        dispatch({ type: "verificationRequest" });

        const { data } = await axios.post(
            `${serverUrl}/verify`,
            { otp },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            });
        dispatch({ type: "verificationRequestSuccess", payload: data });
    } catch (error) {
        dispatch({ type: "verificationRequestFailure", payload: error.response.data });
    }
};




export const logout = () => async (dispatch) => {
    try {
        dispatch({ type: "logoutRequest" });
        await axios.get(`${serverUrl}/logout`);
        dispatch({ type: "logoutSuccess" });
    } catch (error) {
        dispatch({ type: "logoutFailure", payload: error.response.data });
    }
};




export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: "loadUserRequest" });

        const { data } = await axios.get(`${serverUrl}/me`);
        dispatch({ type: "loadUserSuccess", payload: data });
    } catch (error) {
        dispatch({ type: "loadUserFailure", payload: error.response.data });
    }
};



export const addTask = (title, description) => async (dispatch) => {
    try {
        dispatch({ type: "addTaskRequest" });

        const { data } = await axios.post(
            `${serverUrl}/newtask`,
            {
                title,
                description
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        dispatch({ type: "addTaskSuccess", payload: data });
    } catch (error) {
        dispatch({ type: "addTaskFailure", payload: error.response.data });
    }
};



export const updateTask = (taskId) => async (dispatch) => {
    try {
        dispatch({ type: "updateTaskRequest" });

        const { data } = await axios.get(
            `${serverUrl}/task/${taskId}`);
        dispatch({ type: "updateTaskSuccess", payload: data });
    } catch (error) {
        dispatch({ type: "updateTaskFailure", payload: error.response.data });
    }
};


export const deleteTask = (taskId) => async (dispatch) => {
    try {
        dispatch({ type: "deleteTaskRequest" });

        const { data } = await axios.delete(
            `${serverUrl}/task/${taskId}`);
        dispatch({ type: "deleteTaskSuccess", payload: data });
    } catch (error) {
        dispatch({ type: "deleteTaskFailure", payload: error.response.data });
    }
};



export const updateProfile = (formData) => async (dispatch) => {
    try {
        dispatch({ type: "updateProfileRequest" });

        const { data } = await axios.put(
            `${serverUrl}/updateprofile`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        dispatch({ type: "updateProfileSuccess", payload: data });
    } catch (error) {
        dispatch({ type: "updateProfileFailure", payload: error.response.data });
    }
};


export const updatePassword = (oldPassword, newPassword) => async (dispatch) => {
    try {
        dispatch({ type: "updatePasswordRequest" });

        const { data } = await axios.put(
            `${serverUrl}/updatepassword`,
            { oldPassword, newPassword },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            });
        dispatch({ type: "updatePasswordSuccess", payload: data });
    } catch (error) {
        dispatch({ type: "updatePasswordFailure", payload: error.response.data });
    }
};




export const forgetPassword = (email) => async (dispatch) => {
    try {
        dispatch({ type: "forgetPasswordRequest" });

        const { data } = await axios.post(
            `${serverUrl}/forgetpassword`,
            { email },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            });
        dispatch({ type: "forgetPasswordSuccess", payload: data });
    } catch (error) {
        dispatch({ type: "forgetPasswordFailure", payload: error.response.data });
    }
};


export const resetPassword = (otp, newPassword) => async (dispatch) => {
    try {
        dispatch({ type: "resetPasswordRequest" });

        const { data } = await axios.put(
            `${serverUrl}/resetpassword`,
            { otp, newPassword },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            });
        dispatch({ type: "resetPasswordSuccess", payload: data });
    } catch (error) {
        dispatch({ type: "resetPasswordFailure", payload: error.response.data });
    }
};


