import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import db from "../../firebase";

const initialState = {
  showLoading: true,
  orders: [],
};

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  let fetchedOrders = [{}];

  const querySnapshot = await getDocs(collection(db, "orders"));
  querySnapshot.forEach(async (doc) => {
    fetchedOrders.push({
      id: doc.id,
      date: doc.data().date,
      total: doc.data().total,
      isCollected: doc.data().isCollected,
      isPayed: doc.data().isPayed,
    });
  });

  return fetchedOrders;
});

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.orders = [];
        const response = action.payload;
        response.forEach((order) => state.orders.push(order));
        state.showLoading = false;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        const response = action.payload;
        console.log("r " + response);
      });
  },
});

export default ordersSlice.reducer;
