import { Action } from "../"
import { Product } from "../../shared/Tabela/Table.mockdata"

export default function(state = [], action: Action): Array<Product> {
    switch(action.type) {
        case 'FETCH_PRODUCTS':
            return [...action.payload]

        case 'INSERT_NEW_PRODUCT':
            return [...state, {
                ...action.payload,
                _id: String(state.length + 1)
            }]

        default:
            return state
    }
}