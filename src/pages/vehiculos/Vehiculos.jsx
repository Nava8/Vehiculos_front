import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Vehiculos() {
  const [modeloVehiculo, setModeloVehiculo] = useState('');
  const [fotoConductor, setFotoConductor] = useState(null);
  const [dniConductor, setDniConductor] = useState('');
  const [placaVehiculo, setPlacaVehiculo] = useState('');

  const handleModeloVehiculoChange = (e) => {
    setModeloVehiculo(e.target.value);
  };

  const handleFotoConductorChange = (e) => {
    const file = e.target.files[0];
    setFotoConductor(file);
  };

  const handleDniConductorChange = (e) => {
    setDniConductor(e.target.value);
  };

  const handlePlacaVehiculoChange = (e) => {
    setPlacaVehiculo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes hacer algo con los datos del vehículo, como enviarlos a una API o almacenarlos en el estado global de la aplicación
    console.log('Modelo del vehículo:', modeloVehiculo);
    console.log('Foto del conductor:', fotoConductor);
    console.log('DNI del conductor:', dniConductor);
    console.log('Placa del vehículo:', placaVehiculo);

    // Luego de procesar los datos, puedes restablecer el formulario
    setModeloVehiculo('');
    setFotoConductor(null);
    setDniConductor('');
    setPlacaVehiculo('');
  };

  return (
    <>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand ps-3" href="index.html">Start Bootstrap</a>
        <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!">
          <i className="fas fa-bars"></i>
        </button>
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <div className="input-group">
            <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
            <button className="btn btn-primary" id="btnNavbarSearch" type="button">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fas fa-user fa-fw"></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#!">Settings</a></li>
              <li><a className="dropdown-item" href="#!">Activity Log</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#!">Logout</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
              <div className="nav">
                <div className="sb-sidenav-menu-heading">MODULOS</div>
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                  <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                  Usuarios
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </a>
              </div>
            </div>
            <div className="sb-sidenav-footer">
              <div className="small">Logged in as:</div>
              Start Bootstrap
            </div>
          </nav>
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
                  <p className="mb-0">
                    Vehiculos
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="modeloVehiculo" className="form-label">Modelo del vehículo</label>
                      <input
                        type="text"
                        className="form-control"
                        id="modeloVehiculo"
                        value={modeloVehiculo}
                        onChange={handleModeloVehiculoChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="fotoConductor" className="form-label">Foto del conductor</label>
                      <input
                        type="file"
                        className="form-control"
                        id="fotoConductor"
                        accept="image/*"
                        onChange={handleFotoConductorChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="dniConductor" className="form-label">DNI del conductor</label>
                      <input
                        type="text"
                        className="form-control"
                        id="dniConductor"
                        value={dniConductor}
                        onChange={handleDniConductorChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="placaVehiculo" className="form-label">Placa del vehículo</label>
                      <input
                        type="text"
                        className="form-control"
                        id="placaVehiculo"
                        value={placaVehiculo}
                        onChange={handlePlacaVehiculoChange}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">Guardar</button>
                  </form>
                  {fotoConductor && (
                    <div className="mt-4">
                      <h5>Foto del conductor cargada:</h5>
                      <img src={URL.createObjectURL(fotoConductor)} alt="Foto del conductor" className="img-fluid" />
                    </div>
                  )}
                </div>
              </div>
              <div className="text-center">
                <Link to="/vehiculos-documentos" className="btn btn-primary">Siguiente</Link>
              </div>
            </div>
          </main>
          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">Copyright &copy; Your Website 2022</div>
                <div>
                  <a href="#">Privacy Policy</a>
                  &middot;
                  <a href="#">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Vehiculos;
