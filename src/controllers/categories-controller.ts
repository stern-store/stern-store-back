import { httpStatus } from "../response/https.status.js";
import { Request, Response } from "express";
import { categoriesService } from "../services/categories-service.js";

const listCategories = async (req: Request, res: Response) => {
    try {
        const categories = await categoriesService.getAllCategories();

        return res.status(httpStatus.OK).send(categories);
    } catch (error) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    };
};

const listSpecificCategory = async (req: Request, res: Response) => {
    const { categoryId } =  req.params;
    try {
        const productsCategories = await categoriesService.getProductByCategory(Number(categoryId));
        res.status(httpStatus.OK).send(productsCategories);
    } catch (error) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    };
};

const insterCategory = async (req: Request, res: Response) => {
    const { category } =  req.body;
    if (!category){
        return res.sendStatus(httpStatus.BAD_REQUEST);
    } 
    try {
        await categoriesService.postCategoryName(category);
        return res.sendStatus(httpStatus.CREATED);
    } catch (error) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    };
};

const deleteCategory= async (req: Request, res: Response) => {
    const { category } =  req.params;
    if (!category){
        return res.sendStatus(httpStatus.BAD_REQUEST);
    } 
    try {
        await categoriesService.deleteCategoryName(category);
        return res.sendStatus(httpStatus.OK);
    } catch (error) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    };
};

export {
    listCategories,
    listSpecificCategory,
    insterCategory,
    deleteCategory
};