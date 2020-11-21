import { Action } from "../"
import { Product } from "../../shared/Tabela/Table.mockdata"

export default function(state = [], action: Action): Array<Product> {
    switch(action.type) {
        case 'FETCH_PRODUCTS':
            return [...action.payload]

        default:
            return state
    }
}