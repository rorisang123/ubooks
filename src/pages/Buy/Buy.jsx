import arrow from "../../assets/arrowred.png";
import search from "../../assets/searchblack.png";
import pages from "../../assets/pages.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../../store/booksSlice/booksSlice";

export function Buy() {
  const [searchWord, setSearchWord] = useState("");

  /* Books state management */
  const dispatch = useDispatch();

  const showLoading = useSelector((state) => state.books.showLoading);
  const books = useSelector((state) => state.books.books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  /* End books state management */

  let renderedBooks = books.map((book) => (
    <Link to={"/buy/" + book.id} key={book.id}>
      <div className="book">
        <div className="book-thumbnail-cover">
          <img
            src={
              showLoading
                ? ""
                : require("../../assets/covers/" + book.image + ".png")
            }
            alt="cover"
          />
        </div>
        <div className="book-thumbnail-summary">
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
          <h4>
            <img src={pages} alt="pages" />
            {book.pageCount}p
          </h4>
          <div className="book-summary-addtocart">Add to cart</div>
        </div>
        <div className="book-thumbnail-price">R {book.price}</div>
      </div>
    </Link>
  ));

  var content;

  if (!showLoading) {
    content = (
      <div id="buy" className="page-whitebackground">
        <header className="header1burger header-red">
          <div className="header-itemleft">
            <Link to="/">
              <img src={arrow} />
            </Link>
          </div>
          <div className="header-itemcenter">
            <h3>Buy</h3>
          </div>
        </header>
        <main id="buy-main">
          <div className="searchbox">
            <input
              type="text"
              placeholder="Type to search..."
              value={searchWord}
              onChange={(e) => {
                setSearchWord(e.target.value);
              }}
            />
            <img src={search} />
          </div>
          <div className="browse-collection-books">
            <h2>Browse books</h2>
            <div className="books">{renderedBooks}</div>
          </div>
        </main>
      </div>
    );
  }

  return <>{content}</>;
}
