import React from "react";
import "../styles/Container.css";
import { NavLink } from "react-router-dom";

import BtnRecoger from "../components/BtnRecoger";
import BtnEntregaDom from "../components/BtnEntregaDom";
import BtnFinCompra from "../components/BtnFinCompra";
import BtnContinue from "../components/BtnContinue";

const Carrito = () => {
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
            <h4>Producto</h4>
          </div>
          <div className="int-info-car1">
            <h4>Descripcion</h4>
          </div>
          <div className="int-info-car1">
            <h4>Precio</h4>
          </div>
          <div className="int-info-car1">
            <h4>Cantidad</h4>
          </div>
          <div className="int-info-car1">
            <h4>Subtotal</h4>
          </div>
        </div>


        <div className="ver-dates">
        <div className="int-info-car">
            <p>Producto1</p>
          </div>
          <div className="int-info-car">
            <p>lo traemos desde el backend</p>
          </div>
          <div className="int-info-car">
            <p>como en el</p>
          </div>
          <div className="int-info-car">
            <p>ciclo 3</p>
          </div>
          <div className="int-info-car">
            <p>pero ahora con node</p>
          </div>
        </div>

        <div className="btn-cont alg2">
          <div className="recoger">
            <BtnFinCompra />
          </div>
          <div>
          <NavLink className="inter-recoger" to="/">
            Seguir Comprando
          </NavLink>
        </div>
        </div>
      </div>
    </>
  );
};

export default Carrito;
