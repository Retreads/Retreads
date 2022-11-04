import React from "react";
import "../styles/global.css";
import { NavLink } from "react-router-dom";

import lcarrito from "../asset/logocarrito.png";
import logo from "../asset/logoicono.png";

const Nav = () => {
  return (
    <>
      <div className="navbar navbar-expand-lg  bg-primarys ">
        <img src={logo} height="60px" alt="No encontrada" />

        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto">
            <h5>
              <NavLink to="/" className="quitar-linea-inf nav-item nav-link">
                <a href="" className="quitar-linea-inf">Menu</a> 
              </NavLink>
            </h5>

            <h5>
              <NavLink
                to="/ubicacion"
                className="quitar-linea-inf nav-item nav-link"
              >
                Ubicación
              </NavLink>
            </h5>
            <h5>
              <NavLink
                to="/horarios"
                className="quitar-linea-inf nav-item nav-link"
              >
                Horarios
              </NavLink>
            </h5>
          </div>
        </div>
        <div className="navbar-nav ms-auto " id="navbarCollapse">
          <div className="navbar-nav">
            <NavLink to="/login">
              <button
                className="quitar-linea-inf btn btn-warning"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                type="button"
              >
                INICIAR SESIÓN
              </button>
            </NavLink>
          </div>
          <div className="col-12 col-md-2 mt-2 mt-md-0 text-center">
            <NavLink to="/carrito">
              <img src={lcarrito} alt="" height="50px" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
