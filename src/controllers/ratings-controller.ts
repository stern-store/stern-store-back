import { Request, Response } from "express"
import { httpStatus } from "../response/https.status.js";
import { ratingsService } from "../services/ratings-service.js";


const insertRatingProduct = async (req: Request, res: Response) => {
    const { productId } = req.params;
    const { rating } = req.body;
    
    if (!rating){
        return res.sendStatus(httpStatus.BAD_REQUEST);
    };
    try {
        const userId = res.locals?.userId;
        if(!userId){
            return res.sendStatus(httpStatus.UNAUTHORIZED);
        };
        await ratingsService.insertRatingByProductId(Number(userId), Number(productId), rating);
        return res.sendStatus(httpStatus.OK);
    } catch (error) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    };
};

const getRatingProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const sum = (await ratingsService.getSumRatingByProductId(Number(productId)))[0].sum;
        const count = (await ratingsService.getCountRatingByProductId(Number(productId)))[0].count;
        
        const  rating = Number(sum)/Number(count);
        
        return res.status(httpStatus.OK).send({rating, ratingNumber: count});
    } catch (error) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    };
};

export {
    insertRatingProduct,
    getRatingProduct
};