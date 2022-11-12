import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../App.css";

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    
                    {/* <Link className="navbar-brand" to="/">Observaciones</Link> */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {/* <Link className="navbar-brand" to="/ventas">Ventas Realizadas</Link> */}
                                <Link to="/ventas">
                                    <button
                                        className="btn btn-warnings"
                                        type="button"                                                                               
                                    >
                                        Ventas Realizadas
                                    </button>
                                </Link>
                            </li>
                            <li className="nav-item">
                                {/* <Link className="nav-link" to="/actualizar">Actualizar Productos</Link> */}
                                <Link to="/actualizar">
                                    <button
                                        className="btn btn-warnings"
                                        type="button"
                                    >
                                        Actualizar Productos
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
