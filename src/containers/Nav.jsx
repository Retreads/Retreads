import React from "react";
import '../styles/global.css';
import Login from "./Login";
import Footer from "./Footer"
/* import {logo} from "../assets/logoicono.svg"; */

const Nav = () => {
  return (
    <>
    <div className="navbar navbar-expand-lg navbar-light bg-primarys" >
      {/* <a href="">
        <img src={logo} height="100" alt="No encontrada" />
      </a> */}
      
      <h1 style={{ color: "white" }}>MIXTOS Restaurante</h1>
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
              <h4>
                <a
                  className="nav-item nav-link"
                  style={{ color: "white" }}
                  href=""
                >
                  {" "}
                  Menú{" "}
                </a>
              </h4>
              <h4>
                <a
                  className="nav-item nav-link"
                  style={{ color: "white" }}
                  href=""
                >
                  {" "}
                  Ubicación{" "}
                </a>
              </h4>
              <h4>
                <a
                  className="nav-item nav-link"
                  style={{ color: "white" }}
                  href=""
                >
                  {" "}
                  Horarios{" "}
                </a>
              </h4>
              <button type="button" className="btn btn-warning">
                <h6>INICIAR SESIÓN</h6>
              </button>

              <a href="">
                <i class="fa-solid fa-cart-shopping bg-primarys"></i>
              </a>
            </div>

            <div className="col-12 col-md-1 mt-2 mt-md-0 text-center"></div>
          </div>
          
    </div>
    </>
  );
};

export default Nav;