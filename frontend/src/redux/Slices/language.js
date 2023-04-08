import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchLanguage = createAsyncThunk('fetchLanguage', async () => {
    const response = await fetch("http://127.0.0.1:8000/api/admin/getLanguage");
    return await response.json();
})

const langueSlice = createSlice({
    name: "languages",
    initialState: {
        isLoading: false,
        data: [],
        Error : false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchLanguage.pending, (state) => {
            state.isLoading = true;
            state.Error = null;
        })
        
        builder.addCase(fetchLanguage.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.Error = null;
        })

        builder.addCase(fetchLanguage.rejected, (state, action) => {
            console.log("Error" , action.payload);
            state.isLoading = false;
            state.Error = action.error.message;
        })
    }
});

export default langueSlice.reducer;