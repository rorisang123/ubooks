import arrow from "../../assets/arrowred.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart } from "../../store/cartsSlice/cartsSlice";

export function Cart() {
  const dispatch = useDispatch();

  //const cartId = useSelector((state) => state.user.cartId);
  const cartId = "5UKKJSjkqiqq5PYbLo0S";
  /* Cart state management */

  const showLoading = useSelector((state) => state.books.showLoading);
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(fetchCart(cartId));
  }, []);

  /* End cart state management */

  let booksInCart = cart.items.map((book) => (
    <div className="book" key={book.id}>
      <div className="book-thumbnail-cover">
        <img
          src={require("../../assets/covers/" + book.src + ".png")}
          alt="cover"
        />
      </div>
      <div id="booksInCart" className="book-thumbnail-summary">
        <h2>{book.title}</h2>
        <h3>{book.author}</h3>
        <h1>R{book.price}</h1>
      </div>
      <div className="book-thumbnail-price">
        <img src={require("../../assets/binsmall.png")} alt="delete" />
      </div>
    </div>
  ));

  return (
    <div id="cart" className="page-whitebackground">
      <header className="header1burger header-red">
        <div className="header-itemleft">
          <Link to="/">
            <img src={arrow} />
          </Link>
        </div>
        <div className="header-itemcenter">
          <h3>Cart</h3>
        </div>
      </header>
      <main id="cart-main">
        {booksInCart}
        <div className="cart-total">
          <div className="cart-total-text">
            <h1>Total</h1>
            <h2 className="right-align">R{cart.total}</h2>
          </div>
          <div className="cart-checkout">Checkout</div>
        </div>
      </main>
    </div>
  );
}
