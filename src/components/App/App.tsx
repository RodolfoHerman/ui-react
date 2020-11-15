import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Container from '../../shared/Container';
import Table, { TableHeader } from '../../shared/Tabela';
import PRODUCTS, { Product } from '../../shared/Tabela/Table.mockdata';
import Header from '../Header';
import ProductForm, { ProductCreator } from '../Product/ProductForm';
import './App.css';

const headers: Array<TableHeader> = [
    { key: 'id', value: '#' },
    { key: 'name', value: 'Product' },
    { key: 'price', value: 'Price', right: true },
    { key: 'stock', value: 'Available Stock', right: true },
];

function App() {

    const [products, setProducts] = useState(PRODUCTS);
    const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(PRODUCTS[0]);

    const handleProductSubmit = (product: ProductCreator) => {
        setProducts([
            ...products,
            {
                id: (products.length + 1),
                ...product
            }
        ]);
    }

    const handleProductUpdate = (newProduct: Product) => {
        setProducts(
            products.map(product => product.id === newProduct.id 
                ? newProduct
                : product
            )
        );

        setUpdatingProduct(undefined);
    }

    const handleProductEdit = (product: Product) => {
        setUpdatingProduct(product);
    }

    const handleProductDetail = (product: Product) => {
        Swal.fire(
            'Product details',
            `${product.name} costs $${product.price} and we have ${product.stock} available in stock.`,
            'info'
        )
    }

    const deleteProduct = (id: number) => {
        setProducts(products.filter(product => product.id !== id));

        updatingProduct 
            && updatingProduct.id === id 
            && setUpdatingProduct(undefined);
    }

    const handleProductDelete = (product: Product) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#09F',
            cancelButtonColor: '#d33',
            confirmButtonText: `Yes, delete ${product.name}!`
        }).then((result) => {

            if (!!result.isConfirmed) {
               
                deleteProduct(product.id);

                Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )
            }
        })
    }

    return (
        <div className="App">
            <Header title="AlgaStock" />
            <Container>
                <Table 
                    headers={ headers }
                    data={ products }
                    enableActions
                    onEdit={handleProductEdit}
                    onDetail={handleProductDetail}
                    onDelete={handleProductDelete}
                />
                <ProductForm 
                    form={ updatingProduct }
                    onSubmit={ handleProductSubmit }
                    onUpdate={ handleProductUpdate }
                />
            </Container>
        </div>
    );
}

export default App;
