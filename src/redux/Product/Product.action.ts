import { Action, Thunk } from "../";
import { ProductCreator } from "../../components/Product/ProductForm";
import { getAllProducts } from "../../services/Product.service";
import { Product } from "../../shared/Tabela/Table.mockdata";

export const getProducts = (): Thunk<Array<Product>> => async (dispacth) => {
    const products = await getAllProducts();
    dispacth({
        type: 'FETCH_PRODUCTS',
        payload: products
    });
}

export const insertNewProduct = (product: ProductCreator): Action<ProductCreator> => {
    return {
        type: 'INSERT_NEW_PRODUCT',
        payload: product
    }
}