// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from "../Slice/productSlice.js"

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});
