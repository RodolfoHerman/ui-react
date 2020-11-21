import { Thunk } from "../";
import { ProductCreator } from "../../components/Product/ProductForm";
import { 
    createSingleProduct, 
    deleteSingleProduct, 
    getAllProducts, 
    updateSingleProduct 
} from "../../services/Product.service";
import { Product } from "../../shared/Tabela/Table.mockdata";

export const updateProduct = (newProduct: Product): Thunk => async (dispatch) => {
    await updateSingleProduct(newProduct);
    dispatch(getProducts());
}

export const getProducts = (): Thunk<Array<Product>> => async (dispatch) => {
    const products = await getAllProducts();
    dispatch({
        type: 'FETCH_PRODUCTS',
        payload: products
    });
}


export const insertNewProduct = (product: ProductCreator): Thunk => async (dispatch) => {
    await createSingleProduct(product);
     dispatch(getProducts());
}

export const deleteProduct = (productId: string): Thunk => async (dispatch) => {
    await deleteSingleProduct(productId);
    dispatch(getProducts());
}
