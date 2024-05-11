import express from "express"
import { signInRoute } from "./sign-in-route.js";
import { signUpRoute } from "./sign-up-route.js";
import { productsRoute} from "./products-route.js";
import { ratingsRoute } from "./ratings-route.js";
import { categoriesRoute } from "./categories-route.js";
import { cartUserRoute } from "./cart-route.js";
import { authentication } from "../middlewares/auth-middleware.js";
import { favoriteRoute } from "./favorite-route.js";


const Routes = express.Router();

Routes
    .use(signInRoute)
    .use(signUpRoute)
    .use(productsRoute)
    .use(ratingsRoute)
    .use(categoriesRoute)
    .use(authentication, favoriteRoute)
    .use(authentication, cartUserRoute);

export default Routes;