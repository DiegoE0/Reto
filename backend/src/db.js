import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const { Pool } = pg;

// 🧠 Verificamos qué se está leyendo del .env
console.log("🔍 ENV:");
console.log("PGUSER:", process.env.PGUSER);
console.log("PGPASSWORD:", process.env.PGPASSWORD);
console.log("PGHOST:", process.env.PGHOST);
console.log("PGDATABASE:", process.env.PGDATABASE);
console.log("PGPORT:", process.env.PGPORT);

export const pool = new Pool({
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  user: process.env.PGUSER,
  password: String(process.env.PGPASSWORD), // fuerza string
  database: process.env.PGDATABASE,
});

pool.connect()
  .then(() => console.log("✅ Conectado a PostgreSQL"))
  .catch((err) => console.error("❌ Error de conexión a la base de datos:", err));
