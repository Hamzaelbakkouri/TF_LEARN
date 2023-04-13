import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


async function deleteData(id) {
  const response = await axios.delete(''+id);
  return response.data.id;
}

const initialState = {
  data: []
};

const deleteSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    deleteItem: async (state, action) => {
      const id = await deleteData(action.payload);
      const index = state.data.findIndex(item => item.id === id);
      state.data.splice(index, 1);
    }
  }
});

export const { deleteItem } = deleteSlice.actions;
export default deleteSlice.reducer;