import React from "react";

import "../styles/global.css";
import ButtonComprar from "./ButtonComprar";
import logo from "../asset/logoicono.png";

export const Item2CalentaoCachaco = () => {
  return (
    <>
      <div className="card" /* style="width: 18rem" */>
        <img className="card-img-top" src={logo} alt="Card image cap" />
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
  );
};

export default Item1CalentaoValluno;