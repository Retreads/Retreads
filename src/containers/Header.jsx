import React from 'react';
import '../styles/Container.css'
import imagen from '../asset/headeBG-mixtos.png'

const Header = () => {
    return (
        <div className="header">
            <img className='img-header' src={imagen} alt="" />
            <div className='cont-header'>
                <h5>Bienvenidos</h5>
                <p>
                    Gracias por visitarnos, ven y prueba nuestros nuevos platos ademas puedes encontrar los clasicos de la casa. <br /> <i>En Mixtos® estamos enfrentando el Coronavirus y cuidando de tu salud en nuestro restaurante.</i>
                </p>
            </div>
        </div>
    );
}

export default Header;