import { AppDataSource } from "./data-source";

import * as dotenv from "dotenv";
dotenv.config();

AppDataSource.initialize()
    .then(async () => {
        const app = require("./app").default;

        const PORT = process.env.PORT || 3001;
        app.listen(PORT, () => {
            console.info(`Running on port ${PORT}`);
        });
        return app;
    })
    .catch((error) => console.log(error));
