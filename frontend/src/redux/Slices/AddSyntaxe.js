import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const addSyntaxe = createAsyncThunk(
  'syntaxe/addSyntaxe',
  async (syntaxeData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/api/syntaxe/addsyntaxe', syntaxeData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const syntaxesSlice = createSlice({
  name: 'addsyntaxes',
  initialState: {
    syntaxe: '',
    id_language: '',
    isLoading: false,
    Error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addSyntaxe.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addSyntaxe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.push(action.payload);
    });
    builder.addCase(addSyntaxe.rejected, (state, action) => {
      state.Error = true;
    });
  },
});

export default syntaxesSlice.reducer;
