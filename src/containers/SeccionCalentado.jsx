import React from 'react';
import ItemProduct from '../components/ItemProduct';
import '../styles/Container.css'

const SeccionCalentado = () => {
    return (
        <div className='cont-calentado'>
            <div>
                <h4>Calentao</h4>
            </div>
            <div className='item-calentado'>
                <ItemProduct/>
                <ItemProduct/>
                <ItemProduct/>
                <ItemProduct/>
                <ItemProduct/>
            </div>

        </div>
    );
}

export default SeccionCalentado;