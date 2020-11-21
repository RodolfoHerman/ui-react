import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Table, { TableHeader } from '../../shared/Tabela';
import { Product } from '../../shared/Tabela/Table.mockdata';
import ProductForm, { ProductCreator } from './ProductForm';
import { connect, useDispatch } from 'react-redux'; 
import * as ProductsAction from '../../redux/Product/Product.action';
import { RootState, ThunkDispatch } from '../../redux';

const headers: Array<TableHeader> = [
    { key: 'id', value: '#' },
    { key: 'name', value: 'Product' },
    { key: 'price', value: 'Price', right: true },
    { key: 'stock', value: 'Available Stock', right: true },
];

declare interface ProductCRUDProps {
    products: Array<Product>
}

const ProductCRUD: React.FC<ProductCRUDProps> = (props) => {

    const dispatch: ThunkDispatch = useDispatch();

    const showErrorAlert = (err: Error) => Swal.fire('Oops!', err.message, 'error');

    // const [products, setProducts] = useState<Array<Product>>([]);
    const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(undefined);

    useEffect(() => {
        fetchData();
    // Array vazio para executar apenas uma vez (quando componente é criado)
    // não realizando nenhum bind de variáveis
    }, []);

    async function fetchData() {
        dispatch(ProductsAction.getProducts())
            .catch(showErrorAlert);
    }

    const handleProductSubmit = async (product: ProductCreator) => {
        dispatch(ProductsAction.insertNewProduct(product))
            .catch(showErrorAlert);
        
    }

    const handleProductUpdate = async (newProduct: Product) => {
        dispatch(ProductsAction.updateProduct(newProduct))
            .then(() => setUpdatingProduct(undefined))
            .catch(showErrorAlert)
    }

    const handleProductDetail = (product: Product) => {
        Swal.fire(
            'Product details',
            `${product.name} costs $${product.price} and we have ${product.stock} available in stock.`,
            'info'
        )
    }

    const deleteProduct = async (id: string) => {
        dispatch(ProductsAction.deleteProduct(id))
            .then(() => {
                Swal.fire('Uhuul', 'Product successfuly deleted', 'success');
            
                updatingProduct 
                    && updatingProduct._id === id 
                    && setUpdatingProduct(undefined);
            })
            .catch(showErrorAlert);
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
        })
        .then(({ value }) => value && deleteProduct(product._id));
    }

    return <>
            <Table 
                headers={ headers }
                data={ props.products }
                enableActions
                onEdit={setUpdatingProduct}
                onDetail={handleProductDetail}
                onDelete={handleProductDelete}
            />
            <ProductForm 
                form={ updatingProduct }
                onSubmit={ handleProductSubmit }
                onUpdate={ handleProductUpdate }
            />
        </>
}

const mapStateToProps = (state: RootState) => ({
    products: state.products
})

export default connect(mapStateToProps)(ProductCRUD);
