import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase";

const initialState = {
  userId: "",
  name: "",
  email: "",
  cartId: "5UKKJSjkqiqq5PYbLo0S",
  showLoading: true,
};

export const fetchCartId = createAsyncThunk(
  "user/fetchCartId",
  async (userId) => {
    const docSnap = await getDoc(doc(db, "users", userId));

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("error fetching cart id");
      return;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCartId.fulfilled, (state, action) => {
        const response = action.payload;
        state.cartId = response.cartId;
        state.showLoading = false;
      })
      .addCase(fetchCartId.rejected, (state, action) => {
        const response = action.payload;
        console.log("r " + response);
      });
  },
});

export default userSlice.reducer;
