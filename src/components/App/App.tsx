import React, { useState } from 'react';
import Container from '../../shared/Container';
import Table, { TableHeader } from '../../shared/Tabela';
import PRODUCTS from '../../shared/Tabela/Table.mockdata';
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

    const [products, setProducts] = useState(PRODUCTS)

    const handleProductSubmit = (product: ProductCreator) => {
        setProducts([
            ...products,
            {
                id: (products.length + 1),
                ...product
            }
        ]);
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
                    onSubmit={ handleProductSubmit }
                />
            </Container>
        </div>
    );
}

export default App;
