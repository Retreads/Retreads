import React from 'react';
import '../styles/Container.css'
import ItemProduct from '../components/ItemProduct';

const SeccionBebidas = () => {
    return (
        <div className='cont-calentado cont-bebidas'> 
            <div>
                <h4>Bebidas</h4>
            </div>
            <div className='item-calentado'>                              
                <ItemProduct/>
                <ItemProduct/>
                <ItemProduct/>
                <ItemProduct/>
                <ItemProduct/>
                <ItemProduct/>
                
            </div>
        </div>
    );
}

export default SeccionBebidas;