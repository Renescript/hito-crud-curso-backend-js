import { UserModel } from "../models/user.model"
import { nanoid } from "nanoid"
import { User } from "../interfaces/user.interface";
import bcrypt from "bcryptjs"
 
const getAllUsers = async () => {
    const users = await UserModel.getAllUsers();
    return users
}

const getUserByEmail = async (email:string) =>{
    const user = await UserModel.getByEmail(email);
    return user
}

const createUserWithEmailAndPassword = async (email: string, password: string) => {

    const user = await UserModel.getByEmail(email);

    if (user) {
        throw new Error('Email already taken');
    }
    
    const salt = await bcrypt.genSalt(10);

    const passwordHashed = await bcrypt.hash(password, salt);

    const newUser = await UserModel.create(email, passwordHashed);
    
    return newUser;
}

export const userService = {
    getAllUsers,
    getUserByEmail,
    createUserWithEmailAndPassword
}