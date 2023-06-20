import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Vehiculos_Documentos() {
  const [seguro, setSeguro] = useState('');
  const [vehiculo, setVehiculo] = useState('');
  const [fechaVencimiento, setFechaVencimiento] = useState(null);
  const [documento, setDocumento] = useState(null);

  const handleSeguroChange = (e) => {
    setSeguro(e.target.value);
  };

  const handleVehiculoChange = (e) => {
    setVehiculo(e.target.value);
  };

  const handleFechaVencimientoChange = (date) => {
    setFechaVencimiento(date);
  };

  const handleDocumentoChange = (e) => {
    setDocumento(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes hacer algo con los datos del documento, como enviarlos a una API o almacenarlos en el estado global de la aplicación
    console.log('Nombre del Seguro:', seguro);
    console.log('Vehículo:', vehiculo);
    console.log('Fecha de Vencimiento:', fechaVencimiento);
    console.log('Documento:', documento);

    // Luego de procesar los datos, puedes restablecer el formulario
    setSeguro('');
    setVehiculo('');
    setFechaVencimiento(null);
    setDocumento(null);
  };

  return (
    <>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        {/* ... */}
      </nav>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          {/* ... */}
        </div>
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Static Navigation</h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item"><a href="index.html">Inicio</a></li>
                <li className="breadcrumb-item active">Vehiculos_Documentos</li>
              </ol>
              <div className="card mb-4">
                <div className="card-body">
                  <h2>Subir Documento</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="seguro" className="form-label">Nombre del Seguro</label>
                      <input
                        type="text"
                        className="form-control"
                        id="seguro"
                        value={seguro}
                        onChange={handleSeguroChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="vehiculo" className="form-label">Vehículo</label>
                      <input
                        type="text"
                        className="form-control"
                        id="vehiculo"
                        value={vehiculo}
                        onChange={handleVehiculoChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="fechaVencimiento" className="form-label">Fecha de Vencimiento</label>
                      <DatePicker
                        className="form-control"
                        id="fechaVencimiento"
                        selected={fechaVencimiento}
                        onChange={handleFechaVencimientoChange}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Seleccione una fecha"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="documento" className="form-label">Documento</label>
                      <input
                        type="file"
                        className="form-control"
                        id="documento"
                        accept=".pdf,.doc,.docx"
                        onChange={handleDocumentoChange}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">Guardar</button>
                  </form>
                </div>
              </div>
              <div className="text-center">
                <Link to="/vehiculos" className="btn btn-primary">Volver</Link>
              </div>
            </div>
          </main>
          <footer className="py-4 bg-light mt-auto">
            {/* ... */}
          </footer>
        </div>
      </div>
    </>
  );
}

export default Vehiculos_Documentos;
