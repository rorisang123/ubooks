import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import db from "../../firebase";

const initialState = {
  dateLastModified: "",
  total: 1000,
  items: [{ bookId: "" }],
};

export const fetchCart = createAsyncThunk("cart/fetchCart", async (cartId) => {
  let cart = {
    total: 0,
    items: [
      {
        bookId: 1,
        src: "",
        title: "",
        author: "",
        price: 0,
      },
    ],
  };

  // Get cart total
  const cartTotalSnap = await getDoc(doc(db, "cart", cartId));
  if (cartTotalSnap.exists()) {
    cart.total = cartTotalSnap.data().total;
  }

  // Get and populate book IDs
  const bookIdsSnapshot = await getDocs(
    collection(db, "cart", cartId, "items")
  );
  bookIdsSnapshot.forEach(async (doc) => {
    cart.items.push({
      bookId: doc.data().bookId,
    });
  });

  // Get and populate rest of items
  const querySnapshot = await getDocs(collection(db, "books"));
  querySnapshot.forEach(async (doc) => {
    cart.items.push({
      id: doc.id,
      src: doc.data().image,
      title: doc.data().title,
      author: doc.data().author,
      price: doc.data().price,
    });
  });

  return cart.items;
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCart.fulfilled, (state, action) => {
        /*const response = action.payload;
        state.cart.items = response;
        console.log("response: ", response);
        state.showLoading = false;*/

        state.cart = [];
        const response = action.payload;
        response.forEach((item) => state.cart.items.push(item));
        state.showLoading = false;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        const response = action.payload;
        console.log("r " + response);
      });
  },
});

export default cartSlice.reducer;
