import { Product } from "../../shared/Tabela/Table.mockdata";
import { Action } from "./Product.reducer";

export const insertNewProduct = (): Action<Product> => {
    return {
        type: 'INSERT_NEW_PRODUCT',
        payload: {
            _id: '123156fsdfs',
            name: 'Cookie',
            price: 0.35,
            stock: 700
        }
    }
}