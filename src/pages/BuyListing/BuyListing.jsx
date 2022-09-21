import arrow from "../../assets/arrowred.png";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../../store/booksSlice/booksSlice";

export function BuyListing() {
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

  const [title, setTitle] = useState("-");
  const [author, setAuthor] = useState("-");
  const [condition, setCondition] = useState("-");
  const [price, setPrice] = useState("-");
  const [image, setImage] = useState("-");
  const [description, setDescription] = useState("-");

  return (
    <div id="book-details" className="page-whitebackground">
      <header className="header1burger header-red">
        <div className="header-itemleft">
          <Link to="/buy">
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
            src={
              book.image
                ? require("../../assets/covers/" + book.image + ".png")
                : require("../../assets/covers/undefined.png")
            }
            alt="book cover"
          />
        </div>
        <div className="book-details-summary">
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
        </div>
        <div className="book-details-consumer-summary">
          <div className="book-details-consumer-summary-left">
            <h2>{book.condition}</h2>
            <h3>Condition</h3>
          </div>
          <div className="book-details-consumer-summary-divider"></div>
          <div className="book-details-consumer-summary-right">
            <h2>R {book.price}</h2>
            <h3>Price</h3>
          </div>
        </div>
        <div className="book-details-description">
          <h2>Description</h2>
          {book.description}
        </div>
        <div className="book-details-addtocart">Add to cart</div>
      </main>
    </div>
  );
}
