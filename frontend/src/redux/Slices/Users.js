import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchUsers = createAsyncThunk('fetchLanguage', async () => {
    const response = await fetch("http://127.0.0.1:8000/api/admin/getUsers");
    return await response.json();
})

const usersSlice = createSlice({
    name: "users",
    initialState: {
        isLoading: false,
        data: [],
        Error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
            state.Error = null;
        })

        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.Error = null;
        })

        builder.addCase(fetchUsers.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isLoading = false;
            state.Error = action.error.message;
        })
    }
});

export default usersSlice.reducer;