import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  selectedCategoryData: [],
};

export const searchAsync = createAsyncThunk(
  'search/fetchCategory',
  async (id) => {
    const response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=0&category_ids=${id}`);
    console.log(response);
    return response.data;
  }
);

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(searchAsync.fulfilled, (state, action) => {
        state.selectedCategoryData = action.payload;
      });
  },
});

export default searchSlice.reducer;