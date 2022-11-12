import { useState } from "react";

const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeProduct = (indexValue) => {
    setState({
      ...state,
      cart: state.cart.filter((products,index) => index !== indexValue),
    });
  }; 
  
  return {
    state,
    addToCart,
    removeProduct
  };
};
export default useInitialState;
