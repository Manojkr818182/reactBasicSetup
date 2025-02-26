import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userDetail: JSON.parse(localStorage?.getItem('user') || 'null'),
    accessToken: localStorage?.getItem('accessToken') || null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginRequest: (state) => {
            state.isLoading = true;
            state.userDetail = null;
            state.accessToken = null;
            state.error = null;
        },
        loginSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.userDetail = payload.userData;
            state.accessToken = payload.accessToken;
            state.error = null;
        },
        logoutRequest: (state) => {
            state.userDetail = null;
            state.accessToken = null;
        },
    },
});

export const {
    loginRequest,
    loginSuccess,
    loginFailure,
    logoutRequest,
    logoutSuccess,
    logoutFailure,
} = authSlice.actions;
export default authSlice.reducer;

export function userLogin(userCred) {
    return async (dispatch) => {
        dispatch(loginRequest());
        try {
            setTimeout(() => {
                dispatch(loginSuccess({ userData: userCred, accessToken: "MNJ" }));
                localStorage.setItem('user', JSON.stringify(userCred));
                localStorage.setItem('accessToken', "MNJ");
            }, 1500);
        } catch (err) {

        }
    }
};
export function userLogout() {
    return async (dispatch) => {
        dispatch(logoutRequest());
        try {
            localStorage.removeItem('user');
            localStorage.removeItem('accessToken');
        } catch (err) {

        }
    }
};
