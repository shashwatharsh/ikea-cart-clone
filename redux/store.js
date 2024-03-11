import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";

//create a store and give it reducers/ slices
export const store = configureStore({
  // slices here
  reducer: {
    cart: cartSlice,
  },
});
