import { Router } from "express";
import { signUp } from "../controllers/sign-up-controller.js";

const signUpRoute = Router();

signUpRoute.post("/sign-up", signUp);

export { signUpRoute };
