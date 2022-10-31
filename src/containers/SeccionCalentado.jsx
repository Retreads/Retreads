import React from 'react';
import ItemProduct from '../components/ItemProduct';
import Item1CalentaoValluno from '../components/Item1CalentaoValluno';
import '../styles/Container.css'

const SeccionCalentado = () => {
    return (
        <div className='cont-calentado'>
            <div>
                <h4>Calentao's</h4>
            </div>
            <div className='item-calentado'>
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
            </div>

        </div>
    );
}

export default SeccionCalentado;