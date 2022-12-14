import React, { useContext } from "react";
import "../styles/global.css";
import AppContext from "../context/AppContext";
import ButtonComprar from './ButtonComprar';

const ItemProduct = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = item => {
    addToCart(item);
  };

  return (
    <div className="card">
      <img
        className="card-img-top"
        src={product.images[0]}
        alt={product.title}
      />
      <div className="card-body">
        <div className="product-info">
        <h5 className="card-title"><p>{product.title}</p></h5>
            <p>${product.price}</p>
            <p className="datos-descripcion" >{product.description}</p>
            <div onClick={()=> handleClick(product)} >
            < ButtonComprar/>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default ItemProduct;
