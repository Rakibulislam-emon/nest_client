// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     items: [],
//     totalQuantity: 0,
//     totalPrice: 0,
// };

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addItem(state, action) {
//             const newItem = action.payload;
//             const existingItem = state.items.find(item => item.id === newItem.id);
//             state.totalQuantity++;
//             if (!existingItem) {
//                 state.items.push({
//                     id: newItem.id,
//                     price: newItem.price,
//                     quantity: 1,
//                     totalPrice: newItem.price,
//                     name: newItem.name,
//                 });
//             } else {
//                 existingItem.quantity++;
//                 existingItem.totalPrice += newItem.price;
//             }
//             state.totalPrice += newItem.price;
//         },
//         removeItem(state, action) {
//             const id = action.payload;
//             const existingItem = state.items.find(item => item.id === id);
//             state.totalQuantity--;
//             if (existingItem.quantity === 1) {
//                 state.items = state.items.filter(item => item.id !== id);
//             } else {
//                 existingItem.quantity--;
//                 existingItem.totalPrice -= existingItem.price;
//             }
//             state.totalPrice -= existingItem.price;
//         },
//         clearCart(state) {
//             state.items = [];
//             state.totalQuantity = 0;
//             state.totalPrice = 0;
//         },
//     },
// });

// export const { addItem, removeItem, clearCart } = cartSlice.actions;

// export default cartSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
};
export const cartSlice =  createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state,action){
            const newItem = action.payload
           state.items.push(newItem);
           
             
        }
    },
})

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer