import { connection } from "../config/connection.js"

const getAllProductsRepository = async () => {
    return (await connection.query(`
        SELECT * FROM products;
        `)).rows;
};

const getProductByIdRepository = async (productId:number) => {
    return (await connection.query(`
        SELECT products."id" AS "productId", products."title", products."image", 
        products."price", products."description",
        details."id" AS "detailsId", details."color", details."dimentions", details."weight",
        stock."id" AS "stockId", stock."quantity"
        FROM products 
        JOIN details ON details."productId"= products.id
        JOIN stock ON stock."productId"= products.id 
        WHERE products.id = $1
        `, [productId]
        )).rows;
};

const getAllRatingRepository = async () => {
    // return (await connection)
};

const getProductsSearchRepository = async (search:string)=>{
    return (await connection.query(`
    SELECT * FROM products WHERE title ILIKE $1
    `,[`%${search}%`])).rows;
};

const insertProductRepository = async (title: string,price: string,
     description: string, image:string)=> {
    return (await connection.query(`
    INSERT INTO products (title, price, description, image)
    VALUES ($1,$2,$3,$4) RETURNING id;
    `,[title,price,description,image] )).rows;
};


const insertDetailsRepository= async (productId:number ,color: string,
    dimentions: string ,weight:string )=>{

    return (await connection.query(`
    INSERT INTO details ("productId", color, dimentions, weight) 
    VALUES ($1, $2, $3, $4) RETURNING id;
    `, [productId, color, dimentions, weight])).rows;
};

const insertStockRepository = async (productId:number ,stock: number)=>{
    return (await connection.query(`
    INSERT INTO stock ("productId", quantity) 
    VALUES ($1, $2);
    `, [productId, stock])).rows;
};
const deleteDetailsRepository = async (detailsId:number)=>{
    return (await connection.query(`
    DELETE FROM details WHERE id =$1
    `, [detailsId])).rows;
};
const deleteProductRepository = async (productId:number)=>{
    return (await connection.query(`
    DELETE FROM products WHERE id =$1
    `, [productId])).rows;
};
const findCategoryByNameRepository = async (categories:string)=>{
    return (await connection.query(`
    SELECT * FROM categories WHERE category=$1
    `, [categories])).rows;
};
const insertCategoryRepository = async (productId:number, categoryId:number) => {
    
    const promessa = (await connection.query(`
    INSERT INTO category ("productId","categoryId")
    VALUES ($1, $2) RETURNING id;
    `, [productId, ,categoryId])).rows;
    
    return 
}

const deleteCategoryByIdRepository = async (categoryProductId: number) => {
    return (await connection.query(`
    DELETE FROM category WHERE id =$1
    `, [categoryProductId])).rows;
}

const productsRepositories = {
    getAllProductsRepository,
    getProductByIdRepository,
    getAllRatingRepository,
    getProductsSearchRepository,
    insertProductRepository,
    insertDetailsRepository,
    insertStockRepository,
    deleteDetailsRepository,
    deleteProductRepository,
    findCategoryByNameRepository,
    insertCategoryRepository,
    deleteCategoryByIdRepository
    
};

export { productsRepositories };