import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Componentes.css'

const BtnContinue = () => {
    return (
        <div className="cont-continue">
            <div >
                <NavLink className="inter-recoger" to="/">Continuar</NavLink>
            </div>
        </div>
    );
}

export default BtnContinue;