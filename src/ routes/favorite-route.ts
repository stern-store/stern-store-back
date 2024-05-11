import { Router } from "express";
import { insertFavorite, listFavoriteById } from "../controllers/favorite-controller.js";

const favoriteRoute = Router();

favoriteRoute
    .get("/favorite/:productId", listFavoriteById)
    .put("/favorite", insertFavorite);

export { favoriteRoute };