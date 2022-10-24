import * as express from "express";

import router from "./routes/router";

import * as cors from "cors";
class App {
    public app: express.Application;

    constructor() {
        this.app = express();

        this.app.use(
            cors({ credentials: true, origin: process.env.CLIENT_URL })
        );
        this.app.use(express.json());

        this.app.use("/", router);
    }
}

export default new App().app;
