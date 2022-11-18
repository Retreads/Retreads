import React, { useEffect, useState } from "react";
import "../styles/Container.css";
import ItemProduct from "../components/ItemProduct";
import useGetProducts from "../hooks/useGetProducts";

/* const API = "https://api.escuelajs.co/api/v1/products?offset=0&limit=10"; */
const API = 'http://localhost:9000/api/producto';
const SeccionBebidas = () => {
  const products = useGetProducts(API);

  return (
    <div className="cont-calentado cont-bebidas">
      <div>
        <h4>Productos</h4>
      </div>
      <div className="item-calentado">
        {products.map((product) => (
          <ItemProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default SeccionBebidas;
