import { ProductCreator } from '../components/Product/ProductForm';
import { Product } from '../shared/Tabela/Table.mockdata';
import http from '../utils/http';

export const getAllProducts = () =>
    http
        .get<Array<Product>>('/products')
        .then(responde => responde.data);

export const createSingleProduct = (newProduct: ProductCreator) => 
    http
        .post('/products', newProduct);

export const updateSingleProduct = ({_id, name, price, stock}: Product) =>
    http
        .patch(`/products/${_id}`, {
            ...(name && {name}),
            ...(price && {price}),
            ...(stock && {stock})
        });

export const deleteSingleProduct = (id: string) =>
    http
        .delete(`/products/${id}`)