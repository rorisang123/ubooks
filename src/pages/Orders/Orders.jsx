import arrow from "../../assets/arrowred.png";
import { Link } from "react-router-dom";

export function Orders() {
  let orders = [
    {
      id: "PX123445",
      date: "18 July 2022",
      status: "Ordered",
      total: 250,
    },
    {
      id: "PX123449",
      date: "25 August 2022",
      status: "Collected",
      total: 500,
    },
  ];

  let renderedOrders = orders.map((order) => (
    <Link to={"/order/" + order.id} key={order.id}>
      <div className="order">
        <div className="order-left">{order.id}</div>
        <div className="order-right">
          <h3>{order.date}</h3>
          <h2>R{order.total}</h2>
          <h3>Status: {order.status}</h3>
        </div>
      </div>
    </Link>
  ));

  return (
    <div id="order" className="page-whitebackground">
      <header className="header1burger header-red">
        <div className="header-itemleft">
          <Link to="/">
            <img src={arrow} />
          </Link>
        </div>
        <div className="header-itemcenter">
          <h3>My orders</h3>
        </div>
      </header>
      <main id="orders-main">
        <div id="orders-main-infobubble">
          <p className="right-align">Click order for details</p>
        </div>
        {renderedOrders}
      </main>
    </div>
  );
}
