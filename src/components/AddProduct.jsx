import React from 'react';
import {react, useState } from 'react';
const AddProduct = () => {
    const [counter, setCounter] = useState(0)

    const handleClick1 = () => {
        // contador incrementa
        setCounter(counter + 1)
      }

    const handleClick2 = () => {
    // contador decrementa
    setCounter(counter - 1)
    }
    return (

        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '300%',
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '-15%',
          }}>
            contador de jonathan
            <div style={{
              fontSize: '120%',
              position: 'relative',
              top: '10vh',
            }}>
              {counter}
            </div>
            <div className="buttons">
              <button onClick={handleClick2}><i class="fa-solid fa-minus"></i></button>
              <button onClick={handleClick1}><i class="fa-solid fa-plus"></i></button>
            </div>
          </div>
        )
        {/* <><Button style={{
            fontSize: '60%',
            position: 'relative',
            top: '20vh',
            marginLeft: '5px',
            backgroundColor: 'red',
            borderRadius: '8%',
            color: 'white',
          }} onClick={handleClick1}>+</Button><Button onClick={handleClick2}>-</Button></> */}
    /* ); */
}

export default AddProduct;