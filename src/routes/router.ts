import { Router } from "express";
import { authController } from "../controllers/authController";

//controllers
import { indexController } from "../controllers/indexController";

const router = Router();

router.use("/", indexController);
router.use("/auth", authController);

export default router;
