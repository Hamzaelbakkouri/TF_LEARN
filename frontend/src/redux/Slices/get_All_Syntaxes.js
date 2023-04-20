import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchallSyntaxes = createAsyncThunk('fetchSyntaxes', async () => {
    const response = await fetch("http://127.0.0.1:8000/api/admin/getsyntaxes");
    return await response.json();
})

const SyntaxegetallSlice = createSlice({
    name: "allSyntaxes",
    initialState: {
        isLoading: false,
        data: [],
        Error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchallSyntaxes.pending, (state) => {
            state.isLoading = true;
            state.Error = null;
        })

        builder.addCase(fetchallSyntaxes.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.Error = null;
        })

        builder.addCase(fetchallSyntaxes.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isLoading = false;
            state.Error = action.error.message;
        })
    }
});

export default SyntaxegetallSlice.reducer;