import { Router } from "express";
import { signIn } from "../controllers/sign-in-controller.js";

const signInRoute = Router();

signInRoute.post("/sign-in", signIn);

export  { signInRoute };
