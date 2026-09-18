import React, { Component } from 'react';
import Producto from './Producto';

class ListaProductos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carrito: [],
      productos: [
        { id: 1, nombre: 'Zapatillas de Mountain Bike', precio: 85000 },
        { id: 2, nombre: 'Perfume Afnan 9 PM', precio: 45000 },
        { id: 3, nombre: 'Casco Trek', precio: 65000 }
      ]
    };
  }

  agregarAlCarrito = (producto) => {
    this.setState((prevState) => ({
      carrito: [...prevState.carrito, producto]
    }));
  };

  render() {
    return (
      <div className="container mt-4">
        <h3>Catálogo de Productos</h3>
        <div className="alert alert-success">
          Productos en el carrito: <strong>{this.state.carrito.length}</strong>
        </div>
        <div className="row">
          {this.state.productos.map((prod) => (
            <div className="col-md-4" key={prod.id}>
              <Producto producto={prod} onAgregar={this.agregarAlCarrito} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ListaProductos;