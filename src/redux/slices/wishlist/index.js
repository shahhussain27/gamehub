import { createSlice } from "@reduxjs/toolkit";

const loadWishlistFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("wishlist");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (error) {
    console.warn("Failed to load wishlist from localStorage:", error);
    return [];
  }
};

const saveWishlistToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("wishlist", serializedState);
  } catch (error) {
    console.warn("Failed to save wishlist to localStorage:", error);
  }
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: loadWishlistFromLocalStorage(),
  reducers: {
    addToWishlist: (state, action) => {
      state.push(action.payload);
      saveWishlistToLocalStorage(state);
    },
    removeToWishlist: (state, action) => {
      const updatedState =  state.filter((item) => item.id !== action.payload);
      saveWishlistToLocalStorage(updatedState);
      return updatedState;
    },
  },
});

export const { addToWishlist, removeToWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
