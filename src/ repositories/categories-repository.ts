import { connection } from "../config/connection.js"

const getAllCategoriesRepository = async () => {
    return (await connection.query(`
        SELECT * FROM categories
    `)).rows;
};

const getProductByCategoryRepository = async (categoryId: number) => {
    return (await connection.query(`
    SELECT category."categoryId", category."productId" AS "id", products."title", 
    products."image", products."price", products."description" FROM products
    JOIN category ON category."productId" = products."id"
    JOIN categories ON category."categoryId" = categories."id"
    WHERE categories."id" = $1
    `,[categoryId]
    )).rows;
};

const postCategoryNameRepository = async(category: string)=> {
    return( await connection.query(`
    INSERT INTO categories (category) VALUES ($1)
    `,[category]));
}

const deleteCategoryNameRepository = async(category: string)=> {
    return( await connection.query(`
    DELETE FROM categories WHERE category=$1 
    `,[category]));
}

const categoriesRepository = {
    getAllCategoriesRepository,
    getProductByCategoryRepository,
    postCategoryNameRepository,
    deleteCategoryNameRepository
};

export { categoriesRepository };