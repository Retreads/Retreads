import React from 'react';
import '../styles/Container.css'
import ItemProduct from '../components/ItemProduct';
import Item4HamburguesaClasica from '../components/Item4HamburguesaClasica';
import Item5HamburguesaTodoterreno from '../components/Item5HamburguesaTodoterreno';
import Item6HamburguesaWrap from '../components/Item6HamburguesaWrap';


const SeccionHamBgs = () => {
    return (
        
        <div className='cont-calentado cont-hamburger'> 
            <div>
                <h4>Hamburguesas</h4>
            </div>
            <div className='item-calentado'>
                <Item4HamburguesaClasica />
                <Item5HamburguesaTodoterreno />
                <Item6HamburguesaWrap />               
            </div>
        </div>       
    );
}

export default SeccionHamBgs;