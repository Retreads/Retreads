import React from "react";
import '../styles/global.css'

const Login = () => {

    return (
        <div className="login">
            <div className="form-container">
                <img src="" alt="" />

                <h1 className="title">Administrador</h1>
                <p className="subtitle">Bienvenido a la consola de administracion</p>

                <form action="/" className="form">

                    <label htmlFor="password" className="label">Usuario</label>
                    <input type="password" id="password" placeholder="Usuario" className="input input" /> 
                    

                    <label htmlFor="new-password" className="label">Password</label>
                    <input type="password" id="new-password" placeholder="Escribe tu contraseña" className="input input"/>
                    

                    <input type="submit" value="Ingresar" className="primary-button login-button" />
                </form>
            </div>
        </div>
    );

}

export default Login;