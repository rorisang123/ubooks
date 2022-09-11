import arrow from "../../assets/arrowred.png";
import search from "../../assets/searchblack.png";
import pages from "../../assets/pages.png";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

export function SellListing() {
  let { slug } = useParams();

  let book = {
    id: 1,
    src: "romeojuliet",
    title: "Romeo and Juliet",
    author: "William Shakespeare",
    pageCount: 299,
    condition: "Brand new",
    description:
      "Sed in vestibulum nibh. Phasellus finibus ac ante sed facilisis. Phasellus justo orci, dapibus et velit at, laoreet luctus est. Phasellus ut justo ut orci tincidunt euismod. Cras nunc purus, sodales eget aliquam consequat, accumsan quis tortor.",
    price: 250,
  };
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
