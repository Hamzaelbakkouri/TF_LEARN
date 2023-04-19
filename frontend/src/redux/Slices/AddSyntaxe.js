import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/syntaxe/addsyntaxe';

export const addSyntaxe =  createAsyncThunk(
  'syntaxe_add/addsyntaxe',
  async (userData) => {
    const S_res = await axios.post(API_URL, userData);
    return S_res.data;
  }
);

const AddsyntaxeSlice = createSlice({
  name: 'addsyntaxe',
  initialState: {
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addSyntaxe.pending, (state) => {
        state.isFetching = true;
        state.isSuccess = false;
        state.isError = false;
        state.errorMessage = '';
      })
      .addCase(addSyntaxe.fulfilled, (state) => {
        state.isFetching = false;
        state.isSuccess = true;
        state.isError = false;
        state.errorMessage = '';
      })
      .addCase(addSyntaxe.rejected, (state, action) => {
        state.isFetching = false;
        state.isSuccess = false;
        state.isError = true;
        state.errorMessage = action.payload.message;
      });
  },
});
 
export default AddsyntaxeSlice.reducer;