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

  const removeProduct = (payload, indexValue) => {
    setState({
      ...state,
      cart: state.cart.filter(
        (item, index) => item.id != payload && index != indexValue
      ),
    });
  }; 
  
  return {
    state,
    addToCart,
    removeProduct
  };
};
export default useInitialState;
