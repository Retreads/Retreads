import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "../containers/Footer";
import Layout from "../containers/Layout";
import Login from "../pages/Login";
import RecoveryPassword from "../containers/RecoveryPassword";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ButtonComprar from "../components/ButtonComprar";
import AddProduct from "../components/AddProduct";
import Nav from "../containers/Nav";

import SeccionHamBgs from "../containers/SeccionHamBgs";
import "../styles/global.css";
import SeccionCalentado from "../containers/SeccionCalentado";

import Header from "../containers/Header";
import Admin1 from "../pages/Admin1";

import Ubicacion from "../pages/Ubicacion";
import Horarios from "../pages/Horarios";

import Administracion from "../pages/Administracion";
import AdministracionVR from "../pages/AdministracionVR";
import AdministracionAA from "../pages/AdministracionAA";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/recovery-password" component={RecoveryPassword} />
          <Route exact path="/admin" component={Admin1} />
          <Route exact path="/ubicacion" component={Ubicacion} />
          <Route exact path="/horarios" component={Horarios} />
          <Route exact path="/administracion" component={Administracion} />
          <Route exact path="/administracion1" component={AdministracionAA} />
          <Route exact path="/administracion2" component={AdministracionVR} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
