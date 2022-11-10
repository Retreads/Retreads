import React from "react";
import acerca from '../asset/imagen-horarios.jpg'
import Footer from "../containers/Footer";
import Nav from "../containers/Nav";

const Horarios = () => {
  return (
    <>
    <Nav/>
    <div className="container my-4  ubicacion-content">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-6 p-3 p-lg-4 pt-lg-3">
          <h1 className="display-6 fw-bold lh-1">HORARIO</h1>
          <p className="lead">
            <strong>Lunes a Viernes: </strong>4:00 - 10:00pm
          </p>
          <p className="lead">
            <strong>Sabado : </strong>5:00 - 11:00 pm
          </p>
          <p className="lead">
            <strong>Domingo: </strong>Cerrado
          </p>
        </div>
        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img className="rounded-lg-3" src={acerca} alt="" />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Horarios;
