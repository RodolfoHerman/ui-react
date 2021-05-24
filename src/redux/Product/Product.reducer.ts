import { Action } from "../"
import { Product } from "../../shared/Tabela/Table.mockdata"

export default function(state: Array<Product> = [], action: Action): Array<Product> {
    switch(action.type) {
        case 'FETCH_PRODUCTS':
            return [...action.payload]
        case 'INSERT': 
            return [
                ...state,
                action.payload
            ]

        default:
            return state
    }
}