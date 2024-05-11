import { httpStatus } from "../response/https.status.js";
import { Request, Response } from "express";
import { cartService } from "../services/cart-service.js";

const listCartUsuer = async (req:Request, res: Response) => {
    const userId = res.locals.userId;
    
    try {
        const cartUser = await cartService.getCartUser(userId);

        res.status(httpStatus.OK).send(cartUser);
    } catch (error) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    };
}

const listCartDetails = async (req:Request, res: Response) => {
    const userId = res.locals.userId;
    try {
        const cartDetails = await cartService.getCartDetails(userId);
        
        res.status(httpStatus.OK).send(cartDetails);
    }catch (error) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    };
    
}

const insertCartUser = async (req:Request, res:Response) => {
    const userId = res.locals.userId;
    const { productId } = req.body;

    if(!productId){
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }

    try{
        await cartService.postCartUser(userId,Number(productId));
        res.sendStatus(httpStatus.CREATED);
    }catch (error) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    };
}

const deleteCartUser = async (req: Request, res: Response) => {
    const { cartId } = req.params;

    if(!cartId){
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
    
    try {
        const deletedItem = await cartService.deletItemCart(Number(cartId));
        return res.status(httpStatus.OK).send(deletedItem);

    }catch (error) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    };



}


export {
    listCartUsuer,
    listCartDetails,
    insertCartUser,
    deleteCartUser
};