import React, { useState } from 'react';
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

    return (
        <div className="App">
            <Header title="AlgaStock" />
            <Container>
                <Table 
                    headers={ headers }
                    data={ products }
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
