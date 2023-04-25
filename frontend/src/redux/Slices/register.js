import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/register';

export const registerUser = createAsyncThunk(
  'userRegistration/registerUser',
  async (userData) => {
    const response = await axios.post(API_URL, userData);
    return response.data;
  }
);

const userRegisterSlice = createSlice({
  name: 'userRegistration',
  initialState: {
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isFetching = true;
        state.isSuccess = false;
        state.isError = false;
        state.errorMessage = '';
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isFetching = false;
        state.isSuccess = true;
        state.isError = false;
        state.errorMessage = '';
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isFetching = false;
        state.isSuccess = false;
        state.isError = true;
        state.errorMessage = action.payload.message;
      });
  },
});

export default userRegisterSlice.reducer;

