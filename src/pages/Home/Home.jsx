import logo from "../../assets/logo.png";
import hamburger from "../../assets/hamburger.png";
import textlogo from "../../assets/UBOOKS.png";
import { Link } from "react-router-dom";
import closeIcon from "../../assets/x.png";
import { useState } from "react";

export function Home() {
  const [showMenu, setShowMenu] = useState(false);

  var page = (
    <div id="home" className="page-redbackground">
      <header className="header1burger">
        <div className="header-itemleft">
          <img src={textlogo} />
        </div>
        <div className="header-itemright">
          <img
            src={hamburger}
            onClick={() => {
              setShowMenu(true);
            }}
          />
        </div>
      </header>
      <main id="home-main">
        <div id="home-logo-wrapper">
          <img src={logo} id="home-logo" />
        </div>
        <Link to="/buy">
          <div className="button-white" id="home-buybutton">
            Buy Textbook
          </div>
        </Link>
        <Link to="/sell">
          <div className="button-red">Sell Textbook</div>
        </Link>
      </main>
    </div>
  );

  var popup = (
    <div id="popupMenu" className="page-whitebackground">
      <header className="header1burger">
        <div className="header-itemright">
          <img
            src={closeIcon}
            onClick={() => {
              setShowMenu(false);
            }}
          />
        </div>
      </header>
      <main id="popup-main">
        <Link to="/cart">
          <h2>CART</h2>
        </Link>
        <Link to="/orders">
          <h2>ORDERS</h2>
        </Link>
      </main>
    </div>
  );

  return <>{showMenu ? popup : page}</>;
}
