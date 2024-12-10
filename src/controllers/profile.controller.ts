import { Request, Response } from "express";
import { profileService } from "../services/profile.service";

const updateUserName = async(req: Request, res: Response) => {
    try {
        const {email, name} = req.body;
        const updatedUser = await profileService.updateUserNameByEmail(email, name);
         res.status(200).json({updatedUser});
    } catch (error) {
        if(error instanceof Error){
            res.status(500).json({error: error.message})
        }
        res.status(500).json({error: "Error de server"})
    }
}

export const profileController = {
    updateUserName
}