// src/routes/router.js
import express from "express";
import { pool } from "../db.js";

const router = express.Router();

// 🔹 Registrar un nuevo vehículo
router.post("/vehiculos/registrar", async (req, res) => {
  try {
    const { placa, propietario, tipo_vehiculo } = req.body;

    const result = await pool.query(
      `INSERT INTO vehiculos (placa, propietario, tipo_vehiculo, estado, hora_entrada)
       VALUES ($1, $2, $3, 'EN PARQUEO', NOW())
       RETURNING *`,
      [placa, propietario, tipo_vehiculo]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error("❌ Error al registrar vehículo:", error);
    res.status(500).json({ error: "Error al registrar vehículo" });
  }
});

// 🔹 Registrar salida de vehículo por placa
router.put("/vehiculos/salida/:placa", async (req, res) => {
  try {
    const { placa } = req.params;

    const result = await pool.query(
      `UPDATE vehiculos
       SET hora_salida = NOW(),
           estado = 'FUERA DEL PARQUEO'
       WHERE placa = $1 AND estado = 'EN PARQUEO'
       RETURNING *`,
      [placa]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Vehículo no encontrado o ya salió" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("❌ Error al registrar salida:", error);
    res.status(500).json({ error: "Error al registrar salida" });
  }
});

export default router;
