import { createReducer } from "@reduxjs/toolkit";


export const authReducer = createReducer(
    {},

    {
        loginRequest: (state) => {
            state.loading = true;
        },

        loginSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.message = action?.payload?.message;
        },

        loginFailure: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action?.payload?.message;
        },


        registerRequest: (state) => {
            state.loading = true;
        },

        registerSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.message = action?.payload?.message;
        },

        registerFailure: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action?.payload?.message;
        },



        loadUserRequest: (state) => {
            state.loading = true;
        },

        loadUserSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
        },

        loadUserFailure: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action?.payload?.message;
        },



        logoutRequest: (state) => {
            state.loading = true;
        },

        logoutSuccess: (state) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
        },

        logoutFailure: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.error = action?.payload?.message;
        },


        verificationRequest: (state) => {
            state.loading = true;
        },
        verificationSuccess: (state, action) => {
            state.loading = false;
            state.message = action?.payload?.message;
        },
        verificationFailure: (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message;
        },


        clearError: (state) => {
            state.error = null;
        },

        clearMessage: (state) => {
            state.message = null;
        },

    })


export const messageReducer = createReducer({}, {


    addTaskRequest: (state) => {
        state.loading = true;
    },

    addTaskSuccess: (state, action) => {
        state.loading = false;
        state.message = action?.payload?.message;
    },

    addTaskFailure: (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
    },




    updateTaskRequest: (state) => {
        state.loading = true;
    },

    updateTaskSuccess: (state, action) => {
        state.loading = false;
        state.message = action?.payload?.message;
    },

    updateTaskFailure: (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
    },




    deleteTaskRequest: (state) => {
        state.loading = true;
    },

    deleteTaskSuccess: (state, action) => {
        state.loading = false;
        state.message = action?.payload?.message;
    },

    deleteTaskFailure: (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
    },




    updateProfileRequest: (state) => {
        state.loading = true;
    },

    updateProfileSuccess: (state, action) => {
        state.loading = false;
        state.message = action?.payload?.message;
    },

    updateProfileFailure: (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
    },





    updatePasswordRequest: (state) => {
        state.loading = true;
    },

    updatePasswordSuccess: (state, action) => {
        state.loading = false;
        state.message = action?.payload?.message;
    },

    updatePasswordFailure: (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
    },




    forgetPasswordRequest: (state) => {
        state.loading = true;
    },
    forgetPasswordSuccess: (state, action) => {
        state.loading = false;
        state.message = action?.payload?.message;
    },
    forgetPasswordFailure: (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
    },




    resetPasswordRequest: (state) => {
        state.loading = true;
    },
    resetPasswordSuccess: (state, action) => {
        state.loading = false;
        state.message = action?.payload?.message;
    },
    resetPasswordFailure: (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
    },



    clearError: (state) => {
        state.error = null;
    },

    clearMessage: (state) => {
        state.message = null;
    },
})