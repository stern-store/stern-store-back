import { connection } from "../config/connection.js";

const insertRatingByProductIdRepository = async (userId: number ,productId: number, rating: string) => {
    return (await connection.query(`
        INSERT INTO ratings ("userId", "productId", rating) VALUES ($1, $2, $3)`
        , [userId, productId, rating]
        ));    
};
const getSumRatingByProductIdRepository = async (productId: number) => {
    return (await connection.query(`
    SELECT SUM("rating") FROM ratings WHERE "productId" = $1
    `,[productId])).rows;
};

const getCountRatingByProductIdRepository = async (productId: number) => {
    return (await connection.query(`
    SELECT COUNT(*) FROM ratings WHERE "productId" = $1
    `,[productId])).rows;
}

const ratingsRepositories = {
    insertRatingByProductIdRepository,
    getSumRatingByProductIdRepository,
    getCountRatingByProductIdRepository
};

export { ratingsRepositories };