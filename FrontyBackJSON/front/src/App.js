import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation'
import VentasRealizadas from './components/VentasRealizadas'
// import Observaciones from './components/Observaciones'
import ActualizarProductos from './components/ActualizarProductos'
function App() {
  return (
    <Router>
      <Navigation/>
      <div className="container p-4">
        {/* <Route path="/" exact component={Observaciones} />   */}
        <Route path="/ventas" component={VentasRealizadas} />
        <Route path="/actualizar" component={ActualizarProductos} />
      </div>
    </Router>
  );
}

export default App;
