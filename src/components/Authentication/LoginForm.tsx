import React, { useState } from 'react';
import Button from '../../shared/Button';
import Form from '../../shared/Form';
import Input from '../../shared/Input';

const LoginForm = () => {

    const [form, setForm] = useState({
        user: '',
        pass: ''
    });

    const handleLogin = () => {
        console.table(form);
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setForm({
            ...form,
            [name]: value
        });
    }

    return <Form title="Login Alga-stock" onSubmit={handleLogin}>
        <Input 
            label="User"
            name="user"
            value={form.user}
            onChange={handleInputChange}
            placeholder="E.g.: you_user_name123"
            />
        <Input 
            type="password"
            label="Password"
            name="pass"
            value={form.pass}
            onChange={handleInputChange}
        />
        <Button>
            Login
        </Button>
    </Form>
}

export default LoginForm;
