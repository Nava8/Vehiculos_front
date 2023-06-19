import Index from './pages/Index';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';
import Parentesco from './pages/apoderados/Parentesco';
import Vehiculos from './pages/vehiculos/Vehiculos';
import VehiculosDocumentos from './pages/vehiculos/Vehiculos_documentos'; 
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/parentesco" element={<Parentesco />} />
        <Route path="/vehiculos" element={<Vehiculos />} />
        <Route path="/vehiculos-documentos" element={<VehiculosDocumentos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
