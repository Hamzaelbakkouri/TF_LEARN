import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchSyntaxe_byid = createAsyncThunk('fetchSyntaxe_byid', async () => {
    const id = localStorage.getItem('syntaxes_is');
    const resp = await fetch("http://127.0.0.1:8000/api/getcomment/" + id);
    return await resp.json();
})

const SyntaxegetSlice = createSlice({
    name: "comments",
    initialState: {
        isLoading: false,
        data: [],
        Error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSyntaxe_byid.pending, (state) => {
            state.isLoading = true;
            state.Error = null;
        })

        builder.addCase(fetchSyntaxe_byid.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.Error = null;
        })

        builder.addCase(fetchSyntaxe_byid.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isLoading = false;
            state.Error = action.error.message;
        })
    }
});

export default SyntaxegetSlice.reducer;