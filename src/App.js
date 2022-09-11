import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Buy,
  BuyListing,
  Cart,
  Home,
  Login,
  Orders,
  Sell,
  SellListing,
} from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/buy">
          <Buy />
        </Route>
        <Route exact path="/buy/:slug">
          <BuyListing />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/orders">
          <Orders />
        </Route>
        <Route exact path="/sell">
          <Sell />
        </Route>
        <Route exact path="/sell/:slug">
          <SellListing />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
