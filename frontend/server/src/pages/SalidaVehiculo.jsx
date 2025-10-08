import { useState } from "react";
import { registrarSalida } from "../services/api";

export default function SalidaVehiculo() {
  const [placa, setPlaca] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSalida = async (e) => {
    e.preventDefault();
    const res = await registrarSalida(placa);
    if (res.id) {
      setMensaje(`🚗 Vehículo con placa ${placa} salió correctamente.`);
      setPlaca("");
    } else {
      setMensaje("❌ Vehículo no encontrado o ya salió.");
    }
  };

  return (
    <div className="container">
      <h1>Registrar Salida</h1>
      <form onSubmit={handleSalida}>
        <input placeholder="Placa" value={placa} onChange={e => setPlaca(e.target.value)} required />
        <button type="submit">Registrar Salida</button>
      </form>
      <p>{mensaje}</p>
    </div>
  );
}

/*Reto Ganado*/