import { useState, useEffect } from "react";
export const AddProduct = () => {
  const [dataProducto, setDataProducto] = useState([]);

  useEffect(()=>{
    getData()
  },[])

  function getData() {
    fetch("http://localhost:9000/api/producto", {
      'mode': 'no-cors',
      'headers': {
          'Access-Control-Allow-Origin': '*',
      }
  })
      .then((res) => res.json())
      .then((res) => {
        return setDataProducto(res);
      })
      .catch((err) => console.log(err));
  }

  return(
    <div className="container mt-5">
      <h2>lista</h2>
      <table>
        <thead>
        <tr>
          <td>id</td>
          <td>title</td>
        </tr>
        </thead>
        <tbody>
          {dataProducto.map((producto)=>(
            <tr>key={producto.id}</tr>
          ))}
        </tbody>
      </table>

    </div>
  )
  
};

export default AddProduct;