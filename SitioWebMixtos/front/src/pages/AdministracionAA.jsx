import React from "react";
import '../styles/global.css'
import Footer from "../containers/Footer";
import Nav from "../containers/Nav";


const AdministracionAA = () => {
    return (
        <>
            <center>
                <Nav />
                <div className="container administracionAA-content ubicacion-content" style={{ marginTop: 30 }}>
                    <div className="row">
                        <div className="col-lg-15">
                                              

                            <h5>AGREGAR Y ACTUALIZAR PRODUCTOS</h5>
                            
                        </div>
                    </div>
                </div>
            </center>
            <Footer />
        </>
    );
};

export default AdministracionAA;
