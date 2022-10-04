import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  categories: []
};

export const categoriesAsync = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await axios.get("https://api.thecatapi.com/v1/categories");
    console.log(response);
    return response.data;
  }
);

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    selectCategory: (state, action) => {
        state.isActive = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(categoriesAsync.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  },
});

export const { selectCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;