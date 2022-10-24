import { Router, Request, Response } from "express";
import * as asyncHandler from "express-async-handler";
import loginMiddleware from "../middleware/auth/login";

export const authController = Router();

authController.use("/login", loginMiddleware);
authController.post(
    "/login",
    asyncHandler(async (req: Request, res: Response) => {
        const { emailAddress, password } = req.body;

        res.status(200).send({ token: "EXAMPLE_TOKEN" });
    })
);
