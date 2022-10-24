import { Router, Request, Response } from "express";
import * as asyncHandler from "express-async-handler";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";

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
        const user = new User();
        user.firstName = "Timber";
        user.lastName = "Saw";
        user.age = 25;
        await AppDataSource.manager.save(user);
        // Saved a new user

        // getting all users from the database
        const users = await AppDataSource.manager.find(User);
        console.log(users);

        res.status(200).send({ message: "success", users: users });
    })
);
