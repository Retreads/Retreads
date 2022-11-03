import React from 'react'
import map from "../asset/imagen-ubicacion.jpg"
import Footer from "../containers/Footer";
import Nav from "../containers/Nav";

const Ubicacion = () => {
  return (
    <>
      <center>
        <Nav />
        <div className="container ubicacion-content" style={{ marginTop: 30 }}>
          <div className="row">
            <div className="col-lg-15">
              <h2>Google Maps</h2>
              <img
                className="rounded-square"
                width="500"
                height="237"
                src={map}
                alt="..."
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
      </center>
      <Footer />
    </>
  );
};

export default Ubicacion;