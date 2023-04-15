import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchSyntaxes = createAsyncThunk('fetchSyntaxes', async () => {
    const response = await fetch("http://127.0.0.1:8000/api/admin/getsyntaxes");
    return await response.json();
})

const SyntaxegetSlice = createSlice({
    name: "Syntaxes",
    initialState: {
        isLoading: false,
        data: [],
        Error : false
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
            console.log("Error" , action.payload);
            state.isLoading = false;
            state.Error = action.error.message;
        })
    }
});

export default SyntaxegetSlice.reducer;