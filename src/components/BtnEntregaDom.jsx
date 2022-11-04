import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Componentes.css'


const BtnEntregaDom = () => {
    return (
        <div className="cont-domicilio">
            <div >
                <NavLink className="inter-recoger" to="/entregadomicilio">Entrega a Domicilio</NavLink>
            </div>
        </div>
    );
}

export default BtnEntregaDom;