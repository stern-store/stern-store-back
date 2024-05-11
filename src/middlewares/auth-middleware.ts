import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { httpStatus } from "../response/https.status.js";



const authentication = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let token = req.headers?.authorization;
        token = token.replace("Bearer ", "");

        const verifyToken = jwt.verify(token, process.env.JWT_TOKEN);
            
        res.locals.userId = verifyToken.userId;
        next();
    } catch(error) {
        return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
};

export { authentication };