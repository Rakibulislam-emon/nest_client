// Import the state type if you're using TypeScript (optional)
export const selectCartItems = (state) => state.cart.cart;
export const selectFavorite = (state) => state.cart.favorite;

export const selectCartTotalQuantity = (state) => state.cart.totalQuantity;

export const selectCartTotalPrice = (state) => state.cart.totalPrice;

export const selectCartItemById = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id);
