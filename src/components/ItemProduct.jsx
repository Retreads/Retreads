import React from 'react';
import '../styles/global.css';
import ButtonComprar from './ButtonComprar';
import logo from "../asset/logoicono.png";
import AddProduct from './AddProduct';

const ItemProduct = () => {
    return (
        <>
        <div className="card" /* style="width: 18rem" */>
            <img className="card-img-top" src={logo}  alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Producto 1</h5>
                <p className="card-text">Esta es la descripcion del producto menos su valor o precio</p>
                <h6 className='precioProducto'>Precio: &nbsp; &nbsp;	&#36; 8.000</h6>
                <ButtonComprar/>
                
            </div>
        </div>
        </>
    );
}

export default ItemProduct;