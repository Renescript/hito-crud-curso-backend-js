import { UserModel } from "../models/user.model";
import { userService } from "./user.service"

const updateUserNameByEmail = async (email:string, newName: string) => {

    const user = await userService.getUserByEmail(email)

    if(!user){
        throw new Error("user not found")
    }

    if(!newName) {
        throw new Error("Name is required.");
      }

    const updatedUser = await UserModel.updateUserByEmail(email, newName);

    return updatedUser;

}

export const profileService = {
    updateUserNameByEmail
}