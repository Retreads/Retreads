import React, { Component } from 'react'
import axios from 'axios'
import '../styles/reco.css'

const RecoveryPassword = () => {
    
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3> CRUD de Productos </h3>
                        <form /* onSubmit={this.onSubmit} */>
                            <div className="form-group">
                                <div className="container p-2">
                                <h6> Nombre: </h6>
                                <input type="text" className="form control"/*  value={this.state.name} onChange={this.onChangeName} *//>
                                </div>
                                <h6> Precio: </h6>
                                <div className="container p-2">
                                <input type="text" className="form control" /* value={this.state._price} onChange={this.onChangePrice}/ *//>
                                </div>
                                <h6> Descripción: </h6>
                                <div className="container p-2">
                                <input type="text" className="form control" /* value={this.state._description} onChange={this.onChangeDescription} *//>
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
                        {/* {
                            this.state.productos.map(producto => (
                                <li 
                                    className="list-group-item list-group-item-action" 
                                    key={producto.id} 
                                    onDoubleClick={()=>this.deleteUser(producto.id)} 
                                    onClick={()=>this.cargarDatosProducto(producto.id,producto.name,producto.price,producto.description)}>
                                    {producto.name}
                                </li>
                                )
                            )
                        } */}
                    </ul>
                </div>
            </div>
        )
    }


export default RecoveryPassword;