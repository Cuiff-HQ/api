import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

import * as dotenv from "dotenv";
dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.POSTGRES_WRITER_HOST,
    port: 5432,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    synchronize: true,
    logging: process.env.ENV !== "production",
    entities: [User],
    migrations: [],
    subscribers: [],
});

/*
 */
