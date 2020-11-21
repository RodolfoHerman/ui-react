import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundView = () => {
    return <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        minHeight: '100vh'
    }}>
        <h1 style={{
            color: '#09F',
            fontWeight: 900
        }}>
            404
        </h1>
        <p>Não encontrado</p>
        <Link to="/" style={{
            color: '#09F',
            textDecoration: 'none',
            fontSize: '12',
            marginTop: '10px'
        }}>
            Voltar para a Home
        </Link>
    </div>
}

export default NotFoundView;
