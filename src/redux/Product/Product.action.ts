import { Action, Thunk } from "../";
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

export const deleteProduct = (productId: string): Thunk<void> => async (dispatch) => {
    await deleteSingleProduct(productId);
    dispatch(getProducts());
}

export const insertProduct = (product: ProductCreator): Thunk<Product | any> => async (dispatch, getState) => {
    try {
        dispatch({
            type: 'START_LOADING'
        })

        console.log("DURANTE")

        throw Error("Error")

        console.log("ESTADO ATUAL STORE : ", getState())
        dispatch ({
            type: 'INSERT',
            payload: {
                ...product,
                _id: '1234twr1'
            }
        })

    } catch (error) {
        dispatch({
            type: 'STOP_LOADING'
        })
        throw error
    }
    
}

// export const insertProduct = (product: ProductCreator): Action<Product> => {
//     return {
//         type: 'INSERT',
//         payload: {
//             ...product,
//             _id: '1234twr1'
//         }
//     }
// }
