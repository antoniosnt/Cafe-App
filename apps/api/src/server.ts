import express, { NextFunction, Request, Response } from "express";

// Dotenv
import dotenv from "dotenv";

// Routes
import applicationRoutes from "@api/routes";

// Database
import connection from "@api/config/connections/database";

dotenv.config();

const app = express();

const HOST = process.env.API_HOST || "localhost";
const PORT = process.env.API_PORT || 3001;
const ENVIRONMENT = process.env.ENVIRONMENT || "HOMOLOGACAO";

// Middleware
app.use((req: Request, _: Response, next: NextFunction) => {
	console.log("[LOG] REQUEST RECEIVED ", req.url, req.headers["user-agent"]);
	next();
});

app.use("/api/v1", applicationRoutes);

class ApplicationServer {
	public async execute() {
		try {
			await connection.connect();

			if (ENVIRONMENT === "HOMOLOGACAO") {
				const result = await connection.query("SELECT VERSION()");
				console.log(result.rows[0].version);
			}

			app.listen(PORT, () => {
				console.log(
					`Listening Server on http://${HOST}:${PORT}/api/v1 -- ${ENVIRONMENT}`,
				);
			});
		} catch (error) {
			console.error("Startup error:", error);
			process.exit(1);
		}
	}
}

const server = new ApplicationServer();
server.execute();
