import React from "react";
import '../styles/Container.css';
import BtnContinue from "../components/BtnContinue";
import { NavLink } from "react-router-dom";

const EntregaDomicilio = () => {
  return (
    <div className="cont-carrito">
        <div className="title-btn">
        <div className="car-title">
          <h3>Entrega a Domicilio</h3>
        </div>
        <div className="btn-cont alg1"></div>
      </div>
      <form>
        <div class="form-row margin-auto">
          <div class="form-group ">
            <label for="inputEmail4">Barrio</label>
            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              placeholder="escribe el nombre de tu barrio"
            />
          </div>
          <div class="form-group ">
            <label for="inputPassword4">Direccion</label>
            <input
              type="text"
              class="form-control"
              id="inputPassword4"
              placeholder="Ej :  calle 8 # 13a-17"
            />
          </div>
        
        <div class="form-group">
          <label for="inputInmueble">Tipo de inmueble</label>
          <input
            type="text"
            class="form-control"
            id="inputInmueble"
            placeholder="casa-apartamento-oficinas"
          />
        </div>
        <div class="form-group ">
          <label for="inputAddress2">Bloque o Interior</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder="int - 02 "
          />
        </div>
        
        <div class="form-group ">
    <label for="exampleFormControlTextarea1">Observaciones</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  </div>
      </form>

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

export default EntregaDomicilio;
