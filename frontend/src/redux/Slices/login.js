import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
import Cookies from 'universal-cookie'

const cooki = new Cookies();
const cook = cooki.get('login');
export const loginUser = () => async (dispatch, getState) => {
    dispatch(loginUserStart());

    const { email, password } = getState().user;
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);

    try {
        const { status, data: res } = await axios.post('http://127.0.0.1:8000/api/login', data);
        cooki.set('login', res);

        if (status === 200) {
            cook.role === 0 ? dispatch(loginUserSuccess()) : dispatch(loginAdminSuccess())
        } else {
            dispatch(loginUserFailure(res.message));
        }
    } catch (error) {
        dispatch(loginUserFailure(error.message));
    }
};

const initialState = {
    email: '',
    password: '',
    isLoggedIn: false,
    isLoading: false,
    isAdmin: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        loginUserStart: (state) => {
            state.isLoading = true;
        },
        loginUserSuccess: (state) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.isAdmin = false;
            state.error = null;
        },
        loginUserFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        logoutUser: (state) => {
            state.isLoggedIn = false;
            cooki.remove('login');
        },
    },
});

export const {
    setUsername,
    setEmail,
    setPassword,
    loginUserStart,
    loginUserSuccess,
    loginUserFailure,
    loginAdminSuccess,
    logoutUser,
} = userSlice.actions;

export default userSlice.reducer;
