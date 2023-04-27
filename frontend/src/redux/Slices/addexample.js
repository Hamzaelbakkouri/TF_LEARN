import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/addexample';

export const addExample = createAsyncThunk(
    'example_add/addexample',
    async (userData) => {
        const res = await axios.post(API_URL, userData);
        return res.data;
    }
);

const AddexampleSlice = createSlice({
    name: 'addExample',
    initialState: {
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addExample.pending, (state) => {
                state.isFetching = true;
                state.isSuccess = false;
                state.isError = false;
                state.errorMessage = '';
            })
            .addCase(addExample.fulfilled, (state) => {
                state.isFetching = false;
                state.isSuccess = true;
                state.isError = false;
                state.errorMessage = '';
            })
            .addCase(addExample.rejected, (state, action) => {
                state.isFetching = false;
                state.isSuccess = false;
                state.isError = true;
                state.errorMessage = action.payload.message;
            });
    },
});

export default AddexampleSlice.reducer;