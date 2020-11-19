import { ProductCreator } from "../../components/Product/ProductForm";
import { Action } from "./Product.reducer";

export const insertNewProduct = (product: ProductCreator): Action<ProductCreator> => {
    return {
        type: 'INSERT_NEW_PRODUCT',
        payload: product
    }
}