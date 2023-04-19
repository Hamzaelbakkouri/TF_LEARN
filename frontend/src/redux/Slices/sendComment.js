import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/send/comment';

export const addcomment = createAsyncThunk(
    'Comment_add/addcomment',
    async (userData) => {
        const response = await axios.post(API_URL, userData);
        return response.data;
    }
);


export const AddCommentSlice = createSlice({
    name: 'addComment',
    initialState: {
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addcomment.pending, (state) => {
                state.isFetching = true;
                state.isSuccess = false;
                state.isError = false;
                state.errorMessage = '';
            })
            .addCase(addcomment.fulfilled, (state) => {
                state.isFetching = false;
                state.isSuccess = true;
                state.isError = false;
                state.errorMessage = '';
            })
            .addCase(addcomment.rejected, (state, action) => {
                state.isFetching = false;
                state.isSuccess = false;
                state.isError = true;
                state.errorMessage = action.payload.message;
            });
    },
});
