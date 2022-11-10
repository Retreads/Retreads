import React from "react";

import "../styles/global.css";
import ButtonComprar from "./ButtonComprar";
import foto3 from "../asset/3CalentaoPaisa.jpg";

export const Item3CalentaoPaisa = () => {
  return (
    <>
      <div className="card" /* style="width: 18rem" */>
        <img className="rounded-square card-img-top" width="200" height="200" src={foto3} alt="..." />  
        <div className="card-body">
          <h5 className="card-title">CALENTAO PAISA</h5>
          <p className="card-text">
            Arroz, papa, frijol, chorizo,  maduro, carne desmechada.
          </p>
          <h6 className="precioProducto">Precio: &nbsp; &nbsp; &#36; 9000</h6>
          <ButtonComprar />
        </div>
      </div>
    </>
  );
};

export default Item3CalentaoPaisa;
