import arrow from "../../assets/arrowred.png";
import { Link } from "react-router-dom";

export function Orders() {
  return (
    <div id="sell" className="page-whitebackground">
      <header className="header1burger header-red">
        <div className="header-itemleft">
          <Link to="/">
            <img src={arrow} />
          </Link>
        </div>
        <div className="header-itemcenter">
          <h3>Orders</h3>
        </div>
      </header>
      <main id="home-main"></main>
    </div>
  );
}
