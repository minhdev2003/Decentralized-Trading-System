import { createContext, useContext, useReducer, useState, useEffect } from "react";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {

  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
  });
  
  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byBestOffer: false,
    byRating: 0,
    searchQuery: "",
  });
  
  console.log(productState);
  
  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
    {children}
    </Cart.Provider>
    );
  };
  
  export const CartState = () => {
    return useContext(Cart);
  };
  export default Context;