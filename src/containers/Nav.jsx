import React from "react";
import "../styles/global.css";
import lcarrito from "../asset/logocarrito.png";
import logo from "../asset/logoicono.png";

const Nav = () => {
  return (
    <>
      <div className="navbar navbar-expand-lg  bg-primarys">
        <a href="">
          <img src={logo} height="60px" alt="No encontrada" />
        </a>

        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarCollapse">
          <div className="navbar-nav ms-auto">
            <h5>
              <a
                className="nav-item nav-link"
                style={{ color: "white" }}
                href=""
              >
                {" "}
                Menú{" "}
              </a>
            </h5>
            <h5>
              <a
                className="nav-item nav-link"
                style={{ color: "white" }}
                href=""
              >
                {" "}
                Ubicación{" "}
              </a>
            </h5>
            <h5>
              <a
                className="nav-item nav-link "
                style={{ color: "white" }}
                href=""
              >
                {" "}
                Horarios{" "}
              </a>
            </h5>
            <button type="button" className="btn btn-warning">
              <h6>INICIAR SESIÓN</h6>
            </button>
          </div>

          <div className="col-12 col-md-1 mt-2 mt-md-0 text-center">
            <a href="">
              <img src={lcarrito} alt="" height="50px" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
