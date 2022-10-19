import { Router } from "express";

//controllers
import { indexController } from "../controllers/indexController";

const router = Router();

router.use("/", indexController);

export default router;
