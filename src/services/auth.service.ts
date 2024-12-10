import { userService } from "./user.service"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const generateAccessToken = (
    email: string,
    uid: string,
) => {
    return jwt.sign({email, uid}, "secret",
        {
            expiresIn: "1h"
        }
    )
}

const loginWithEmailAndPassword = async (email:string, password: string) => {
    const user = await userService.getUserByEmail(email);

    if(!user){
        throw new Error("user not found")
    }

    const isValidPassword = await bcrypt.compare(password, user.password)
    if(!isValidPassword){
        throw new Error("incorrect password")
    }

    const token = generateAccessToken(user.email, user.id)
    return token;
}

const registerWithEmailAndPassword = async (email:string, password: string) => {

    const user = await userService.getUserByEmail(email);

    if(user){
        throw new Error("user already exists")
    }

    const newUser = await userService.createUserWithEmailAndPassword(email, password)

    const token = generateAccessToken(newUser.email, newUser.id)
    return token;
}

export const authService ={
    loginWithEmailAndPassword,
    registerWithEmailAndPassword
}