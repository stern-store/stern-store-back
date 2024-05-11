import { Router } from "express";
import { authentication } from "../middlewares/auth-middleware.js";
import { insertRatingProduct, getRatingProduct } from "../controllers/ratings-controller.js";

const ratingsRoute = Router();

ratingsRoute
    .post("/rating/:productId", authentication ,insertRatingProduct)
    .get("/rating/:productId",getRatingProduct);

export { ratingsRoute };