import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { createSingleProduct, deleteSingleProduct, getAllProducts, updateSingleProduct } from '../../services/Product.service';
import Container from '../../shared/Container';
import Table, { TableHeader } from '../../shared/Tabela';
import PRODUCTS, { Product } from '../../shared/Tabela/Table.mockdata';
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

    const [products, setProducts] = useState<Array<Product>>([]);
    const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(undefined);

    async function fetchData() {
        const _products = await getAllProducts();
        setProducts(_products);
    }

    useEffect(() => {

        fetchData();
    // Array vazio para executar apenas uma vez (quando componente é criado)
    // não realizando nenhum bind de variáveis
    }, []);

    const handleProductSubmit = async (product: ProductCreator) => {
        try {
            await createSingleProduct(product);
            fetchData();
        } catch (error) {
            Swal.fire(
                'Oopes!',
                error.message,
                'error'
            );
        }
    }

    const handleProductUpdate = async (newProduct: Product) => {
        try {
            await updateSingleProduct(newProduct);
            // Após realização do updateSingleProduct o fluxo segue normal.
            // Isso ocorre devido o 'await'
            setUpdatingProduct(undefined);
            fetchData();
        } catch (error) {
            Swal.fire(
                'Oopes!',
                error.message,
                'error'
            );
        }
    }

    const handleProductEdit = (product: Product) => {
        setUpdatingProduct(product);
    }

    const handleProductDetail = (product: Product) => {
        Swal.fire(
            'Product details',
            `${product.name} costs $${product.price} and we have ${product.stock} available in stock.`,
            'info'
        )
    }

    const deleteProduct = async (id: string) => {
        try {
            await deleteSingleProduct(id);
            Swal.fire('Uhuul', 'Product successfuly deleted', 'success');

            // Limpar formulário
            updatingProduct 
                && updatingProduct._id === id 
                && setUpdatingProduct(undefined);

            fetchData();

        } catch (error) {
            Swal.fire(
                'Oopes!',
                error.message,
                'error'
            );
        }
    }

    const handleProductDelete = (product: Product) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#09F',
            cancelButtonColor: '#d33',
            confirmButtonText: `Yes, delete ${product.name}!`
        }).then((result) => {

            if (!!result.isConfirmed) {
               
                deleteProduct(product._id);
            }
        })
    }

    return (
        <div className="App">
            <Header title="AlgaStock" />
            <Container>
                <Table 
                    headers={ headers }
                    data={ products }
                    enableActions
                    onEdit={handleProductEdit}
                    onDetail={handleProductDetail}
                    onDelete={handleProductDelete}
                />
                <ProductForm 
                    form={ updatingProduct }
                    onSubmit={ handleProductSubmit }
                    onUpdate={ handleProductUpdate }
                />
            </Container>
        </div>
    );
}

export default App;
