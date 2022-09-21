import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice/booksSlice";
import userReducer from "./userSlice/userSlice";
import cartReducer from "./cartsSlice/cartsSlice";
import ordersReducer from "./ordersSlice/ordersSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    user: userReducer,
    cart: cartReducer,
    orders: ordersReducer,
  },
});
