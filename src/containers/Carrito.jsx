import React, { useContext } from "react";
import "../styles/Container.css";
import { NavLink } from "react-router-dom";
import BtnRecoger from "../components/BtnRecoger";
import BtnEntregaDom from "../components/BtnEntregaDom";
import BtnFinCompra from "../components/BtnFinCompra";
import ListCompras from "./ListCompras";
import AppContext from "../context/AppContext";

const Carrito = () => {
  const { state } = useContext(AppContext);
  const sumTotal = () => {
    const reducer = (accumalator, currentValue) =>
      accumalator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <>
      <div className="cont-carrito">
        <div className="title-btn">
          <div className="car-title">
            <h3>Tu Carrito</h3>
          </div>
          <div className="btn-cont alg1">
            <div className="recoger">
              <BtnRecoger />
            </div>
            <div className="recoger">
              <BtnEntregaDom />
            </div>
          </div>
        </div>

        <div className="info-car">
          <div className="int-info-car1">
            <h4>titulo</h4>
          </div>
          <div className="int-info-car1">
            <h4>Descripcion</h4>
          </div>
          <div className="int-info-car1">
            <h4>Precio</h4>
          </div>
          <div className="int-info-car1">
            <h4>Producto</h4>
          </div>
        </div>
        {/* {state.cart.map(product => (
          <ListCompras product={product} key={`orderItem-${product.id}`} />
        ))} */}
        {state.cart.map((product, index) => (
          <ListCompras indexValue={index} key={index} product={product} />
        ))}
        <p className="total-unidades btn btn-outline-dark"><span>Total</span> $ {sumTotal()}</p>
        <div className="btn-cont alg2">
        <div>
            <NavLink className="inter-recoger" to="/">
              Seguir Comprando
            </NavLink>
          </div>
          <div className="recoger">
            <BtnFinCompra />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Carrito;
