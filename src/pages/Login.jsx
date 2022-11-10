import React, { useRef } from "react";
import "../styles/global.css";
import Nav from "../containers/Nav";
import Footer from "../containers/Footer";

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get("email"),
      password: formData.get("password"),
    }
    console.log(data)
  };

  return (
    <>
      <Nav />
      <div className="login">
        <div className="form-container">
          {/* {<img src={logo} alt="" />} */}

          <h1 className="title">
            Administrador <i className="fa-solid fa-user-tie"></i>
          </h1>
          <p className="subtitle">Bienvenido a la consola de administracion</p>

          <form action="/login" className="form" ref={form}>
            <label htmlFor="email" className="label">
              Usuario
            </label>
            <input
              type="text"
              name="email"
              placeholder="Usuario"
              className="input input"
            />

            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Escribe tu contraseña"
              className="input input"
            />

            <button
              onClick={handleSubmit}
              className="primary-button login-button"
            >
              Ingresarlo
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
