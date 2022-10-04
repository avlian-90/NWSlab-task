import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../features/categoriesSlice';
import searchReducer from '../features/searchSlice';
import mainReducer from '../features/mainSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    search: searchReducer,
    main: mainReducer,
  },
});
