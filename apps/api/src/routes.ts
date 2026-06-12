import { Request, Response, Router } from "express";

const applicationRoutes = Router();

applicationRoutes.use("/healthy", (_: Request, res: Response) => {
	return res.status(200).send({ status: "healthy" });
});

export default applicationRoutes;
