import { pool } from "../config/database";
import { User } from "../interfaces/user.interface";

const getAllUsers = async () => {
    const { rows } = await pool.query(`SELECT * from users`)
    return rows[0];
}

const getByEmail = async (email: string) => {
    const query = {
        text: `SELECT * FROM users WHERE email = $1`,
        values: [email]
    }
    const { rows } = await pool.query(query)

    return rows[0];
}

const create = async(email: string, password: string) => {

    const query = {
        text: `INSERT INTO users (email, password) 
        VALUES ($1, $2)`,
        values: [email, password]
    }
    const { rows } = await pool.query(query)

    return rows[0];
}

const updateUserByEmail = async(email: string, name: string) => {

    const query = {
        text: `UPDATE users 
                SET name = $1 
                WHERE email = $2
                RETURNING *; `,
        values: [name, email]
    }
    const { rows } = await pool.query(query)

    return rows[0];
}

export const UserModel = {
    getAllUsers,
    getByEmail,
    create,
    updateUserByEmail
}