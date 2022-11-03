import React from "react";

import "../styles/global.css";
import ButtonComprar from "./ButtonComprar";
import foto1 from "../asset/1CalentaoValluno.jpg";

export const Item1CalentaoValluno = () => {
  return (
    <>
      <div className="card" /* style="width: 18rem" */>
      <img className="rounded-square card-img-top" width="200" height="200" src={foto1} alt="..." />  
        <div className="card-body">
          <h5 className="card-title">CALENTAO VALLUNO</h5>
          <p className="card-text">
            Arroz, papa, chorizo,  maduro, carne desmechada.
          </p>
          <h6 className="precioProducto">Precio: &nbsp; &nbsp; &#36; 8000</h6>
          <ButtonComprar />
        </div>
      </div>
    </>
  );
};

export default Item1CalentaoValluno;