import { Router } from "express";
import { deleteCategory, insterCategory, listCategories, listSpecificCategory } from "../controllers/categories-controller.js";

const categoriesRoute = Router();

categoriesRoute
    .get("/categories", listCategories)
    .get("/category/:categoryId", listSpecificCategory)
    .post("/category", insterCategory)
    .delete("/category/:category",deleteCategory);

export { categoriesRoute };