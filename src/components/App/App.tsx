import React from 'react';
import Container from '../../shared/Container';
import Header from '../Header';
import ProductCRUD from '../Product/ProductCRUD';
import './App.css';

function App() {

    return (
        <div className="App">
            <Header title="AlgaStock" />
            <Container>
                <ProductCRUD />
            </Container>
        </div>
    );
}

export default App;
