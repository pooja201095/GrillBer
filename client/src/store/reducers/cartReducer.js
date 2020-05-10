import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    GET_CART_ITEMS,
    IS_ITEM_IN_CART,
  } from "../../Constants/constants";
  
  const initState = {};
  
  const cartReducer = (state = initState, action) => {
    let cart = [];
    switch (action.type) {
      case IS_ITEM_IN_CART:
        cart = JSON.parse(localStorage.getItem("itemsInCart")) || [];
        const presentInCart = cart.find((item) => item.id === action.payload.id);
        const status = presentInCart ? "ADDED" : "REMOVED";
        return {
          ...state,
          cart: { status },
        };
      case ADD_TO_CART:
        //TODO: save this to database
        cart = JSON.parse(localStorage.getItem("itemsInCart")) || [];
  
        //check if the grill is already present in the card
        if (cart.find((item) => item.id === action.payload.id)) {
          return { ...state };
        }
        cart.push(action.payload);
        localStorage.setItem("itemsInCart", JSON.stringify(cart));
        return {
          ...state,
          cart: { itemsInCart: cart, status: "ADDED" },
        };
  
      case REMOVE_FROM_CART:
        cart = JSON.parse(localStorage.getItem("itemsInCart")) || [];
        cart = cart.filter((item) => item.id !== action.payload.id);
        localStorage.setItem("itemsInCart", JSON.stringify(cart));
        return {
          ...state,
          cart: { itemsInCart: cart, status: "REMOVED" },
        };
  
      case GET_CART_ITEMS:
        cart = JSON.parse(localStorage.getItem("itemsInCart")) || [];
        let totalAmount = [];
        cart.map((item) => totalAmount.push(item.price));
        totalAmount = totalAmount.reduce((a, b) => a + b, 0);
        return {
          ...state,
          cart: { itemsInCart: cart, totalAmount },
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;