import React, { Component } from "react";
import axios from "axios";
import("../styles/addproduct.css");

export default class AddProduct extends Component {
  state = {
    productos: [],
    title: "",
    editar: false,
    _id: "",
    price: "",
    description: "",
    images: []
  };

  async componentDidMount() {
    this.getProductos();
    //console.log(rest);
    //console.log(this.state.productos);
  }

  getProductos = async () => {
    const rest = await axios.get("http://localhost:9000/api/producto", {
      "Access-Control-Allow-Origin": "*",
    });
    this.setState({ productos: rest.data });
    console.log(rest);
  };

  onChangeName = (e) => {
    //console.log(e.target.value)
    this.setState({ title: e.target.value });
  };

  onChangeImages = (e) => {
    //console.log(e.target.value)
    this.setState({ images: e.target.value });
  };

  onChangePrice = (e) => {
    //console.log(e.target.value)
    this.setState({ price: e.target.value });
  };

  onChangeDescription = (e) => {
    //console.log(e.target.value)
    this.setState({ description: e.target.value });
  };

  onClean = () => {
    this.setState({
      _id: "",
      title: "",
      price: "",
      description: "",
      images : [],
      editar: false,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    if (this.state.editar) {
      await axios.put("http://localhost:9000/api/producto/" + this.state._id, {
        title: this.state.title,
        price: this.state.price,
        description: this.state.description,
        images : this.state.images[0]
      });
    } else {
      await axios.post("http://localhost:9000/api/producto", {
        title: this.state.title,
        price: this.state.price,
        description: this.state.description,
        images : this.state.images[0]
      });
    }
    this.getProductos();
    this.onClean();
    /*  console.log(this.state.editar);
    console.log('post') */
  };

  deleteUser = async (id) => {
    //console.log(id);
    await axios.delete("http://localhost:9000/api/producto/" + id);
    this.getProductos();
  };

  cargarDatosProducto = async (id, title, price, description, images) => {
    //console.log(id+'-'+name+'-'+price+'-'+description);
    this.setState({
      _id: id,
      title: title,
      price: price,
      description: description,
      editar: true,
      images: [0]
    });
    console.log(this.state.editar);
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="card card-body">
            <h3> CRUD de Productos </h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <div className="container p-2">
                  <h6> Nombre: </h6>
                  <input
                    name="title"
                    type="text"
                    className="form control"
                    value={this.state.title}
                    onChange={this.onChangeName}
                  />
                </div>
                <h6>&nbsp;&nbsp;Precio: </h6>
                <div className="container p-2">
                  <input
                    name="price"
                    type="text"
                    className="form control"
                    value={this.state.price}
                    onChange={this.onChangePrice}
                  />
                </div>
                <h6>&nbsp;&nbsp;Descripción: </h6>
                <div className="container p-2">
                  <textarea
                    name="description"
                    rows="4"
                    cols="20"
                    className="form control"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                  />
                </div>
                <h6>&nbsp;&nbsp;Imagen: </h6>
                <div className="container p-2">
                  <input
                    name="images"
                    rows="4"
                    cols="20"
                    className="form control"
                    value={this.state.images[0]}
                    onChange={this.onChangeImages}
                  />
                </div>
              </div>
              <div className="container p-4">
                <button className="btn btn-primarys1" type="submit">
                  GUARDAR
                </button>
                {/* <button className="btn btn-primarys1" onClick={()=> this.onSubmit()}>
                  editar
                </button> */}

                <button
                  className="btn btn-primarys2"
                  type="reset"
                  onClick={() => this.onClean()}
                >
                  LIMPIAR
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            {this.state.productos.map((producto) => (
              <li
                className="list-group-item list-group-item-action"
                key={`k ${producto._id}`}
                producto={producto}
                onClick={() =>
                  this.cargarDatosProducto(
                    producto.id,
                    producto.title,
                    producto.price,
                    producto.description,
                    producto.images[0]
                  )
                }
              >
                {producto._id}
                {producto.title}
                {producto.price}
                {producto.description}
                {producto.images[0]}
                <i
                  className="fa-solid fa-trash"
                  onClick={() => this.deleteUser(producto._id)}
                ></i>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
