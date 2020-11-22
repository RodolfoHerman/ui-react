import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { login } from '../../redux/Authentication/Authentication.actions';
import Button from '../../shared/Button';
import Form from '../../shared/Form';
import Input from '../../shared/Input';

const LoginForm = () => {

    const dispatch = useDispatch();

    const [form, setForm] = useState({
        user: '',
        pass: ''
    });

    const history = useHistory();

    const handleLogin = async () => {
        try {
            await dispatch(login(form));
            history.push("/");
        } catch (error) {
            Swal.fire(
                "Error", 
                error.response?.data?.message || error.message, 
                "error"
            );
        }
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
