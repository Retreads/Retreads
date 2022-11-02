import React from 'react'

import "../styles/global.css";
import ButtonComprar from './ButtonComprar';
import foto6 from "../asset/6HamburguesaWrap.jpg"

export const Item6HamburguesaWrap = () => {
    return (
        <>
            <div className="card" /* style="width: 18rem" */>
                <img className="rounded-square card-img-top" width="200" height="200" src={foto6} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">HAMBURGUESA WRAP DE POLLO</h5>
                    <p className="card-text">
                        Wrap de 125g cada una 100% de res a la parrilla con salsa MIXTOS, una tajada de queso,lechuga picada, tomate,cebolla grille, papa ripio.
                    </p>
                    <h6 className="precioProducto">Precio: &nbsp; &nbsp; &#36; 10000</h6>
                    <ButtonComprar />
                </div>
            </div>
        </>
    )
}
export default Item6HamburguesaWrap;

