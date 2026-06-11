import express, { Request, Response } from "express";

const app = express();

const PORT = process.env.API_PORT || 3001;
const ENVIRONMENT = process.env.ENVIRONMENT || "HOMOLOGACAO";

app.get("/healthy", (_: Request, res: Response) => {
	res.status(200).send({ status: "healthy" });
});

app.listen(PORT, () => {
	console.log(`Listening Server on PORT ${PORT} -- ${ENVIRONMENT}`);
});
