import React from 'react';
import Button from '../../shared/Button';
import Container from '../../shared/Container';
import Form from '../../shared/Form';
import Input from '../../shared/Input';
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
                <Form title="Product form" onSubmit={ console.log }>
                    <Input 
                        label="Name"
                        placeholder="E.g: Cookie"
                    />
                    <Input 
                        label="Price"
                        type="number"
                        step="0.01"
                        min="0"
                        placeholder="E.g: 1.25"
                    />
                    <Input 
                        label="Stock"
                        type="number"
                        min="0"
                        placeholder="E.g: 1"
                    />
                    <Button>
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
}

export default App;
