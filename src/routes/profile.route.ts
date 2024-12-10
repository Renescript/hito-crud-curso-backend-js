import { Router } from "express";
import { profileController } from "../controllers/profile.controller";
import { verifyToken } from "../middleware/jwt.middleware";

const router = Router();

router.post("/update-name", verifyToken, profileController.updateUserName);

export default router;