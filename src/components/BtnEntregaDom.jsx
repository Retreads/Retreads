import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Componentes.css'


const BtnEntregaDom = () => {
    return (
        <div className="cont-domicilio">
            <div >
                <NavLink className="inter-recoger" to="/">Entrega a Domicilio</NavLink>
            </div>
        </div>
    );
}

export default BtnEntregaDom;