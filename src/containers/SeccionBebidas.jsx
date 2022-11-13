import React, { useEffect, useState }from 'react';
import '../styles/Container.css'
import ItemProduct from '../components/ItemProduct';
import useGetProducts from '../hooks/useGetProducts';

const API = 'https://api.escuelajs.co/api/v1/products';
/* const API = 'https://dummyjson.com/products'; */ 
/* const API = 'https://data.mongodb-api.com/app/data-uhflx/endpoint/data/v1'; */
/* const API = 'https://dummyjson.com/products'; */

const SeccionBebidas = () => {
    const products = useGetProducts(API);

    return (
        <div className='cont-calentado cont-bebidas'> 
            <div>
                <h4>Bebidas</h4>
            </div>
            <div className='item-calentado'>  
                {products.map(product => (
                    <ItemProduct product={product} key={product.id} />  
                ))}                                  
            </div>
        </div>
    );
}

export default SeccionBebidas;