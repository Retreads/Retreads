import React from "react";
import '../styles/global.css'
import Footer from "../containers/Footer";
import Nav from "../containers/Nav";

const AdministracionVR = () => {
    return (
        <>
            <center>
                <Nav />
                <div className="container administracionvr-content ubicacion-content" style={{ marginTop: 30 }}>
                    <div className="row">
                        <div className="col-lg-15">
                            <h5>INFORME DE VENTAS REALIZADAS</h5>

                            
                        </div>
                    </div>
                </div>
            </center>
            <Footer />
        </>
    );
};

export default AdministracionVR;