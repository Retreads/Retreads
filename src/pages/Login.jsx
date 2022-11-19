import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";
import Nav from "../containers/Nav";
import Footer from "../containers/Footer";
import axios from "axios";
import AddProduct from "../components/AddProduct";

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      email: formData.get("email"),
      name: formData.get("name"),
      password: formData.get("password"),
    };
    axios.post("http://localhost:9000/api/user", {
      email: data.email,
      name: data.name,
      password: data.password,
    });

    alert(`creado con exito el usuario ${data.name}`);
  };

  return (
    <>
      <Nav />

      <div className="login">
        <div className="form-container">
          {/* {<img src={logo} alt="" />} */}

          <h1 className="title ">
            Administrador <i className="fa-solid fa-user-tie"></i>
          </h1>
          <p className="subtitle">Bienvenido a la consola de administracion</p>

          <form className="form" ref={form}>
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="text"
              name="email"
              placeholder="escribe tu email"
              className="input input"
            />
            <label htmlFor="name" className="label">
              Usuario
            </label>
            <input
              type="text"
              name="name"
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
            <button className="primary-button login-button">Ingresar</button>

            <Link
              to="/home"
              type="reset"
              onClick={handleSubmit}
              className="btn btn-light"
            >
              {" "}
              Crear usuario
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
