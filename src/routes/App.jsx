import React from "react";
import { BrowserRouter , Switch , Route } from "react-router-dom";
import Footer from "../containers/Footer";
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import RecoveryPassword from "../containers/RecoveryPassword";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ButtonComprar from "../components/ButtonComprar";
import AddProduct from "../components/AddProduct";
import Nav from "../containers/Nav";
import "../styles/global.css";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/recovery-password"
              component={RecoveryPassword}/>
              <Route exact path="/footer" component={Footer} />
              <Route exact path="/button" component={ButtonComprar} />
              <Route exact path="/add-product" component={AddProduct}/>
              <Route exact path="/nav" component={Nav}/>
            <Route path="*" component={NotFound} />
          </Switch>
      </Layout> 
    </BrowserRouter>
  );
};

export default App;
