import express from "express"
import { signInRoute } from "./sign-in-router.js";
import { signUpRoute } from "./sign-up-route.js";

const Routes = express.Router();

Routes
    .use(signInRoute)
    .use(signUpRoute)

export default Routes;