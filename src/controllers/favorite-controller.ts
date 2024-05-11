import { httpStatus } from "../response/https.status.js";
import { Request, Response } from "express";
import { favoriteService } from "../services/favorite-service.js";

const listFavoriteById = async (req: Request, res: Response) => {
    const userId = res.locals.userId;
    const { productId } = req.params;
    if(!productId){
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
    try {
        const favorites = await favoriteService.getFavoriteById(userId,Number(productId));
        return res.status(httpStatus.OK).send(favorites);
    } catch (error) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    };
};

const insertFavorite = async(req:Request, res: Response) =>{
    const userId = res.locals.userId;
    const { productId } = req.body;
    if(!productId){
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
    try {
        const favorites = await favoriteService.postFavorite(userId,Number(productId));
        return res.status(httpStatus.OK).send(favorites);
    } catch (error) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    };
};

export {
    listFavoriteById,
    insertFavorite
};