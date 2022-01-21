import React, { useState } from 'react';
import { login } from './loginAPI';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ email: null, password: null });

    const handleChange = event => setUser({ ...user, [event.target.name]: event.target.value });

    const handleClick = async () => {
        await login(user);
        navigate('/');
    }

    return <div>
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
