import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./slices/wishlist";
import cartReducer from "./slices/cart";

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    cart: cartReducer,
  },
});
