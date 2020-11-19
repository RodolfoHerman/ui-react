import PRODUCTS, { Product } from "../../shared/Tabela/Table.mockdata"

export interface Action<T = any> {
    type: string;
    payload?: T;
}

export default function(state = PRODUCTS, action: Action): Array<Product> {
    switch(action.type) {
        case 'INSERT_NEW_PRODUCT':
            return [...state, {
                ...action.payload,
                _id: String(state.length + 1)
            }]

        default:
            return state
    }
}