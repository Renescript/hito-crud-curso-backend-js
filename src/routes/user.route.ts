import { Router } from "express";
import { userController } from "../controllers/user.controller";

const router = Router();

// path: /api/v1/users en plural

//Leer todos los usuarios
router.get("/", userController.getUsers)

//Crear un único usuario

router.post("/register", userController.createUser)




export default router;