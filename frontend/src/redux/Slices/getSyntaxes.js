import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useState } from "react";

// Action
export const fetchSyntaxes = createAsyncThunk('fetchSyntaxes', async () => {
    const [id, setID] = useState();
    setID(localStorage.getItem('id_language'));
    const response = await fetch("http://127.0.0.1:8000/api/syntaxe/getsyntaxe/" + id);
    return await response.json();
})

const SyntaxegetSlice = createSlice({
    name: "Syntaxes",
    initialState: {
        isLoading: false,
        data: [],
        Error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSyntaxes.pending, (state) => {
            state.isLoading = true;
            state.Error = null;
        })

        builder.addCase(fetchSyntaxes.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.Error = null;
        })

        builder.addCase(fetchSyntaxes.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isLoading = false;
            state.Error = action.error.message;
        })
    }
});

export default SyntaxegetSlice.reducer;