import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/Container.css";

const ListCompras = (props) => {
  const { product, indexValue } = props
  const { removeProduct } = useContext(AppContext);
  const handleRemove = (index )=> {
    removeProduct( index);
  }

  return (
    <div className="ver-dates">
      
      <div className="int-info-car">
        <p>{product.title}</p>
        
      </div>
      <div className="int-info-car">
        <p>{product.description}</p>
      </div>
      <div className="int-info-car pCompra">
        <p>$ {product.price}</p>
      </div>
      <div className="int-info-car pCompra">
        <img
        onClick={()=> handleRemove(indexValue)}
          className="card-img-top img-cart"
          src={product.images[0]}
          alt={product.title}
        />
        <div>
        <i  className="fa-solid fa-trash"></i>
        </div>
       
      </div>
      
    </div>
  );
};

export default ListCompras;
