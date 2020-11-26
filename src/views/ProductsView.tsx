import React from 'react';
import Header from '../components/Header';
import ProductCRUD from '../components/Product/ProductCRUD';
import Container from '../shared/Container';

const ProductsView = () => {

    return <>
    <Header title="AlgaStock" />
        <Container>
            <ProductCRUD />
        </Container>
    </>
}

export default ProductsView;
