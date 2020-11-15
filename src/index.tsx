import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import http from './utils/http';

// Chamadas http utilizando o axios
http.get('/posts');
http.get('/posts/1');
// Sobreescrevendo o base url
http.get('https://viacep.com.br/ws/29140160/json/')

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
