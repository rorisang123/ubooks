import arrow from "../../assets/arrowred.png";
import search from "../../assets/searchblack.png";
import pages from "../../assets/pages.png";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../../store/booksSlice/booksSlice";

export function SellListing() {
  let { slug } = useParams();
  const dispatch = useDispatch();

  // Fetch firestore data into redux when page loads
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  // Selectors
  const book = useSelector((state) =>
    state.books.books.find((book) => book.id === slug)
  );

  // Handle condition state
  const [condition, setCondition] = useState(book.condition);
  function onConditionChange(event) {
    setCondition(event.target.value);
  }

  return (
    <div id="book-details" className="page-whitebackground">
      <header className="header1burger header-red">
        <div className="header-itemleft">
          <Link to="/sell">
            <img src={arrow} />
          </Link>
        </div>
        <div className="header-itemcenter">
          <h3>Book details</h3>
        </div>
      </header>
      <main id="book-details-main">
        <div className="book-details-cover">
          <img
            src={require("../../assets/covers/romeojuliet2.png")}
            alt="book cover"
          />
        </div>
        <div className="book-details-summary">
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
        </div>
        <div className="book-details-merchant-summary">
          <h2>ISBN: {book.isbn}</h2>
          <h2>Year: {book.year}</h2>
        </div>
        <div className="book-listing-details">
          <h2>Condition</h2>
          <div
            className="book-listing-condition-group"
            onChange={onConditionChange}
          >
            <input type="radio" value="Brand new" name="condition" /> Brand new
            <input type="radio" value="Good" name="condition" /> Good
            <input type="radio" value="Fair" name="condition" />
            Fair
          </div>
        </div>
        <div className="book-details-addtocart">Sell this book</div>
      </main>
    </div>
  );
}
