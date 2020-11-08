import React, { Component } from 'react';
import Button from '../../shared/Button';
import Container from '../../shared/Container';
import Header from '../Header';
import './App.css';

function TestComponent() {

    return <img 
        width="16"
        src="https://img.icons8.com/pastel-glyph/2x/search--v2.png"
        alt="Search icon"
    />
} 

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header title="AlgaStock" />

                <Container>
                    <Button 
                        content="Click me" 
                        onClick={ () => window.alert('Click') }
                        appendIcon={ <TestComponent /> }
                    >
                        Alert
                    </Button>
                </Container>
            </div>
        );
    }
}

export default App;
