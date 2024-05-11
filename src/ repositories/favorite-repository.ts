import { connection } from "../config/connection.js";

const getFavoriteByIdRepository = async(userId: number, productId: number) =>{
    return (await connection.query(`
    SELECT * FROM favorite WHERE "userId" = $1 
    AND "productId"=$2
    `,[userId,productId])).rows;
}

const getFavoritesByUser = async(userId: number)=>{
    return (await connection.query(`
    SELECT * FROM favorite WHERE "userId" = $1
    `, [userId])).rows;
}
const postFavoriteRepository = async(userId: number, productId: number) => {
    return (await connection.query(`
    INSERT INTO favorite ("userId", "productId","favorite") VALUES ($1,$2,$3);
    `,[userId,productId,true]));
}

const updateFavoriteRepository = async(userId: number, productId: number, favorite:boolean)=> {
    return ( await connection.query(` 
    UPDATE favorite SET favorite = $1
    WHERE "userId" = $2 AND "productId" = $3
    `,[favorite,userId,productId]));
}


const favoriteRepository = {
    getFavoriteByIdRepository,
    getFavoritesByUser,
    postFavoriteRepository,
    updateFavoriteRepository
}
export { favoriteRepository }