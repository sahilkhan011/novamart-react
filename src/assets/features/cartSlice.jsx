import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }

      state.cartTotal += newItem.price * newItem.quantity;
    },
    removeFromCart(state, action) {
      const itemId = action.payload;
      const itemToRemove = state.cartItems.find((item) => item.id === itemId);

      if (itemToRemove) {
        state.cartTotal -= itemToRemove.price * itemToRemove.quantity;
        state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      }
    },
    clearCart(state) {
      state.cartItems = [];
      state.cartTotal = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
