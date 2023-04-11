import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const addItem = (item) => async (dispatch) => {
    dispatch(addItemStart());

    try {
        // Make an API call to insert the item
        const response = await fetch('/api/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        });

        // Handle the response
        const data = await response.json();
        if (response.ok) {
            dispatch(addItemSuccess(data));
        } else {
            dispatch(addItemFailure(data.message));
        }
    } catch (error) {
        dispatch(addItemFailure(error.message));
    }
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addItemStart: (state) => {
            state.isLoading = true;
        },
        addItemSuccess: (state, action) => {
            state.isLoading = false;
            state.items.push(action.payload);
            state.error = null;
        },
        addItemFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

const initialState = {
    items: [],
    isLoading: false,
    error: null,
};

export const { addItemStart, addItemSuccess, addItemFailure } = dataSlice.actions;

export default dataSlice.reducer;