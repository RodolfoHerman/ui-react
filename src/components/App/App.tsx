import React from 'react';
import Container from '../../shared/Container';
import Table, { TableHeader } from '../../shared/Tabela';
import PRODUCTS from '../../shared/Tabela/Table.mockdata';
import Header from '../Header';
import './App.css';

const headers: Array<TableHeader> = [
    { key: 'id', value: '#' },
    { key: 'name', value: 'Product' },
    { key: 'price', value: 'Price', right: true },
    { key: 'stock', value: 'Available Stock', right: true },
];

function App() {

    return (
        <div className="App">
            <Header title="AlgaStock" />
            <Container>
                <Table 
                    headers={ headers }
                    data={ PRODUCTS }
                />
            </Container>
        </div>
    );
}

export default App;
