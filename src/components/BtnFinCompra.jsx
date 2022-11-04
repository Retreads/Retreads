import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/Componentes.css'


const BtnFinCompra = () => {
    return (
        <div className="cont-domicilio">
            <div >
                <NavLink className="inter-recoger" to="#">Finalizar compra</NavLink>
            </div>
        </div>
    );
}

export default BtnFinCompra;