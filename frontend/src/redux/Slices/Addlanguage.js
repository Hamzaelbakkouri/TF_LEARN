import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
import Cookies from 'universal-cookie'

const cooki = new Cookies();
export const loginUser = () => async (dispatch, getState) => {
    dispatch(loginUserStart());

    const { email, password } = getState().user;
    const data = new FormData();
    data.append('nom', Fname);
    data.append('image', image);

    try {
        await axios.post('http://127.0.0.1:8000/api/login', data);

    } catch (error) {
        dispatch(addingFailure(error.message));
    }
};

const initialState = {
    language: '',
    image: '',
    isLoading: false,
    error: null,
};

const addLanguageSlice = createSlice({
    name: 'addLanguage',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;
        },
        setImage: (state, action) => {
            state.image = action.payload;
        },
        addingStart: (state) => {
            state.isLoading = true;
        },
        addingSuccess: (state) => {
            state.isLoading = false;
            state.error = null;
        },
        addingFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const {
    setLanguage,
    setImage,
    addingStart,
    addingSuccess,
    addingFailure,
} = addLanguageSlice.actions;

export default addLanguageSlice.reducer;
