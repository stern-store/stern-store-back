import { favoriteRepository } from "../ repositories/favorite-repository.js"

const getFavoriteById = async (userId: number, productId: number)=> {
    const favorite = await favoriteRepository.getFavoriteByIdRepository(userId,productId);    
    return favorite;
}
const postFavorite = async (userId: number, productId: number)=> {
    const favorites =  await favoriteRepository.getFavoriteByIdRepository(userId,productId);    
    if(favorites.length==0){
        await favoriteRepository.postFavoriteRepository(userId, productId);
    }else{
        const favorite = !(favorites[0].favorite);
        await favoriteRepository.updateFavoriteRepository(userId, productId, Boolean(favorite));
    }
    const newFavorite =await favoriteRepository.getFavoriteByIdRepository(userId,productId);    
    return newFavorite;
}   

const favoriteService = {
    getFavoriteById,
    postFavorite
}
export {favoriteService}