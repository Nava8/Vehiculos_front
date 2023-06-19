import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Vehiculos_Documentos() {
  const [documento1, setDocumento1] = useState('');
  const [fechaVencimiento1, setFechaVencimiento1] = useState(null);
  const [documento2, setDocumento2] = useState('');
  const [fechaVencimiento2, setFechaVencimiento2] = useState(null);

  const handleDocumento1Change = (e) => {
    setDocumento1(e.target.value);
  };

  const handleFechaVencimiento1Change = (date) => {
    setFechaVencimiento1(date);
  };

  const handleDocumento2Change = (e) => {
    setDocumento2(e.target.value);
  };

  const handleFechaVencimiento2Change = (date) => {
    setFechaVencimiento2(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes hacer algo con los datos de los documentos, como enviarlos a una API o almacenarlos en el estado global de la aplicación
    console.log('Documento 1:', documento1);
    console.log('Fecha de vencimiento 1:', fechaVencimiento1);
    console.log('Documento 2:', documento2);
    console.log('Fecha de vencimiento 2:', fechaVencimiento2);

    // Luego de procesar los datos, puedes restablecer el formulario
    setDocumento1('');
    setFechaVencimiento1(null);
    setDocumento2('');
    setFechaVencimiento2(null);
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
                    Vehiculos_Documentos
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="documento1" className="form-label">Documento 1</label>
                      <input
                        type="text"
                        className="form-control"
                        id="documento1"
                        value={documento1}
                        onChange={handleDocumento1Change}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="fechaVencimiento1" className="form-label">Fecha de Vencimiento 1</label>
                      <DatePicker
                        className="form-control"
                        id="fechaVencimiento1"
                        selected={fechaVencimiento1}
                        onChange={handleFechaVencimiento1Change}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Seleccione una fecha"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="documento2" className="form-label">Documento 2</label>
                      <input
                        type="text"
                        className="form-control"
                        id="documento2"
                        value={documento2}
                        onChange={handleDocumento2Change}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="fechaVencimiento2" className="form-label">Fecha de Vencimiento 2</label>
                      <DatePicker
                        className="form-control"
                        id="fechaVencimiento2"
                        selected={fechaVencimiento2}
                        onChange={handleFechaVencimiento2Change}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Seleccione una fecha"
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

export default Vehiculos_Documentos;
