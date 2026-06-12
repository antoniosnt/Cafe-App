import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const connection = new Pool({
	user: process.env.DATABASE_USER || "root",
	password: process.env.DATABASE_PASSWORD || "root",
	host: process.env.DATABASE_HOST || "db",
	port: Number(process.env.DATABASE_PORT) || 5432,
	database: process.env.DATABASE_NAME || "ecommerce-cafe",
});

export default connection;
