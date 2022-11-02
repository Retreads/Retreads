import React from 'react'
import "../styles/global.css";
import ButtonComprar from './ButtonComprar';
import foto5 from "../asset/5HamburguesaTodoterreno.jpg";

export const Item5HamburguesaTodoterreno = () => {
    return (
        <>
            <div className="card" /* style="width: 18rem" */>
                <img className="rounded-square card-img-top" width="200" height="200" src={foto5} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">HAMBURGUESA TODOTERRENO</h5>
                    <p className="card-text">
                        Dos carnes de 125g cada una 100% de res a la parrilla con salsa BBQ, tocineta, una tajada de queso,lechuga picada, tomate,cebolla grille, papa ripio, salsa MIXTOS.
                    </p>
                    <h6 className="precioProducto">Precio: &nbsp; &nbsp; &#36; 10000</h6>
                    <ButtonComprar />
                </div>
            </div>
        </>

    )
}

export default Item5HamburguesaTodoterreno;

