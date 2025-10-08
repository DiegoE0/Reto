const API_URL = "http://localhost:5000/api/vehiculos";

// Registrar vehículo nuevo
export async function registrarVehiculo(data) {
  const res = await fetch(`${API_URL}/registrar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

// Registrar salida de vehículo
export async function registrarSalida(placa) {
  const res = await fetch(`${API_URL}/salida/${placa}`, {
    method: "PUT",
  });
  return res.json();
}
