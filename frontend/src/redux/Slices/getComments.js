import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchComments = createAsyncThunk('fetchComments', async () => {
    const id = localStorage.getItem('id_language');
    const resp = await fetch("http://127.0.0.1:8000/api/getcomment/" + id);
    return await resp.json();
})

const CommentgetSlice = createSlice({
    name: "comments",
    initialState: {
        isLoading: false,
        data: [],
        Error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchComments.pending, (state) => {
            state.isLoading = true;
            state.Error = null;
        })

        builder.addCase(fetchComments.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.Error = null;
        })

        builder.addCase(fetchComments.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isLoading = false;
            state.Error = action.error.message;
        })
    }
});

export default CommentgetSlice.reducer;