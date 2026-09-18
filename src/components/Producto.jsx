import React from 'react';

const Producto = ({ producto, onAgregar }) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">Precio: ${producto.precio.toLocaleString('es-CL')}</p>
        <button className="btn btn-primary" onClick={() => onAgregar(producto)}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default Producto;