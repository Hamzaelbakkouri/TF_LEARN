import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchExample = createAsyncThunk('fetchExample', async () => {
    const id = localStorage.getItem('id_language');
    const resp = await fetch("http://127.0.0.1:8000/syntaxe/getexample/" + id);
    return await resp.json();
})

const ExamplegetSlice = createSlice({
    name: "examples",
    initialState: {
        isLoading: false,
        data: [],
        Error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchExample.pending, (state) => {
            state.isLoading = true;
            state.Error = null;
        })

        builder.addCase(fetchExample.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.Error = null;
        })

        builder.addCase(fetchExample.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isLoading = false;
            state.Error = action.error.message;
        })
    }
});

export default ExamplegetSlice.reducer;