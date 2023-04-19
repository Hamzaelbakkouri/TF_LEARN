import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchALLSyntaxes = createAsyncThunk('fetchALLSyntaxes', async () => {
    const response = await fetch("http://127.0.0.1:8000/api/admin/getsyntaxes");
    return await response.json();
})

const SyntaxegetALLSlice = () => createSlice({
    name: "Syntaxes",
    initialState: {
        isLoading: false,
        data: [],
        Error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchALLSyntaxes.pending, (state) => {
            state.isLoading = true;
            state.Error = null;
        })

        builder.addCase(fetchALLSyntaxes.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.Error = null;
        })

        builder.addCase(fetchALLSyntaxes.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isLoading = false;
            state.Error = action.error.message;
        })
    }
});

export default SyntaxegetALLSlice.reducer;
