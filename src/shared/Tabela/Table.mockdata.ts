export interface Product {
    _id: string,
    name: string,
    price: number,
    stock: number,
    createdAt?: string,
    updatedAt?: string
}

const PRODUCTS: Array<Product> = [
    {
        _id: '1',
        name: 'Cookie',
        price: 1.29,
        stock: 15
    },
    {
        _id: '2',
        name: 'Milke',
        price: 0.99,
        stock: 10
    },
    {
        _id: '3',
        name: 'Water',
        price: 0.50,
        stock: 65
    },
    {
        _id: '4',
        name: 'Detergent',
        price: 1.00,
        stock: 10
    }
];

export default PRODUCTS;
