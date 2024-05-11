import { Router } from "express";
import { insertCartUser, listCartUsuer , listCartDetails, deleteCartUser} from "../controllers/cart-controller.js";

const cartUserRoute = Router();

cartUserRoute
    .get("/cart",listCartUsuer)
    .get("/cart/details",listCartDetails)
    .post("/cart", insertCartUser)
    .delete("/cart/:cartId", deleteCartUser);

export { cartUserRoute }