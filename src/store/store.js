import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice/booksSlice";
import userReducer from "./userSlice/userSlice";
import cartReducer from "./cartsSlice/cartsSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    user: userReducer,
    cart: cartReducer,
  },
});
