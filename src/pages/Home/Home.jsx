import logo from "../../assets/logo.png";
import hamburger from "../../assets/hamburger.png";
import textlogo from "../../assets/UBOOKS.png";
import { Link } from "react-router-dom";
import closeIcon from "../../assets/x.png";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export function Home() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [showMenu, setShowMenu] = useState(false);
  const showLoading = useSelector((state) => state.user.showLoading);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //////// auth
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    onAuthStateChanged(auth, (userFb) => {
      if (userFb) {
        // User is signed in
        setIsLoggedIn(true);
      } else {
        // User is signed out
        console.log("User is signed out");
        history.push("/login");
      }
    });
  }, []);
  //////// end auth

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

  let content;
  if (showMenu) {
    content = popup;
  } else {
    if (showLoading) {
      content = <div>Loading</div>;
    } else {
      content = page;
    }
  }

  return <>{showMenu ? popup : page}</>;
  //return <>{isLoggedIn ? content : "checking auth status"}</>;
}
