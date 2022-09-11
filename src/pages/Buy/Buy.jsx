import arrow from "../../assets/arrowred.png";
import search from "../../assets/searchblack.png";
import pages from "../../assets/pages.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Buy() {
  const [searchWord, setSearchWord] = useState("");

  let books = [
    {
      id: 1,
      src: "romeojuliet",
      title: "Romeo and Juliet",
      author: "William Shakespeare",
      pageCount: 299,
      price: 250,
    },
    {
      id: 2,
      src: "romeojuliet",
      title: "Macbeth",
      author: "William Shakespeare",
      pageCount: 299,
      price: 250,
    },
    {
      id: 3,
      src: "romeojuliet",
      title: "Where the Red Fern Grows",
      author: "WIlson Rawles",
      pageCount: 299,
      price: 250,
    },
    {
      id: 4,
      src: "romeojuliet",
      title: "Four Steps to the Epiphany",
      author: "Steve Blank",
      pageCount: 299,
      price: 250,
    },
  ];

  let renderedBooks = books.map((book) => (
    <Link to={"/buy/" + book.id} key={book.id}>
      <div className="book">
        <div className="book-thumbnail-cover">
          <img
            src={require("../../assets/covers/" + book.src + ".png")}
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

  return (
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
