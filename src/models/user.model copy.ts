import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { User } from "../interfaces/user.interface";

//Esto devuelve la ruta relativa, osea src
const __dirname = import.meta.dirname

const pathFile = path.resolve(__dirname, "../../data/users.json")

const readUsers = async () => {
    const usersJSON = await readFile(pathFile, "utf-8");
    const users = JSON.parse(usersJSON) as User[];
    return users;
}

const writeUser = async (users: User[]) =>{
    const usersJSON = JSON.stringify(users, null, 2)
    return await writeFile(pathFile, usersJSON)
}

const updateUserByEmail = async (email: string, name: string) =>{
    const users = await readUsers();

    // Buscar el usuario por el email
    const userIndex = users.findIndex((user) => user.email === email);
  
    // Actualizar el nombre del usuario
    users[userIndex].name = name;
  
    // Guardar los usuarios actualizados en el archivo JSON
    await writeUser(users);

    // Devolver el usuario actualizado
    return users[userIndex];
  };

  

export const UserModel = {
    readUsers,
    writeUser,
    updateUserByEmail
}