import { connection } from "../config/connection.js";

const getCartUserRepository = async (userId: number) => {
    return (await connection.query(`
        SELECT * FROM cart WHERE "userId" = $1`,
        [userId])).rows;
};

const getCartDetailsRepository = async (userId: number) => {
    return (await connection.query(`
    SELECT cart."id" As "cartId", cart."userId", 
    cart."productId", products."title", products."image", 
    products."price", products."description" FROM cart 
    JOIN products ON cart."productId" = products."id"
    WHERE "userId" = $1`,   
        [userId])).rows;
};

const postCartUSerRepository = async (userId:number, productId:number) => {
    return (await connection.query(`
        INSERT INTO cart ("userId","productId") VALUES ($1,$2);`
        ,[userId,productId]));
};

const deletItemCartRepository = async (cartId: number) => {
    return (await connection.query(`
        DELETE FROM cart WHERE "id" = $1`,
        [cartId]));
}

const cartRepository = {
    getCartUserRepository,
    getCartDetailsRepository,
    postCartUSerRepository,
    deletItemCartRepository
};

export { cartRepository }