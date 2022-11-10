import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/Componentes.css'

const BtnCancelar = () => {
    return (
        <div className="cont-recoger-tienda">
            <div >
                <NavLink className="inter-recoger" to="/">Cancelar</NavLink>
            </div>
        </div>
    );
}

export default BtnCancelar;