import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// Firestore
import db from "../../firebase";
import {
  collection,
  query,
  getDocs,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  increment,
  deleteDoc,
} from "firebase/firestore";

const initialState = {
  showLoading: true,
  books: [],
};

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  let fetchedBooks = [{}];

  const querySnapshot = await getDocs(collection(db, "books"));
  querySnapshot.forEach(async (doc) => {
    fetchedBooks.push({
      id: doc.id,
      available: doc.data().available,
      sellerId: doc.data().sellerId,
      image: doc.data().image,
      title: doc.data().title,
      author: doc.data().author,
      pageCount: doc.data().pageCount,
      price: doc.data().price,
      isbn: doc.data().isbn,
      year: doc.data().year,
      condition: doc.data().condition,
      description: doc.data().description,
    });
  });

  return fetchedBooks;
});

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = [];
        const response = action.payload;
        response.forEach((book) => state.books.push(book));
        state.showLoading = false;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        const response = action.payload;
        //console.log("rejected because: " + response);
      });
  },
});

// Action creators are generated for each case reducer function
//export const { addBook } = booksSlice.actions;

export default booksSlice.reducer;
