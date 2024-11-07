import { configureStore } from "@reduxjs/toolkit";
import  wishlistReducer  from "./slices/wishlist";
export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
});
