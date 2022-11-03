import React from 'react';
import '../styles/Container.css';
import BtnRecoger  from '../components/BtnRecoger';
import BtnEntregaDom from '../components/BtnEntregaDom';

const Carrito = () => {
    return (
        <>
        
            <div className="cont-carrito">
                <div className="title-btn">
                    <h3>Carrito</h3>
                    <div className="btn-cont">
                    <BtnRecoger/> 
                    <BtnEntregaDom/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Carrito;