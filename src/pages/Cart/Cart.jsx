import arrow from "../../assets/arrowred.png";
import { Link } from "react-router-dom";

export function Cart() {
  let cart = {
    subtotal: 1000,
    total: 950,
    discount: 50,
    items: [
      {
        id: 1,
        src: "romeojuliet",
        title: "Romeo and Juliet",
        author: "William Shakespeare",
        price: 250,
      },
      {
        id: 2,
        src: "romeojuliet",
        title: "Macbeth",
        author: "William Shakespeare",
        price: 250,
      },
    ],
  };

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
