import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  favorite: [],
  totalPrice: 0,
  appliedPromo: null,
  discountPercent: 0,
};

const calculateTotal = (state) => {
  const subtotal = state.cart.reduce(
    (acc, product) =>
      acc + Number(product.price || 0) * Number(product.quantity || 0),
    0
  );
  const discountAmount = subtotal * (state.discountPercent / 100);
  state.totalPrice = subtotal - discountAmount;
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
      calculateTotal(state);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product._id !== action.payload
      );
      calculateTotal(state);
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.cart.find(
        (product) => product._id === action.payload
      );
      if (existingProduct) {
        existingProduct.quantity++;
      }
      calculateTotal(state);
    },
    decreesQuantity: (state, action) => {
      const existingProduct = state.cart.find(
        (product) => product._id === action.payload
      );
      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      } else if (existingProduct && existingProduct.quantity === 1) {
        state.cart = state.cart.filter(
          (product) => product._id !== action.payload
        );
      }
      calculateTotal(state);
    },
    applyPromoCode: (state, action) => {
      const code = action.payload.toUpperCase();
      const promos = {
        NEST2025: 10,
        ELITE: 20,
        WELCOME: 15,
      };

      if (promos[code]) {
        state.appliedPromo = code;
        state.discountPercent = promos[code];
      } else {
        state.appliedPromo = null;
        state.discountPercent = 0;
      }
      calculateTotal(state);
    },
    removePromoCode: (state) => {
      state.appliedPromo = null;
      state.discountPercent = 0;
      calculateTotal(state);
    },
    addToFavorite: (state, action) => {
      if (!Array.isArray(state.favorite)) {
        state.favorite = [];
      }
      const existingProduct = state.favorite.find(
        (product) => product._id === action.payload._id
      );
      if (existingProduct) {
        state.favorite = state.favorite.filter(
          (product) => product._id !== action.payload._id
        );
      } else {
        state.favorite.push(action.payload);
      }
    },
    resetCart: (state) => {
      state.cart = [];
      state.totalPrice = 0;
      state.appliedPromo = null;
      state.discountPercent = 0;
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreesQuantity,
  addToFavorite,
  removeFromCart,
  resetCart,
  applyPromoCode,
  removePromoCode,
} = cartSlice.actions;

export default cartSlice.reducer;
