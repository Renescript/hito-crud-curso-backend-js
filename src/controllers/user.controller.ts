import { Request, Response } from "express"
import { userService } from "../services/user.service"

const getUsers = async(req: Request, res: Response) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users)
    } catch (error) {
        if(error instanceof Error){
            res.status(500).json({error: error.message})
        } else {
            res.status(500).json({error: "Error de server"})
        }
    }
}

const createUser = async(req: Request, res: Response) => {
    try {
        const {email, password} = req.body;
        const newUser = await userService.createUserWithEmailAndPassword(email, password);
        res.json('usuario registrado con exito')
    } catch (error) {
        if(error instanceof Error){
            res.status(500).json({error: error.message})
        }
        res.status(500).json({error: "Error de server"})
    }
}

export const userController = {
    getUsers, 
    createUser
}