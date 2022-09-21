import arrow from "../../assets/arrowred.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrders } from "../../store/ordersSlice/ordersSlice";

export function Orders() {
  const dispatch = useDispatch();

  /* Orders state management */
  const showLoading = useSelector((state) => state.books.showLoading);
  const orders = useSelector((state) => state.orders.orders);
  useEffect(() => {
    dispatch(fetchOrders());
  }, []);
  /* End orders state management */

  let renderedOrders = orders.map((order, n) => (
    <Link to={"/order/" + order.id} key={n}>
      <div className="order">
        <div className="order-left">{order.id}</div>
        <div className="order-right">
          <h3>{order.date}</h3>
          <h2>R{order.total}</h2>
          <h3>
            Status:
            {order.isCollected
              ? " collected"
              : order.isPayed
              ? " payed"
              : " ordered"}
          </h3>
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
