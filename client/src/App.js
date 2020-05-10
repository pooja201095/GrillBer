import React from 'react';
import { Route, BrowserRouter as Router,Switch, Redirect } from 'react-router-dom'
import AuthInterface from './Components/Auth/AuthInterface';
import HomePage from './Components/HomePage/HomePage';
import NavBar from './Components/Navbar/Navbar';
import StickyFooter from './Components/Navbar/Footer';
import Profile from './Components/Profile/profile';
import OrderList from './Components/AllOrders/orders';
import ConfirmOrders from "./Components/Orders/comfirmOrder";
import Checkout from './Components/Checkout/checkout';
import { connect } from "react-redux";
import {
  addToCart,
  removeFromCart,
  isItemInCart,
  getCartItems,
} from "../src/store/actions/cartAction";

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
};

class App extends React.Component {
  componentDidMount() {
    this.props.getCartItems();
  }
  render() {
  return (
    <div style={styles.root}>
        <Router>
        <NavBar/>
        <Switch>
        <Route exact path="/" render={(props) => <HomePage {...this.props} />} />
      <Route path="/signin" render={(props)=><AuthInterface {...props} mode="signin"/>} />
      <Route path="/signup" render={(props)=><AuthInterface {...props} mode="signup"/>} />
      {/* <Route path="/bbq/:grillId" exact render={(props)=><PDP {...props}/>}/> */}
      <Route path="/confirmcheckout" component={ConfirmOrders} />
      <Route path="/profile" exact component={Profile}/>
      <Route path="/orders" component={OrderList} />
      <Route path="/checkout" exact component={Checkout}/>
      <Redirect to="/" />
      </Switch>
      <StickyFooter/>
  </Router>
    </div>
  );
  }
}

const mapStateToProps = (state) => {
  return {
    itemsInCart:
      (state.cart && state.cart.cart && state.cart.cart.itemsInCart) || {},
    // status:
    //   (state.cart && state.cart.cart && state.cart.cart.status) || "INTIAL",
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (data) => dispatch(addToCart(data)),
    removeFromCart: (data) => dispatch(removeFromCart(data)),
    isItemInCart: (data) => dispatch(isItemInCart(data)),
    getCartItems: () => dispatch(getCartItems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
