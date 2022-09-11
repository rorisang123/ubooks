import arrow from "../../assets/arrowred.png";
import greenTick from "../../assets/greentick.png";
import greyCircle from "../../assets/greycircle.png";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

export function OrderListing() {
  let { slug } = useParams();

  let order = {
    id: "PX123456",
    total: 500,
    isPayed: true,
    isCollected: false,
    books: [
      {
        title: "Romeo and Juliet",
        author: "William Shakespeare",
        price: 250,
        image: "romeojuliet",
      },
      {
        title: "Macbeth",
        author: "William Shakespeare",
        price: 250,
        image: "romeojuliet",
      },
    ],
  };

  let renderedBooks = order.books.map((book) => (
    <Link to={"/order/" + order.id} key={order.id}>
      <div className="book">
        <div className="book-thumbnail-cover">
          <img
            src={require("../../assets/covers/" + book.image + ".png")}
            alt="cover"
          />
        </div>
        <div className="book-thumbnail-summary">
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
          <h2>R{book.price}</h2>
        </div>
        <div className="book-thumbnail-price"></div>
      </div>
    </Link>
  ));

  return (
    <div id="order-details" className="page-whitebackground">
      <header className="header1burger header-red">
        <div className="header-itemleft">
          <Link to="/orders">
            <img src={arrow} />
          </Link>
        </div>
        <div className="header-itemcenter">
          <h3>{order.id}</h3>
        </div>
      </header>
      <main id="order-details-main">
        <div id="order-items">{renderedBooks}</div>
        <div id="order-status">
          <h2>Order status</h2>
          <div className="isPayed">
            <div className="isPayed-icon">
              <img
                src={order.isPayed ? greenTick : greyCircle}
                alt="Green tick"
              />
            </div>
            <div className="isPayed-details">
              <h2>Payment</h2>
              <h3>
                Pay R{order.total} using ref {order.id}
              </h3>
            </div>
          </div>
          <div className="isPayed">
            <div className="isPayed-icon">
              <img
                src={order.isCollected ? greenTick : greyCircle}
                alt="Green tick"
              />
            </div>
            <div className="isPayed-details">
              <h2>Collection</h2>
              <h3>Visit building A8-103 with proof of payment</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
