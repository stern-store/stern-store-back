import { cartRepository } from "../ repositories/cart-repository.js"

const getCartUser = async (userId: number) => {
    return await cartRepository.getCartUserRepository(userId);
};

const getCartDetails = async (userId: number) => {
    return await cartRepository.getCartDetailsRepository(userId);
};

const postCartUser = async (userId:number, productId: number) => {
    return await cartRepository.postCartUSerRepository(userId, productId); 
};

const deletItemCart = async (cartId: number,) => {
    return await cartRepository.deletItemCartRepository(cartId);
};

const cartService = {
    getCartUser,
    getCartDetails,
    postCartUser,
    deletItemCart
};

export { cartService };