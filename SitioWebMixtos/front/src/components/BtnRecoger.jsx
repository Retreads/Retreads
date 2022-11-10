import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Componentes.css'

const BtnRecoger = () => {
    return (
        <div className="cont-recoger-tienda">
            <div >
                <NavLink className="inter-recoger" to="/recoge-en-tienda">Recoger en tienda</NavLink>
            </div>
        </div>
    );
}

export default BtnRecoger;