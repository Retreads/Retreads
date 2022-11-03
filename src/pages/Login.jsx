import React from "react";
import '../styles/global.css';
import ButtonComprar from "../components/ButtonComprar";
import Nav from "../containers/Nav";
import Footer from "../containers/Footer";


const Login = () => {
    return (
        <>
        <Nav/>
        <div className="login">
            <div className="form-container">
                {/* {<img src={logo} alt="" />} */}

                <h1 className="title">Administrador <i className="fa-solid fa-user-tie"></i></h1>
                <p className="subtitle">Bienvenido a la consola de administracion</p>

                <form action="/administracion" className="form">

                    <label htmlFor="password" className="label">Usuario</label>
                    <input type="text" id="password" placeholder="Usuario" className="input input" /> 
                    

                    <label htmlFor="new-password" className="label">Password</label>
                    <input type="password" id="new-password" placeholder="Escribe tu contraseña" className="input input"/>
                    

                    <input type="submit" value="Ingresar" className="primary-button login-button" />
                </form>
              
            </div>
            
        </div>
        <Footer/>
        </>
    );

}

export default Login;