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
              <h1>Ubicanos</h1>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497.51717780699767!2d-73.76190842293732!3d3.9921490095648364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e3939c4c0fcf1%3A0xf92467fd222e12f2!2sMIXTOS%20Restaurante%2Fcomidas%20mixtas!5e0!3m2!1ses!2sco!4v1668017818969!5m2!1ses!2sco"
                width={800}
                height={400}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />


              <p>Calle 18a No.19-04 / Acacias-Meta</p>

            </div>
          </div>
        </div>
      </center>
      <Footer />
    </>
  );
};

export default Ubicacion;
