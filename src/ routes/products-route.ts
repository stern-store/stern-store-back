import { Router } from "express";
import { deleteProducts, insertProducts, listAllProducts, productsDetails, searchProducts } from "../controllers/products-controller.js";
const productsRoute = Router();

productsRoute
    .get("/products" ,listAllProducts)
    .get("/product/:productId", productsDetails)
    .get("/products/search/:search", searchProducts)
    .post("/products", insertProducts)
    .delete("/products/:productId", deleteProducts);

export { productsRoute };   