import PRODUCTS from "../../shared/Tabela/Table.mockdata"

export interface Action<T = any> {
    type: string;
    payload?: T;
}

export default function(state = PRODUCTS, action: Action) {
    switch(action.type) {
        case 'INSERT_NEW_PRODUCT':
            return [...state, action.payload]

        default:
            return state
    }
}