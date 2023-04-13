import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const editlanguage = createAsyncThunk(
    'edit_language/editlanguage',
    async (userData, id) => {
        const response = await axios.patch('http://127.0.0.1:8000/api/language/updatelanguage/' + id, userData);
        return 'done'
    }
);

export const EditlanguageSlice = createSlice({
    name: 'editlanguage',
    initialState: {
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(editlanguage.pending, (state) => {
                state.isFetching = true;
                state.isSuccess = false;
                state.isError = false;
                state.errorMessage = '';
            })
            .addCase(editlanguage.fulfilled, (state) => {
                state.isFetching = false;
                state.isSuccess = true;
                state.isError = false;
                state.errorMessage = '';
            })
            .addCase(editlanguage.rejected, (state, action) => {
                state.isFetching = false;
                state.isSuccess = false;
                state.isError = true;
                state.errorMessage = action.payload.message;
            });
    },
});
