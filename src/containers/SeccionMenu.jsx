import React from 'react';
import '../styles/Container.css'
import ItemProduct from '../components/ItemProduct';

const SeccionMenu = () => {
    return (
        <div className='cont-calentado cont-menu-mixto'> 
            <div>
                <h4>Menu Mixto</h4>
            </div>
            <div className='item-calentado'>
                <ItemProduct/>
                <ItemProduct/>
                <ItemProduct/>
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

export default SeccionMenu;