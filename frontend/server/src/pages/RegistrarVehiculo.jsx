import { useState } from "react";
import { registrarVehiculo } from "../services/api";

export default function RegistrarVehiculo() {
  const [placa, setPlaca] = useState("");
  const [propietario, setPropietario] = useState("");
  const [tipoVehiculo, setTipoVehiculo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { placa, propietario, tipo_vehiculo: tipoVehiculo };
    const res = await registrarVehiculo(data);
    if (res.id) {
      setMensaje("✅ Vehículo registrado con éxito");
      setPlaca(""); setPropietario(""); setTipoVehiculo("");
    } else {
      setMensaje("❌ Error al registrar");
    }
  };

  return (
    <div className="container">
      <h1>Registro de Vehículos</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Placa" value={placa} onChange={e => setPlaca(e.target.value)} required />
        <input placeholder="Propietario" value={propietario} onChange={e => setPropietario(e.target.value)} required />
        <select value={tipoVehiculo} onChange={e => setTipoVehiculo(e.target.value)} required>
          <option value="">Tipo de Vehículo</option>
          <option value="Carro">Carro</option>
          <option value="Moto">Moto</option>
        </select>
        <button type="submit">Registrar</button>
      </form>
      <p>{mensaje}</p>
    </div>
  );
}

/*Reto*/