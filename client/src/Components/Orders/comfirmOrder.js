import React, { Component } from "react";

import { connect } from "react-redux";
import { getCartItems } from "../../store/actions/cartAction";
import { ConfirmOrdersLayout } from "./confirmOrderLayout";
import {Redirect} from 'react-router-dom';

class ConfirmOrders extends Component {
  componentDidMount() {
    this.props.getCartItems();
  }

  render() {
  return (
    this.props.auth.uid ?
  <ConfirmOrdersLayout cartItems={this.props.itemsInCart} totalAmount={this.props.totalAmount}/> :
  <Redirect to='/'/> 
  );
  }
}

const mapStateToProps = (state) => {
  return {
    auth:state.firebase.auth,
    itemsInCart:
      (state.cart && state.cart.cart && state.cart.cart.itemsInCart) || {},
    totalAmount:
      (state.cart && state.cart.cart && state.cart.cart.totalAmount) || 0,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCartItems : () => dispatch(getCartItems())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmOrders);
