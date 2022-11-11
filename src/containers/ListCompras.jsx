import React from 'react'
import "../styles/Container.css";
const ListCompras = ({product}) => {
    
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
        className="card-img-top"
        src={product.images[0]}
        alt={product.title}
      />
            </div>
            
          </div>
          
          
        
    )    
}

export default ListCompras;