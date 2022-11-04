import React from "react";
import { NavLink } from "react-router-dom";
import map from "../asset/imagen-ubicacion.jpg";
import BtnContinue from "../components/BtnContinue";
import "../styles/Container.css";
const RecogeInTienda = () => {
  return (
    <div className="cont-carrito">
      <div className="title-btn">
        <div className="car-title">
          <h3>Recoger en tienda</h3>
        </div>
        <div className="btn-cont alg1"></div>
      </div>

      <div
        className="container ubicacion-content-tienda"
        style={{ marginTop: 0, marginBottom: 0 }}
      >
        <div className="row">
          <div className="col-lg-15">
            <h2>Google Maps</h2>
            <img
              className="rounded-square"
              width="500"
              height="237"
              src={map}
            />
            <p>Calle 18a No.19-04 / Acacias-Meta</p>
            <p>
              <a className="btn btn-secondary" href="# ">
                Abrir Maps &raquo;
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="btn-cont alg2">
        <div>
          <NavLink className="inter-recoger" to="/carrito">
            Continuar
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default RecogeInTienda;
