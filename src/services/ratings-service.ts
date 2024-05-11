import { ratingsRepositories } from "../ repositories/ratings-repository.js";

const insertRatingByProductId = async (userId: number, productId: number, rating: string) => {
    return await ratingsRepositories.insertRatingByProductIdRepository(userId, productId, rating);
};
const getSumRatingByProductId = async (productId: number) => {
    return await ratingsRepositories.getSumRatingByProductIdRepository(productId);  
}; 
const getCountRatingByProductId = async (productId: number) => {
    return await ratingsRepositories.getCountRatingByProductIdRepository(productId);   
};

const ratingsService = {
    insertRatingByProductId,
    getSumRatingByProductId,
    getCountRatingByProductId
};

export { ratingsService };