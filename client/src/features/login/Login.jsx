import React, { useState } from 'react';
import { login } from './loginAPI';
import { useNavigate } from 'react-router-dom';
import ErrorHandler from '../../shared/error/ErrorHandler';

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ email: null, password: null });
    const [error, setError] = useState(null);

    const handleChange = event => setUser({ ...user, [event.target.name]: event.target.value });

    const handleClick = async () => {
        try {
            const response = await login(user);
            if (response.status === 200) navigate('/');
        } catch (err) {
            setError(err.response?.data?.error);
        }
    }
    return <div>
        {error && <ErrorHandler error={error} callback={() => setError(null)} />}
        <h1>Login</h1>
        <div className='container'>
            <input
                type='email'
                name='email'
                placeholder='email'
                required
                onChange={handleChange}
            />
            <input
                type='password'
                name='password'
                placeholder='password'
                required
                onChange={handleChange}
            />

            <button type='submit' onClick={handleClick}>Login</button>
        </div>
    </div>
};

export default Login;
