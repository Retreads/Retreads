import React from "react";
import "../styles/global.css";
import Footer from "../containers/Footer";
import Nav from "../containers/Nav";

const Admin1 = () => {
  return (
    <>
      <Nav />
      <div className="admin-edit">
        
            <div className="logo-edit">
            <div>
            <i class="fa-regular fa-pen-to-square"></i>
                <i class="fa-solid fa-plus"></i>
            </div>

            <a href="#"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              type="button"
              className="btn btn-warning per-btn "
            >
              editar y/o agregar productos
            </a>
            
            </div>
        
          <div className="logo-edit">
            <div>
              <i class="fa-solid fa-eye"></i>
                           
            </div>
            <a href="#"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              type="button"
              className="btn btn-warning per-btn "
            >
              Ver ventas realizadas
            </a>
          </div>

      </div>
      <Footer />
    </>
  );
};

export default Admin1;
