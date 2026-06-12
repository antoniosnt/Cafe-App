import { Request, Response, Router } from "express";

const applicationRoutes = Router();

applicationRoutes.get("/", (_: Request, res: Response) => {
	return res.status(200).send("<h1>CAFE APP API V1</h1>");
});

applicationRoutes.get("/healthy", (_: Request, res: Response) => {
	return res.status(200).send({ status: "healthy" });
});

applicationRoutes.use((_req: Request, res: Response) => {
	return res.status(404).send({ message: "not found" });
});

export default applicationRoutes;
