export interface Product {
    id: number,
    name: string,
    price: number,
    stock: number
}

const PRODUCTS: Array<Product> = [
    {
        id: 1,
        name: 'Cookie',
        price: 1.29,
        stock: 15
    },
    {
        id: 2,
        name: 'Milke',
        price: 0.99,
        stock: 10
    },
    {
        id: 3,
        name: 'Water',
        price: 0.50,
        stock: 65
    },
    {
        id: 4,
        name: 'Detergent',
        price: 1.00,
        stock: 10
    }
];

export default PRODUCTS;
