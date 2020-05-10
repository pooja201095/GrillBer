import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    GET_CART_ITEMS,
    IS_ITEM_IN_CART,
  } from "../../Constants/constants";
  
  export const addToCart = (data) => {
    return (dispatch, getState) => {
      return dispatch({ type: ADD_TO_CART, payload: data });
    };
  };
  
  export const removeFromCart = (data) => {
    return (dispatch, getState) => {
      return dispatch({ type: REMOVE_FROM_CART, payload: data });
    };
  };
  
  export const getCartItems = () => {
    return (dispatch, getState) => {
      return dispatch({ type: GET_CART_ITEMS });
    };
  };
  
  export const isItemInCart = (data) => {
    return (dispatch, getState) => {
      return dispatch({ type: IS_ITEM_IN_CART, payload: data });
    };
  };