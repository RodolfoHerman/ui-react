import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent from '../TestComponent';
import ClassComponent from '../ClassComponent';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <TestComponent />
                    <ClassComponent name="Porps name" />
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
