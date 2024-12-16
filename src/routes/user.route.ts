import { Router } from "express";
import { userController } from "../controllers/user.controller";
import { verifyToken } from "../middleware/jwt.middleware";

const router = Router();

// path: /api/v1/users en plural

//Leer todos los usuarios
router.get("/", userController.getUsers)


//Get de prueba con verificador para test mock
router.get("/:email", verifyToken, userController.getUserByEmailController)

//Crear un único usuario

router.post("/register", userController.createUser)




export default router;