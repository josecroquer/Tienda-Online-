import React from 'react';
import ListaProductos from './components/ListaProductos';
import FormularioRegistro from './components/FormularioRegistro';

function App() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark mb-4">
        <div className="container">
          <span className="navbar-brand mb-0 h1">Evaluación Final - Tienda Online</span>
        </div>
      </nav>
      <ListaProductos />
      <hr className="my-5 container" />
      <FormularioRegistro />
    </div>
  );
}

export default App