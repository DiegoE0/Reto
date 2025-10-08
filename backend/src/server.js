import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/router.js"; // Asegúrate que exista este archivo

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// 👇 Todas las rutas del router estarán bajo /api
app.use("/api", router);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚗 Servidor corriendo en http://localhost:${PORT}`);
});
