import React from "react";
import "../styles/global.css";
import Footer from "../containers/Footer";
import Nav from "../containers/Nav";
import { NavLink } from "react-router-dom";

const Administracion = () => {
  return (
    <>
      <center>
        <Nav />
        <div className="container ubicacion-content" style={{ marginTop: 30 }}>
          <div className="row">
            <div className="col-lg-15">
              <h5>Bienvenido a la consola de Administracion</h5>

              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div >
                      <h5 className="card-title"></h5>
                      <p className="card-text">
                        Agregar y Actualizar productos.
                      </p>

                      <NavLink to="/administracion1">
                        <button
                          className="quitar-linea-inf btn btn-warning"
                          data-bs-toggle="collapse"
                          data-bs-target="#navbarCollapse"
                          type="button"
                        >
                          Ingresar
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="card">
                    <div>
                      <h5 className="card-title"></h5>
                      <p className="card-text">Informe ventas realizadas.</p>
                      <NavLink to="/administracion2">
                        <button
                          className="quitar-linea-inf btn btn-warning"
                          data-bs-toggle="collapse"
                          data-bs-target="#navbarCollapse"
                          type="button"
                        >
                          Ingresar
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>
      <Footer />
    </>
  );
};

export default Administracion;
