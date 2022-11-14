import React, { Component } from 'react'
import axios from 'axios'

export default class AddProduct extends Component {
    state = {
        productos: [],
        title: '',
        editar: false,
        _id: '',
        price: '',
        description: ''
    }

    async componentDidMount() {
        this.getProductos();
        //console.log(rest);
        //console.log(this.state.productos);
    }

    getProductos = async () => {
        const rest = await axios.get('http://localhost:9000/api/producto', {"Access-Control-Allow-Origin" : "*"});
        this.setState({ productos: rest.data });
        console.log(rest)
    }

    onChangeName = (e) => {
        //console.log(e.target.value)
        this.setState({ title: e.target.value });
    }

    onChangePrice = (e) => {
        //console.log(e.target.value)
        this.setState({ price: e.target.value });
    }

    onChangeDescription = (e) => {
        //console.log(e.target.value)
        this.setState({ _description: e.target.value });
    }

    onClean = () => {
        this.setState({
            name: '',
            price: '',
            description: '',
            editar: false
        });
    }

    onSubmit = async (e) => {
        e.preventDefault();
        if (this.state.editar) {
            await axios.put('http://localhost:9000/api/producto/' + this.state._id, {
                title: this.state.title,
                price: this.state.price,
                description: this.state.description
            });
        }
        else {
            await axios.post('http://localhost:9000/api/producto', {
                title: this.state.title,
                price: this.state.price,
                description: this.state._description
            });
        }
        this.getProductos();
        this.onClean();
        //console.log(res)

    }

    deleteUser = async (id) => {
        //console.log(id);
        await axios.delete('http://localhost:9000/api/producto/' + id);
        this.getProductos();
    }

    cargarDatosProducto = async (id, name, price, description) => {
        //console.log(id+'-'+name+'-'+price+'-'+description);
        this.setState({
            _id: id,
            name: name,
            _price: price,
            _description: description,
            editar: true
        });
        console.log(this.state._id);
    }

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
                                    <input type="text" className="form control" value={this.state.name} onChange={this.onChangeName} />
                                </div>
                                <h6>&nbsp;&nbsp;Precio: </h6>
                                <div className="container p-2">
                                    <input type="text" className="form control" value={this.state._price} onChange={this.onChangePrice} />
                                </div>
                                <h6>&nbsp;&nbsp;Descripción: </h6>
                                <div className="container p-2">
                                    <textarea name="texto" rows="4" cols="20" className="form control" value={this.state._description} onChange={this.onChangeDescription} />
                                </div>
                            </div>
                            <div className="container p-4" >
                                {/* <button type="submit" className="btn btn-primarys">
                                    GUARDAR
                                </button> */}
                                <button
                                    className="btn btn-primarys1"
                                    type="submit"
                                >
                                    GUARDAR
                                </button>



                                {/* <button type="reset" className="btn btn-primary" onClick={() => this.onClean()}>
                                        LIMPIAR
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
                        {
                            this.state.productos.map(producto => (
                                <li
                                    className="list-group-item list-group-item-action"
                                    producto={producto} key={producto.id}
                                    onDoubleClick={() => this.deleteUser(producto.id)}
                                    onClick={() => this.cargarDatosProducto(producto.id, producto.title, producto.price, producto.description)}>
                                    {producto.title}
                                </li>
                            )
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}