import React, { useEffect, useState } from 'react';

import Button from '../../shared/Button';
import Form from '../../shared/Form';
import Input from '../../shared/Input';
import { Product } from '../../shared/Tabela/Table.mockdata';
import withPermission from '../../utils/HOC/withPermission';

declare interface InitialFormState {
    _id?: string;
    name: string;
    price: string;
    stock: string;
}

export interface ProductCreator {
    name: string;
    price: number,
    stock: number
}

declare interface ProductFormProps {
    form?: Product;
    onSubmit?: (product: ProductCreator) => void;
    onUpdate?: (product: Product) => void;
}

const ProductForm: React.FC<ProductFormProps> = (props) => {
    const initialFormState: InitialFormState = props.form
    ? {
        _id: props.form._id,
        name: props.form.name,
        price: String(props.form.price),
        stock: String(props.form.stock)
    }
    : {
        name: '',
        price: '',
        stock: ''
    }
    
    const[form, setForm] = useState(initialFormState);

    useEffect(() => {
        setForm(initialFormState)
    }, [props.form]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;

        // Mantém as propriedades do form (...form) e modifica o valor do campo que está sendo modificado
        // através da sua chave [name] (que vem do input name)
        setForm({
            ...form,
            [name]: value
        });
    }

    const updateProduct = (product: InitialFormState) => {
        const productDTO = {
            _id: String(product._id),
            name: String(product.name),
            price: parseFloat(product.price),
            stock: Number(product.stock)
        }

        props.onUpdate && 
            props.onUpdate(productDTO);
    }

    const createProduct = (product: InitialFormState) => {
        const productDTO = {
            name: String(product.name),
            price: parseFloat(product.price),
            stock: Number(product.stock)
        }

        props.onSubmit &&
            props.onSubmit(productDTO);
    }

    const handleFormSubmit = () => {
        form._id 
            ? updateProduct(form)
            : createProduct(form)

        setForm(initialFormState);
    }
    
    return <Form title="Product form" onSubmit={ handleFormSubmit }>
        <Input
            onChange={ handleInputChange }
            value={ form.name }
            name="name"
            label="Name"
            placeholder="E.g: Cookie"
            required
        />
        <Input
            onChange={ handleInputChange }
            value={ form.price }
            name="price"
            label="Price"
            type="number"
            step="0.01"
            min="0"
            placeholder="E.g: 1.25"
            required
        />
        <Input
            onChange={ handleInputChange }
            value={ form.stock }
            name="stock"
            label="Stock"
            type="number"
            min="0"
            placeholder="E.g: 1"
            required
        />
        <Button>
            {
                form._id ? 'Update' : 'Submit'
            }
        </Button>
    </Form>
}

// Os perfis de admin e customer podem visualizar o formulário de produtos
export default withPermission(['admin', 'customer'])(ProductForm);

// Somente o perfil de customer pode visualizar o formulário de produtos
// export default withPermission(['customer'])(ProductForm);
