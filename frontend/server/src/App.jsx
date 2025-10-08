import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RegistrarVehiculo from "./pages/RegistrarVehiculo";
import SalidaVehiculo from "./pages/SalidaVehiculo";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/">Registrar</Link>
        <Link to="/salida">Salida</Link>
      </nav>

      <Routes>
        <Route path="/" element={<RegistrarVehiculo />} />
        <Route path="/salida" element={<SalidaVehiculo />} />
      </Routes>
    </BrowserRouter>
  );
}
