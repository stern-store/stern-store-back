import { connection } from "../config/connection.js";

const userIsRegisteredRepository = async (email: string) => {
    return (await connection.query(`SELECT * FROM users WHERE email = $1`, [email])).rows;
};
const insertUserRepository =async (name: string, email: string, cryptography: string) => {
    return (await connection.query(`INSERT INTO users (name, email, password) VALUES ($1,$2, $3)`,
    [name, email, cryptography]));
};
const signUpRepositories = {
    userIsRegisteredRepository,
    insertUserRepository
};

export { signUpRepositories }