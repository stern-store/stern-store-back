import { categoriesRepository } from "../ repositories/categories-repository.js";

const getAllCategories = async () => {
    return await categoriesRepository.getAllCategoriesRepository();
};

const getProductByCategory = async (categoryId: number) =>{
    return await categoriesRepository.getProductByCategoryRepository(categoryId);
}
const postCategoryName = async (category: string) => {
    return await categoriesRepository.postCategoryNameRepository(category);
}
const deleteCategoryName = async (category: string)=> {
    return await categoriesRepository.deleteCategoryNameRepository(category);
}

const categoriesService = { 
    getAllCategories,
    getProductByCategory,
    postCategoryName,
    deleteCategoryName
};

export { categoriesService };