import React from 'react';
import {react, useState } from 'react';
const AddProduct = () => {
 return (
  <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3> CRUD de Productos </h3>
                        <form /* onSubmit={this.onSubmit} */>
                            <div className="form-group">
                                <div className="container p-2">
                                <h6> Nombre: </h6>
                                <input type="text" className="form control" /* value={this.state.name} onChange={this.onChangeName} *//>
                                </div>
                                <h6> Precio: </h6>
                                <div className="container p-2">
                                <input type="text" className="form control" /* value={this.state._price} onChange={this.onChangePrice} *//>
                                </div>
                                <h6> Descripción: </h6>
                                <div className="container p-2">
                                <input type="text" className="form control" /* value={this.state._description} */ /* onChange={this.onChangeDescription} *//>
                                </div>
                            </div>
                            <div className="container p-4">
                            <button type="submit" className="btn btn-primary">
                                GUARDAR
                            </button>
                            <div className="container p-2">
                            <button type="reset" className="btn btn-primary" /* onClick={()=>this.onClean()} */>
                                LIMPIAR
                            </button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>


                
                <div className="col-md-8">
                    <ul className="list-group">
                        hola
                    </ul>
                </div>
            </div>
        )
}
    /* const [counter, setCounter] = useState(0)

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
        
      } */

export default AddProduct;