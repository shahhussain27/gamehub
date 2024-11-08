import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (error) {
    console.warn("Failed to load cart from localStorage:", error);
    return [];
  }
};

const saveCartToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (error) {
    console.warn("Failed to save cart to localStorage:", error);
  }
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartFromLocalStorage(),
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
      saveCartToLocalStorage(state);
    },
    removeToCart: (state, action) => {
      const updatedState =  state.filter((item) => item.id !== action.payload);
      saveCartToLocalStorage(updatedState);
      return updatedState;
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
