import { Router, Request, Response } from "express";
import * as asyncHandler from "express-async-handler";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import { userService } from "../services/entityServices/userService";

export const indexController = Router();

indexController.get(
    "/hello-world",
    asyncHandler(async (req: Request, res: Response) => {
        res.status(200).send({ message: "Hello, World!" });
    })
);

indexController.get(
    "/test-user",
    asyncHandler(async (req: Request, res: Response) => {
        // Inserting a new user into the database
        await userService.createUser({
            firstName: "Johannes",
            lastName: "Krabbe",
            age: 20,
        });
        // Saved a new user

        // getting all users from the database
        const users = await AppDataSource.manager.find(User);

        res.status(200).send({ message: "success", users: users });
    })
);
