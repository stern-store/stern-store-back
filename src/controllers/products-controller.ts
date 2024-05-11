import { Request, Response } from "express"
import { httpStatus } from "../response/https.status.js";
import { productsService } from "../services/products-service.js";

const listAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await productsService.getAllProducts();

        return res.status(httpStatus.OK).send(products);
    } catch(error) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    };
};

const productsDetails = async (req: Request, res: Response) => {
    const { productId } = req.params;
    
    if(!productId){
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
    try {
        const product = await productsService.getProductById(Number(productId));
        return res.status(httpStatus.OK).send(product);
    } catch(error) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    };
};

const searchProducts = async (req: Request, res: Response) => {
    const { search } = req.params;
    try{  
        const searchs = await productsService.getProductsSearch(String(search));
        return res.status(httpStatus.OK).send(searchs);

    }catch(error) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

const insertProducts = async (req: Request, res: Response) => {
    const {title, price,description, image, color, 
        dimentions, weight, stock, categories } =req.body;
        if(!title || !price || !description || !image ||
            !color || !dimentions || !weight || !stock || !categories){
                return res.sendStatus(httpStatus.BAD_REQUEST);
            }
    try{
        const algo = await productsService.postProductsDetailsStock(
            String(title),String(price),String(description), String(image),String(color),
            String(dimentions),String(weight),String(categories),Number(stock));
        return res.send(algo);
    }catch(error) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

const deleteProducts = async (req: Request, res: Response) => {
    return res.sendStatus(200);
}

export { 
    listAllProducts,
    productsDetails,
    searchProducts,
    insertProducts,
    deleteProducts
};