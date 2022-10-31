import React from 'react';
import '../styles/Container.css'
import ItemProduct from '../components/ItemProduct';

const SeccionPatacon = () => {
    return (
        <div className='cont-calentado cont-patacon'> 
            <div>
                <h4>Patacones</h4>
            </div>
            <div className='item-calentado'>
                <ItemProduct/>
                <ItemProduct/>
                <ItemProduct/>
            </div>
        </div>
    );
}

export default SeccionPatacon;