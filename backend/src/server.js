import express from "express";
import cors from "cors";
import vehiculosRoutes from "./routes/vehiculos.js";

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/vehiculos", vehiculosRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor backend en puerto ${PORT}`));
