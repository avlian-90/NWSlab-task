import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cats: [],
  page: 0,
};

export const catsAsync = createAsyncThunk(
  'main/fetchCats',
  async (page) => {
    const response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}`);
    return response.data;
  }
);

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    loadMore: (state) => {
      state.page += 1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(catsAsync.fulfilled, (state, action) => {
        state.cats = [...state.cats, ...action.payload];
      });
  },
});

export const { loadMore } = mainSlice.actions;

export default mainSlice.reducer;