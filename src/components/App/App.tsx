import React from 'react';
import Container from '../../shared/Container';
import Table from '../../shared/Tabela';
import Header from '../Header';
import './App.css';

function App() {

    return (
        <div className="App">
            <Header title="AlgaStock" />
            <Container>
                <Table />
            </Container>
        </div>
    );
}

export default App;
