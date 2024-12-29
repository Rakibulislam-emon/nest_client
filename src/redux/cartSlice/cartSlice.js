import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  favorite: [],
  totalPrice: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cart.find(
        (product) => product._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 0) + 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    // remove from cart
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product._id !== action.payload
      );
    },

    increaseQuantity: (state, action) => {
      const existingProduct = state.cart.find(
        (product) => product._id === action.payload
      );
      if (existingProduct) {
        existingProduct.quantity++;
      }
    },
    decreesQuantity: (state, action) => {
      const existingProduct = state.cart.find(
        (product) => product._id === action.payload
      );
      if (existingProduct && existingProduct.quantity) {
        existingProduct.quantity -= 1;
      }
    },
    addToFavorite: (state, action) => {
      // Ensure state.favorite is an array
      if (!Array.isArray(state.favorite)) {
        console.error("state.favorite is not an array! Resetting to []");
        state.favorite = []; // Reset to empty array if not an array
      }

      const existingProduct = state.favorite.find(
        (product) => product._id === action.payload._id
      );

      // If the product is already in favorites, remove it
      if (existingProduct) {
        state.favorite = state.favorite.filter(
          (product) => product._id !== action.payload._id
        );
      } else {
        // Otherwise, add the product to favorites
        state.favorite.push(action.payload);
      }
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreesQuantity,
  addToFavorite,
  removeFromFavorite,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
