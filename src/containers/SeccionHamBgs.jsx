import React from 'react';
import '../styles/Container.css'
import ItemProduct from '../components/ItemProduct';
const SeccionHamBgs = () => {
    return (
        
        <div className='cont-calentado cont-hamburger'> 
            <div>
                <h4>Hamburguesas</h4>
            </div>
            <div className='item-calentado'>
                <ItemProduct/>
                <ItemProduct/>
                <ItemProduct/>
                <ItemProduct/>
                
            </div>
        </div>
       
    );
}

export default SeccionHamBgs;