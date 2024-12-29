import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartSlice/cartSlice";

// Redux Persist Configuration
const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, cartReducer);

// Configure Store
export const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

// Persistor
export let persistor = persistStore(store);
