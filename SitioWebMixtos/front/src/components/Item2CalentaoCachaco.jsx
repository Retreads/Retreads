import React from 'react'

import "../styles/global.css";
import ButtonComprar from "./ButtonComprar";
import foto2 from '../asset/2CalentaoCachaco.jpg';

export const Item2CalentaoCachaco = () => {
  return (
    <>
      <div className="card" /* style="width: 18rem" */>
        <img className="rounded-square card-img-top" width="200" height="200" src={foto2} alt="..." />  
        <div className="card-body">
          <h5 className="card-title">CALENTAO CACHACO</h5>
          <p className="card-text">
            Arroz, papa, Lenteja,  carne de cerdo en trozos,  tocineta, cebolla grille
          </p>
          <h6 className="precioProducto">Precio: &nbsp; &nbsp; &#36; 8000</h6>
          <ButtonComprar />
        </div>
      </div>
    </>
  )
}

export default Item2CalentaoCachaco;