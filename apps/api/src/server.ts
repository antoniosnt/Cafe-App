import express, { NextFunction, Request, Response } from "express";

// Routes
import applicationRoutes from "@api/src/routes";

const app = express();

const PORT = process.env.API_PORT || 3001;
const ENVIRONMENT = process.env.ENVIRONMENT || "HOMOLOGACAO";

// Middleware
app.use((req: Request, _: Response, next: NextFunction) => {
	console.log("[LOG] REQUEST RECEIVED ", req.url, req.headers["user-agent"]);
	next();
});

app.use("/api/v1", applicationRoutes);

app.listen(PORT, () => {
	console.log(`Listening Server on PORT ${PORT} -- ${ENVIRONMENT}`);
});
