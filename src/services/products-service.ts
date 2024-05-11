import { productsRepositories } from "../ repositories/products-repository.js";
import { ratingsService } from "./ratings-service.js";


const getAllProducts = async () => {
    const products = await productsRepositories.getAllProductsRepository();
    // const rating = await productsRepositories.getAllRatingRepository() 
    return products;
};
const getProductById = async (productId: number) => {
    return await productsRepositories.getProductByIdRepository(productId);
};
const getProductsSearch = async (search: string) => {
    const searchs = await productsRepositories.getProductsSearchRepository(search);
    return searchs;
};

const postProductsDetailsStock = async (title:string, price:string ,description:string, image: string
    ,color: string ,dimentions: string ,weight:string ,categories:string, stock: number) => {
    
    try {
        const category = await productsRepositories.findCategoryByNameRepository(categories);
        const categoryId= category[0].id;
    
        if (categoryId) {
            const insertProduct = await productsRepositories.insertProductRepository(title,price,description,image);  
            const productId = insertProduct[0].id;

            if(insertProduct[0].id) {
                try {
                    const insertCategory = await productsRepositories.insertCategoryRepository(productId,categoryId);
                    const categoryProductId = insertCategory[0].id
                    // console.log("aaaaaaaaaaaaa")
                    if(categoryProductId){

                        try {
                            const insertDetails = await productsRepositories.insertDetailsRepository(productId,color,dimentions,weight);
                            const detailsId = insertDetails[0].id;

                        if(detailsId){

                            try {
                                return await productsRepositories.insertStockRepository(productId,stock)
                            }catch {
                                
                                await productsRepositories.deleteDetailsRepository(detailsId);
                                await productsRepositories.deleteCategoryByIdRepository(categoryProductId)
                                return await productsRepositories.deleteProductRepository(productId);
                            }
                        }
                        }catch {
                            await productsRepositories.deleteCategoryByIdRepository(categoryProductId);
                            return await productsRepositories.deleteProductRepository(productId);
                        }
                        
                    }
                }catch{
                    return await productsRepositories.deleteProductRepository(productId);
                }
            }
        }     
       
    }catch{
        return;
    }
};

const productsService ={
    getAllProducts,
    getProductById,
    getProductsSearch,
    postProductsDetailsStock
};

export { productsService };