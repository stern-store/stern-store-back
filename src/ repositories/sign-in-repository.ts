import { connection } from "../config/connection.js";

const userDataComparateRepository = async (email: string) => {
    return (await connection.query(`
        SELECT * FROM users WHERE email = $1`, [email])).rows;
};

const insertSessionRepository = async (userId: number ,token: string) => {
    return (await connection.query(`
        INSERT INTO sessions ("userId", session) VALUES ($1, $2);`,
        [userId, token]));
};

const deleteSessionsRepository = async (userId: number) => {
    return( await connection.query(`
        DELETE FROM sessions WHERE "userId" = $1;`,
        [userId]));
};

const signInRepositories = {
    userDataComparateRepository,
    insertSessionRepository,
    deleteSessionsRepository
};

export { signInRepositories }
